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
# @!attribute [rw] address
#   @return [Array, nil]
#
# @!attribute [rw] basic
#   @return [Hash, nil]
#
# @!attribute [rw] endpoint
#   @return [Array, nil]
#
# @!attribute [rw] enumeration_type
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [Array, nil]
#
# @!attribute [rw] number
#   @return [String, nil]
#
# @!attribute [rw] other_name
#   @return [Array, nil]
#
# @!attribute [rw] practice_location
#   @return [Array, nil]
#
# @!attribute [rw] taxonomy
#   @return [Array, nil]
SearchNpi = Struct.new(
  :address,
  :basic,
  :endpoint,
  :enumeration_type,
  :identifier,
  :number,
  :other_name,
  :practice_location,
  :taxonomy,
  keyword_init: true
)

# Request payload for SearchNpi#list.
#
# @!attribute [rw] address
#   @return [Array, nil]
#
# @!attribute [rw] basic
#   @return [Hash, nil]
#
# @!attribute [rw] endpoint
#   @return [Array, nil]
#
# @!attribute [rw] enumeration_type
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [Array, nil]
#
# @!attribute [rw] number
#   @return [String, nil]
#
# @!attribute [rw] other_name
#   @return [Array, nil]
#
# @!attribute [rw] practice_location
#   @return [Array, nil]
#
# @!attribute [rw] taxonomy
#   @return [Array, nil]
SearchNpiListMatch = Struct.new(
  :address,
  :basic,
  :endpoint,
  :enumeration_type,
  :identifier,
  :number,
  :other_name,
  :practice_location,
  :taxonomy,
  keyword_init: true
)

