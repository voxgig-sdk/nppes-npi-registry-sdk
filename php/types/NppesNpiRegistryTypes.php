<?php
declare(strict_types=1);

// Typed models for the NppesNpiRegistry SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** SearchNpi entity data model. */
class SearchNpi
{
    public ?array $addresses = null;
    public ?array $basic = null;
    public ?array $endpoints = null;
    public ?string $enumeration_type = null;
    public ?array $identifiers = null;
    public ?string $number = null;
    public ?array $other_names = null;
    public ?array $practiceLocations = null;
    public ?array $taxonomies = null;
}

/** Request payload for SearchNpi#list. */
class SearchNpiListMatch
{
    public ?string $address_purpose = null;
    public ?string $city = null;
    public ?string $country_code = null;
    public ?string $enumeration_type = null;
    public ?string $first_name = null;
    public ?string $last_name = null;
    public ?int $limit = null;
    public ?string $number = null;
    public ?string $organization_name = null;
    public ?string $postal_code = null;
    public ?bool $pretty = null;
    public ?int $skip = null;
    public ?string $state = null;
    public ?string $taxonomy_description = null;
    public ?string $version = null;
}

