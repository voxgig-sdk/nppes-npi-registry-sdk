# SearchNpi entity test

require "minitest/autorun"
require "json"
require_relative "../NppesNpiRegistry_sdk"
require_relative "runner"

class SearchNpiEntityTest < Minitest::Test
  def test_create_instance
    testsdk = NppesNpiRegistrySDK.test(nil, nil)
    ent = testsdk.SearchNpi(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = search_npi_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "search_npi." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set NPPESNPIREGISTRY_TEST_SEARCH_NPI_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    search_npi_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.search_npi")))
    search_npi_ref01_data = nil
    if search_npi_ref01_data_raw.length > 0
      search_npi_ref01_data = Helpers.to_map(search_npi_ref01_data_raw[0][1])
    end

    # LIST
    search_npi_ref01_ent = client.SearchNpi(nil)
    search_npi_ref01_match = {}

    search_npi_ref01_list_result, err = search_npi_ref01_ent.list(search_npi_ref01_match, nil)
    assert_nil err
    assert search_npi_ref01_list_result.is_a?(Array)

  end
end

def search_npi_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "search_npi", "SearchNpiTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = NppesNpiRegistrySDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["search_npi01", "search_npi02", "search_npi03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["NPPESNPIREGISTRY_TEST_SEARCH_NPI_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "NPPESNPIREGISTRY_TEST_SEARCH_NPI_ENTID" => idmap,
    "NPPESNPIREGISTRY_TEST_LIVE" => "FALSE",
    "NPPESNPIREGISTRY_TEST_EXPLAIN" => "FALSE",
    "NPPESNPIREGISTRY_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["NPPESNPIREGISTRY_TEST_SEARCH_NPI_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["NPPESNPIREGISTRY_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["NPPESNPIREGISTRY_APIKEY"],
      },
      extra || {},
    ])
    client = NppesNpiRegistrySDK.new(Helpers.to_map(merged_opts))
  end

  live = env["NPPESNPIREGISTRY_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["NPPESNPIREGISTRY_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
