<?php
declare(strict_types=1);

// SearchNpi entity test

require_once __DIR__ . '/../nppesnpiregistry_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class SearchNpiEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = NppesNpiRegistrySDK::test(null, null);
        $ent = $testsdk->SearchNpi(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = search_npi_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "search_npi." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set NPPESNPIREGISTRY_TEST_SEARCH_NPI_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $search_npi_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.search_npi")));
        $search_npi_ref01_data = null;
        if (count($search_npi_ref01_data_raw) > 0) {
            $search_npi_ref01_data = Helpers::to_map($search_npi_ref01_data_raw[0][1]);
        }

        // LIST
        $search_npi_ref01_ent = $client->SearchNpi(null);
        $search_npi_ref01_match = [];

        [$search_npi_ref01_list_result, $err] = $search_npi_ref01_ent->list($search_npi_ref01_match, null);
        $this->assertNull($err);
        $this->assertIsArray($search_npi_ref01_list_result);

    }
}

function search_npi_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/search_npi/SearchNpiTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = NppesNpiRegistrySDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["search_npi01", "search_npi02", "search_npi03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("NPPESNPIREGISTRY_TEST_SEARCH_NPI_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "NPPESNPIREGISTRY_TEST_SEARCH_NPI_ENTID" => $idmap,
        "NPPESNPIREGISTRY_TEST_LIVE" => "FALSE",
        "NPPESNPIREGISTRY_TEST_EXPLAIN" => "FALSE",
        "NPPESNPIREGISTRY_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["NPPESNPIREGISTRY_TEST_SEARCH_NPI_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["NPPESNPIREGISTRY_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["NPPESNPIREGISTRY_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new NppesNpiRegistrySDK(Helpers::to_map($merged_opts));
    }

    $live = $env["NPPESNPIREGISTRY_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["NPPESNPIREGISTRY_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
