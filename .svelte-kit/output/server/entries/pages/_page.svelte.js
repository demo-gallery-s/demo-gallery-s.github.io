import "../../chunks/server.js";
import { t as svelteDeviantartLink_default } from "../../chunks/svelteDeviantartLink.js";
import { n as LandscapeImages, t as PortriatImages } from "../../chunks/PortriatImages.js";
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const linkLibrary = [
			...svelteDeviantartLink_default.loadImagesForGallery(),
			...svelteDeviantartLink_default.loadImagesForGallery(),
			...svelteDeviantartLink_default.loadImagesForGallery(),
			...svelteDeviantartLink_default.loadImagesForGallery()
		];
		LandscapeImages($$renderer, {
			linkLibrary,
			title: "Landscape 1"
		});
		$$renderer.push(`<!----> `);
		PortriatImages($$renderer, {
			linkLibrary,
			title: "Portriat 1"
		});
		$$renderer.push(`<!---->`);
	});
}
//#endregion
export { _page as default };
