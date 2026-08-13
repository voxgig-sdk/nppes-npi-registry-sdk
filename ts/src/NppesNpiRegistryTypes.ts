// Typed models for the NppesNpiRegistry SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface SearchNpi {
  addresses?: any[]
  basic?: Record<string, any>
  endpoints?: any[]
  enumeration_type?: string
  identifiers?: any[]
  number?: string
  other_names?: any[]
  practiceLocations?: any[]
  taxonomies?: any[]
}

export interface SearchNpiListMatch {
  addresses?: any[]
  basic?: Record<string, any>
  endpoints?: any[]
  enumeration_type?: string
  identifiers?: any[]
  number?: string
  other_names?: any[]
  practiceLocations?: any[]
  taxonomies?: any[]
}

