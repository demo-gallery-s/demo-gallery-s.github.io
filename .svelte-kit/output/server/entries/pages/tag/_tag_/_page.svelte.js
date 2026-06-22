import "../../../../chunks/internal.js";
import { n as derived } from "../../../../chunks/server.js";
import "../../../../chunks/state.js";
import { t as svelteDeviantartLink_default } from "../../../../chunks/svelteDeviantartLink.js";
import { n as LandscapeImages, t as PortriatImages } from "../../../../chunks/PortriatImages.js";
//#region src/routes/tag/[tag]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		[...svelteDeviantartLink_default.loadImagesForGallery()];
		let filteredImages = [];
		let noImages = derived(() => filteredImages.length == 0);
		LandscapeImages($$renderer, {
			linkLibrary: filteredImages,
			title: "Landscape 1"
		});
		$$renderer.push(`<!----> `);
		PortriatImages($$renderer, {
			linkLibrary: filteredImages,
			title: "Portriat 1"
		});
		$$renderer.push(`<!----> `);
		if (noImages()) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p>No images found with this tag...</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { _page as default };
