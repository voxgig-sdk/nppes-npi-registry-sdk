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
# @!attribute [rw] address_purpose
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] country_code
#   @return [String, nil]
#
# @!attribute [rw] enumeration_type
#   @return [String, nil]
#
# @!attribute [rw] first_name
#   @return [String, nil]
#
# @!attribute [rw] last_name
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] number
#   @return [String, nil]
#
# @!attribute [rw] organization_name
#   @return [String, nil]
#
# @!attribute [rw] postal_code
#   @return [String, nil]
#
# @!attribute [rw] pretty
#   @return [Boolean, nil]
#
# @!attribute [rw] skip
#   @return [Integer, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] taxonomy_description
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
SearchNpiListMatch = Struct.new(
  :address_purpose,
  :city,
  :country_code,
  :enumeration_type,
  :first_name,
  :last_name,
  :limit,
  :number,
  :organization_name,
  :postal_code,
  :pretty,
  :skip,
  :state,
  :taxonomy_description,
  :version,
  keyword_init: true
)

