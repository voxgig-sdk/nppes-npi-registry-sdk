package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/nppes-npi-registry-sdk"
	"github.com/voxgig-sdk/nppes-npi-registry-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestSearchNpiEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.SearchNpi(nil)
		if ent == nil {
			t.Fatal("expected non-nil SearchNpiEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := search_npiBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "search_npi." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set NPPESNPIREGISTRY_TEST_SEARCH_NPI_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		searchNpiRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.search_npi", setup.data)))
		var searchNpiRef01Data map[string]any
		if len(searchNpiRef01DataRaw) > 0 {
			searchNpiRef01Data = core.ToMapAny(searchNpiRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = searchNpiRef01Data

		// LIST
		searchNpiRef01Ent := client.SearchNpi(nil)
		searchNpiRef01Match := map[string]any{}

		searchNpiRef01ListResult, err := searchNpiRef01Ent.List(searchNpiRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, searchNpiRef01ListOk := searchNpiRef01ListResult.([]any)
		if !searchNpiRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", searchNpiRef01ListResult)
		}

	})
}

func search_npiBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "search_npi", "SearchNpiTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read search_npi test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse search_npi test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"search_npi01", "search_npi02", "search_npi03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("NPPESNPIREGISTRY_TEST_SEARCH_NPI_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NPPESNPIREGISTRY_TEST_SEARCH_NPI_ENTID": idmap,
		"NPPESNPIREGISTRY_TEST_LIVE":      "FALSE",
		"NPPESNPIREGISTRY_TEST_EXPLAIN":   "FALSE",
		"NPPESNPIREGISTRY_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["NPPESNPIREGISTRY_TEST_SEARCH_NPI_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["NPPESNPIREGISTRY_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["NPPESNPIREGISTRY_APIKEY"],
			},
			extra,
		})
		client = sdk.NewNppesNpiRegistrySDK(core.ToMapAny(mergedOpts))
	}

	live := env["NPPESNPIREGISTRY_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["NPPESNPIREGISTRY_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
