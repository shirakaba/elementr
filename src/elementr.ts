// Repository module structure based on that of elliptic.
// https://www.typescriptlang.org/docs/handbook/modules.html
// We re-export everything from both 'core' and 'aliases' as one mega-module,
// from which consumers can directly import both makeElement() and div().

export * from "./elementr/core/index";
export * from "./elementr/aliases/index";
