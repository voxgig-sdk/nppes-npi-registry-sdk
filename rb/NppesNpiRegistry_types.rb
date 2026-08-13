# frozen_string_literal: true

# Typed models for the NppesNpiRegistry SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# SearchNpi entity data model.
#
# @!attribute [rw] addresses
#   @return [Array, nil]
#
# @!attribute [rw] basic
#   @return [Hash, nil]
#
# @!attribute [rw] endpoints
#   @return [Array, nil]
#
# @!attribute [rw] enumeration_type
#   @return [String, nil]
#
# @!attribute [rw] identifiers
#   @return [Array, nil]
#
# @!attribute [rw] number
#   @return [String, nil]
#
# @!attribute [rw] other_names
#   @return [Array, nil]
#
# @!attribute [rw] practiceLocations
#   @return [Array, nil]
#
# @!attribute [rw] taxonomies
#   @return [Array, nil]
SearchNpi = Struct.new(
  :addresses,
  :basic,
  :endpoints,
  :enumeration_type,
  :identifiers,
  :number,
  :other_names,
  :practiceLocations,
  :taxonomies,
  keyword_init: true
)

# Request payload for SearchNpi#list.
#
# @!attribute [rw] addresses
#   @return [Array, nil]
#
# @!attribute [rw] basic
#   @return [Hash, nil]
#
# @!attribute [rw] endpoints
#   @return [Array, nil]
#
# @!attribute [rw] enumeration_type
#   @return [String, nil]
#
# @!attribute [rw] identifiers
#   @return [Array, nil]
#
# @!attribute [rw] number
#   @return [String, nil]
#
# @!attribute [rw] other_names
#   @return [Array, nil]
#
# @!attribute [rw] practiceLocations
#   @return [Array, nil]
#
# @!attribute [rw] taxonomies
#   @return [Array, nil]
SearchNpiListMatch = Struct.new(
  :addresses,
  :basic,
  :endpoints,
  :enumeration_type,
  :identifiers,
  :number,
  :other_names,
  :practiceLocations,
  :taxonomies,
  keyword_init: true
)

