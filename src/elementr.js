"use strict";
// Repository module structure based on that of elliptic.
// https://www.typescriptlang.org/docs/handbook/modules.html
// We re-export everything from both 'core' and 'aliases' as one mega-module,
// from which consumers can directly import both makeElement() and div().
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./elementr/core/index"));
__export(require("./elementr/aliases/index"));
