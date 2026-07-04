# Typed models for the NppesNpiRegistry SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class SearchNpi:
    address: Optional[list] = None
    basic: Optional[dict] = None
    endpoint: Optional[list] = None
    enumeration_type: Optional[str] = None
    identifier: Optional[list] = None
    number: Optional[str] = None
    other_name: Optional[list] = None
    practice_location: Optional[list] = None
    taxonomy: Optional[list] = None


@dataclass
class SearchNpiListMatch:
    address: Optional[list] = None
    basic: Optional[dict] = None
    endpoint: Optional[list] = None
    enumeration_type: Optional[str] = None
    identifier: Optional[list] = None
    number: Optional[str] = None
    other_name: Optional[list] = None
    practice_location: Optional[list] = None
    taxonomy: Optional[list] = None

