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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"title": "Addresses",
						"type": "`$ARRAY`",
						"short": "Provider addresses",
					},
					map[string]any{
						"name": "basic",
						"title": "Basic",
						"type": "`$OBJECT`",
						"short": "Basic provider information",
					},
					map[string]any{
						"name": "endpoints",
						"title": "Endpoints",
						"type": "`$ARRAY`",
						"short": "Provider endpoints for health information exchange",
					},
					map[string]any{
						"name": "enumeration_type",
						"title": "Enumeration Type",
						"type": "`$STRING`",
						"short": "Type of enumeration",
					},
					map[string]any{
						"name": "identifiers",
						"title": "Identifiers",
						"type": "`$ARRAY`",
						"short": "Other identifiers",
					},
					map[string]any{
						"name": "number",
						"title": "Number",
						"type": "`$STRING`",
						"short": "NPI number",
					},
					map[string]any{
						"name": "other_names",
						"title": "Other Names",
						"type": "`$ARRAY`",
						"short": "Other names associated with the provider",
					},
					map[string]any{
						"name": "practiceLocations",
						"title": "Practice Locations",
						"type": "`$ARRAY`",
						"short": "Practice locations",
					},
					map[string]any{
						"name": "taxonomies",
						"title": "Taxonomies",
						"type": "`$ARRAY`",
						"short": "Provider taxonomy codes and descriptions",
					},
				},
				"name": "search_npi",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/",
								"segments": []any{},
								"parts": []any{},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "address_purpose",
											"orig": "address_purpose",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "city",
											"orig": "city",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "country_code",
											"orig": "country_code",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "enumeration_type",
											"orig": "enumeration_type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "first_name",
											"orig": "first_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "last_name",
											"orig": "last_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "number",
											"orig": "number",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "organization_name",
											"orig": "organization_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "postal_code",
											"orig": "postal_code",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "pretty",
											"orig": "pretty",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "skip",
											"orig": "skip",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "state",
											"orig": "state",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "taxonomy_description",
											"orig": "taxonomy_description",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "version",
											"orig": "version",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2.1",
										},
									},
								},
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
