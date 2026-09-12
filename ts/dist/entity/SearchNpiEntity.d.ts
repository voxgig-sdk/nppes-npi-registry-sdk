import { NppesNpiRegistryEntityBase } from '../NppesNpiRegistryEntityBase';
import type { NppesNpiRegistrySDK } from '../NppesNpiRegistrySDK';
import type { Control } from '../types';
import type { SearchNpi, SearchNpiListMatch } from '../NppesNpiRegistryTypes';
declare class SearchNpiEntity extends NppesNpiRegistryEntityBase<SearchNpi> {
    constructor(client: NppesNpiRegistrySDK, entopts: any);
    make(this: SearchNpiEntity): SearchNpiEntity;
    list(this: any, reqmatch?: SearchNpiListMatch, ctrl?: Control): Promise<SearchNpiEntity[]>;
}
export { SearchNpiEntity };
