-- NppesNpiRegistry SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "NppesNpiRegistry",
      slug = "nppes-npi-registry",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://npiregistry.cms.hhs.gov/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["search_npi"] = {},
      },
    },
    entity = {
      ["search_npi"] = {
        ["fields"] = {
          {
            ["name"] = "addresses",
            ["title"] = "Addresses",
            ["type"] = "`$ARRAY`",
            ["short"] = "Provider addresses",
          },
          {
            ["name"] = "basic",
            ["title"] = "Basic",
            ["type"] = "`$OBJECT`",
            ["short"] = "Basic provider information",
          },
          {
            ["name"] = "endpoints",
            ["title"] = "Endpoints",
            ["type"] = "`$ARRAY`",
            ["short"] = "Provider endpoints for health information exchange",
          },
          {
            ["name"] = "enumeration_type",
            ["title"] = "Enumeration Type",
            ["type"] = "`$STRING`",
            ["short"] = "Type of enumeration",
          },
          {
            ["name"] = "identifiers",
            ["title"] = "Identifiers",
            ["type"] = "`$ARRAY`",
            ["short"] = "Other identifiers",
          },
          {
            ["name"] = "number",
            ["title"] = "Number",
            ["type"] = "`$STRING`",
            ["short"] = "NPI number",
          },
          {
            ["name"] = "other_names",
            ["title"] = "Other Names",
            ["type"] = "`$ARRAY`",
            ["short"] = "Other names associated with the provider",
          },
          {
            ["name"] = "practiceLocations",
            ["title"] = "Practice Locations",
            ["type"] = "`$ARRAY`",
            ["short"] = "Practice locations",
          },
          {
            ["name"] = "taxonomies",
            ["title"] = "Taxonomies",
            ["type"] = "`$ARRAY`",
            ["short"] = "Provider taxonomy codes and descriptions",
          },
        },
        ["name"] = "search_npi",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/",
                ["segments"] = {},
                ["parts"] = {},
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "address_purpose",
                      ["orig"] = "address_purpose",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "city",
                      ["orig"] = "city",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "country_code",
                      ["orig"] = "country_code",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "enumeration_type",
                      ["orig"] = "enumeration_type",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "first_name",
                      ["orig"] = "first_name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "last_name",
                      ["orig"] = "last_name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 10,
                    },
                    {
                      ["name"] = "number",
                      ["orig"] = "number",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "organization_name",
                      ["orig"] = "organization_name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "postal_code",
                      ["orig"] = "postal_code",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "pretty",
                      ["orig"] = "pretty",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "skip",
                      ["orig"] = "skip",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                    {
                      ["name"] = "state",
                      ["orig"] = "state",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "taxonomy_description",
                      ["orig"] = "taxonomy_description",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "version",
                      ["orig"] = "version",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "2.1",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "address_purpose",
                    "city",
                    "country_code",
                    "enumeration_type",
                    "first_name",
                    "last_name",
                    "limit",
                    "number",
                    "organization_name",
                    "postal_code",
                    "pretty",
                    "skip",
                    "state",
                    "taxonomy_description",
                    "version",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
