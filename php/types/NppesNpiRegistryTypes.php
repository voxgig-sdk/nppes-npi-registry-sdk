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
    public ?array $address = null;
    public ?array $basic = null;
    public ?array $endpoint = null;
    public ?string $enumeration_type = null;
    public ?array $identifier = null;
    public ?string $number = null;
    public ?array $other_name = null;
    public ?array $practice_location = null;
    public ?array $taxonomy = null;
}

/** Request payload for SearchNpi#list. */
class SearchNpiListMatch
{
    public ?array $address = null;
    public ?array $basic = null;
    public ?array $endpoint = null;
    public ?string $enumeration_type = null;
    public ?array $identifier = null;
    public ?string $number = null;
    public ?array $other_name = null;
    public ?array $practice_location = null;
    public ?array $taxonomy = null;
}

