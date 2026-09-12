export interface SearchNpi {
    addresses?: any[];
    basic?: Record<string, any>;
    endpoints?: any[];
    enumeration_type?: string;
    identifiers?: any[];
    number?: string;
    other_names?: any[];
    practiceLocations?: any[];
    taxonomies?: any[];
}
export interface SearchNpiListMatch {
    address_purpose?: string;
    city?: string;
    country_code?: string;
    enumeration_type?: string;
    first_name?: string;
    last_name?: string;
    limit?: number;
    number?: string;
    organization_name?: string;
    postal_code?: string;
    pretty?: boolean;
    skip?: number;
    state?: string;
    taxonomy_description?: string;
    version?: string;
}
