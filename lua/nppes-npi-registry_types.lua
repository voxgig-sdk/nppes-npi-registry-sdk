-- Typed models for the NppesNpiRegistry SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class SearchNpi
---@field addresses? table
---@field basic? table
---@field endpoints? table
---@field enumeration_type? string
---@field identifiers? table
---@field number? string
---@field other_names? table
---@field practiceLocations? table
---@field taxonomies? table

---@class SearchNpiListMatch
---@field address_purpose? string
---@field city? string
---@field country_code? string
---@field enumeration_type? string
---@field first_name? string
---@field last_name? string
---@field limit? number
---@field number? string
---@field organization_name? string
---@field postal_code? string
---@field pretty? boolean
---@field skip? number
---@field state? string
---@field taxonomy_description? string
---@field version? string

local M = {}

return M
