# NppesNpiRegistry SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "NppesNpiRegistry",
            "slug": "nppes-npi-registry",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://npiregistry.cms.hhs.gov/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "search_npi": {},
            },
        },
        "entity": {
      "search_npi": {
        "fields": [
          {
            "name": "addresses",
            "short": "Provider addresses",
            "type": "`$ARRAY`",
          },
          {
            "name": "basic",
            "short": "Basic provider information",
            "type": "`$OBJECT`",
          },
          {
            "name": "endpoints",
            "short": "Provider endpoints for health information exchange",
            "type": "`$ARRAY`",
          },
          {
            "name": "enumeration_type",
            "short": "Type of enumeration",
            "type": "`$STRING`",
          },
          {
            "name": "identifiers",
            "short": "Other identifiers",
            "type": "`$ARRAY`",
          },
          {
            "name": "number",
            "short": "NPI number",
            "type": "`$STRING`",
          },
          {
            "name": "other_names",
            "short": "Other names associated with the provider",
            "type": "`$ARRAY`",
          },
          {
            "name": "practiceLocations",
            "short": "Practice locations",
            "type": "`$ARRAY`",
          },
          {
            "name": "taxonomies",
            "short": "Provider taxonomy codes and descriptions",
            "type": "`$ARRAY`",
          },
        ],
        "name": "search_npi",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "address_purpose",
                      "orig": "address_purpose",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "city",
                      "orig": "city",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "country_code",
                      "orig": "country_code",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "enumeration_type",
                      "orig": "enumeration_type",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "first_name",
                      "orig": "first_name",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "last_name",
                      "orig": "last_name",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "number",
                      "orig": "number",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "organization_name",
                      "orig": "organization_name",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "postal_code",
                      "orig": "postal_code",
                      "type": "`$STRING`",
                    },
                    {
                      "example": False,
                      "kind": "query",
                      "name": "pretty",
                      "orig": "pretty",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "skip",
                      "orig": "skip",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "state",
                      "orig": "state",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "taxonomy_description",
                      "orig": "taxonomy_description",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "2.1",
                      "kind": "query",
                      "name": "version",
                      "orig": "version",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/",
                "segments": [],
                "select": {
                  "exist": [
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
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "parts": [],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
