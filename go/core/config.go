package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "NppesNpiRegistry",
			"slug": "nppes-npi-registry",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://npiregistry.cms.hhs.gov/api",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"search_npi": map[string]any{},
			},
		},
		"entity": map[string]any{
			"search_npi": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "addresses",
						"short": "Provider addresses",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "basic",
						"short": "Basic provider information",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "endpoints",
						"short": "Provider endpoints for health information exchange",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "enumeration_type",
						"short": "Type of enumeration",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "identifiers",
						"short": "Other identifiers",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "number",
						"short": "NPI number",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "other_names",
						"short": "Other names associated with the provider",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "practiceLocations",
						"short": "Practice locations",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "taxonomies",
						"short": "Provider taxonomy codes and descriptions",
						"type": "`$ARRAY`",
					},
				},
				"name": "search_npi",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "address_purpose",
											"orig": "address_purpose",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "city",
											"orig": "city",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "country_code",
											"orig": "country_code",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "enumeration_type",
											"orig": "enumeration_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "first_name",
											"orig": "first_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "last_name",
											"orig": "last_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "number",
											"orig": "number",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "organization_name",
											"orig": "organization_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "postal_code",
											"orig": "postal_code",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "pretty",
											"orig": "pretty",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "skip",
											"orig": "skip",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "state",
											"orig": "state",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "taxonomy_description",
											"orig": "taxonomy_description",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2.1",
											"kind": "query",
											"name": "version",
											"orig": "version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/",
								"segments": []any{},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"parts": []any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
