import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.Bx862PBb.js","_app/immutable/chunks/D-mJpAUr.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/xZXBzO74.js","_app/immutable/chunks/BHjrHUDN.js"];
export const stylesheets = [];
export const fonts = [];
