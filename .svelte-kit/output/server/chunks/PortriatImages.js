import { _ as attr, r as ensure_array_like, v as escape_html } from "./server.js";
//#region src/lib/elements/ImageModal.svelte
function ImageModal($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { image, onClose } = $$props;
		$$renderer.push(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/85"><div class="relative max-w-3xl w-full mx-4 bg-slate-900 rounded-lg overflow-hidden shadow-2xl"><button class="absolute top-3 right-3 text-white bg-slate-900/25 text-xl p-2 rounded-lg cursor-pointer" aria-label="Close modal">✕</button> <img${attr("src", image.visualLink)}${attr("alt", image.description)} class="w-full max-h-[80vh] object-contain bg-black"/> <div class="p-4 text-white"><h2 class="text-xl font-semibold">${escape_html(image.title)}</h2> `);
		if (image.description) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="text-sm text-slate-300 mt-2">${escape_html(image.description)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></div></div>`);
	});
}
//#endregion
//#region src/lib/elements/LandscapeImages.svelte
function LandscapeImages($$renderer, $$props) {
	let { linkLibrary, title } = $$props;
	let selectedImage = null;
	function closeModal() {
		selectedImage = null;
	}
	if (title) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<h1 class="text-4xl font-bolder text-slate-100 my-8">${escape_html(title)}</h1>`);
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--> <div class="grid grid-cols-2 md:grid-cols-3 gap-4 content-center px-64"><!--[-->`);
	const each_array = ensure_array_like(linkLibrary);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let image = each_array[$$index];
		$$renderer.push(`<button type="button" class="relative group cursor-pointer overflow-hidden rounded-lg shadow-md bg-black"><img${attr("src", image.visualLink)}${attr("alt", image.description)} class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-140"/> <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><p class="text-white text-sm font-semibold text-center px-2">${escape_html(image.title)}</p></div></button>`);
	}
	$$renderer.push(`<!--]--></div> `);
	if (selectedImage) {
		$$renderer.push("<!--[0-->");
		ImageModal($$renderer, {
			image: selectedImage,
			onClose: closeModal
		});
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]-->`);
}
//#endregion
//#region src/lib/elements/PortriatImages.svelte
function PortriatImages($$renderer, $$props) {
	let { linkLibrary, title } = $$props;
	let selectedImage = null;
	function closeModal() {
		selectedImage = null;
	}
	if (title) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<h1 class="text-4xl font-bolder text-slate-100 my-8">${escape_html(title)}</h1>`);
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--> <div class="grid grid-cols-2 md:grid-cols-3 gap-4 content-center px-64"><!--[-->`);
	const each_array = ensure_array_like(linkLibrary);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let image = each_array[$$index];
		$$renderer.push(`<button type="button" class="relative group cursor-pointer overflow-hidden rounded-4xl shadow-md bg-slate-900 min-h-200"><img${attr("src", image.visualLink)}${attr("alt", image.description)} class="h-full object-cover transition-transform duration-300 group-hover:scale-105"/> <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><p class="text-white text-sm font-semibold text-center px-2">${escape_html(image.title)}</p></div></button>`);
	}
	$$renderer.push(`<!--]--></div> `);
	if (selectedImage) {
		$$renderer.push("<!--[0-->");
		ImageModal($$renderer, {
			image: selectedImage,
			onClose: closeModal
		});
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]-->`);
}
//#endregion
export { LandscapeImages as n, PortriatImages as t };
