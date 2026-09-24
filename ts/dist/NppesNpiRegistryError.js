"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NppesNpiRegistryError = void 0;
class NppesNpiRegistryError extends Error {
    isNppesNpiRegistryError = true;
    sdk = 'NppesNpiRegistry';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.NppesNpiRegistryError = NppesNpiRegistryError;
//# sourceMappingURL=NppesNpiRegistryError.js.map