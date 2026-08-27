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
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
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
            ["short"] = "Provider addresses",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "basic",
            ["short"] = "Basic provider information",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "endpoints",
            ["short"] = "Provider endpoints for health information exchange",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "enumeration_type",
            ["short"] = "Type of enumeration",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "identifiers",
            ["short"] = "Other identifiers",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "number",
            ["short"] = "NPI number",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "other_names",
            ["short"] = "Other names associated with the provider",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "practiceLocations",
            ["short"] = "Practice locations",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "taxonomies",
            ["short"] = "Provider taxonomy codes and descriptions",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "search_npi",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "address_purpose",
                      ["orig"] = "address_purpose",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "city",
                      ["orig"] = "city",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "country_code",
                      ["orig"] = "country_code",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "enumeration_type",
                      ["orig"] = "enumeration_type",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "first_name",
                      ["orig"] = "first_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "last_name",
                      ["orig"] = "last_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "number",
                      ["orig"] = "number",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "organization_name",
                      ["orig"] = "organization_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "postal_code",
                      ["orig"] = "postal_code",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "pretty",
                      ["orig"] = "pretty",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "skip",
                      ["orig"] = "skip",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "state",
                      ["orig"] = "state",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "taxonomy_description",
                      ["orig"] = "taxonomy_description",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "2.1",
                      ["kind"] = "query",
                      ["name"] = "version",
                      ["orig"] = "version",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/",
                ["parts"] = {},
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
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
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
