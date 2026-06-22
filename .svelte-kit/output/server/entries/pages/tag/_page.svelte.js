import "../../../chunks/internal.js";
import { _ as attr, n as derived } from "../../../chunks/server.js";
import { t as goto } from "../../../chunks/client.js";
import "../../../chunks/navigation.js";
import "../../../chunks/svelteDeviantartLink.js";
//#region src/lib/elements/TagSearchInput.svelte
function TagSearchInput($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { options = [], placeholder = "Search...", value = "", onChange } = $$props;
		derived(() => value.trim() === "" ? options : options.filter((o) => o.tag.toLowerCase().includes(value.toLowerCase()) || o.searchTerm.toLowerCase().includes(value.toLowerCase())));
		$$renderer.push(`<div class="relative w-full"><input${attr("value", value)} type="text"${attr("placeholder", placeholder)} class="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white"/> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div>`);
	});
}
//#endregion
//#region src/routes/tag/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let textValue = "";
		let optionList = [];
		function entryClicked(action, value) {
			console.log("entryClicked");
			console.log(action);
			console.log(value);
			if (action === "select") {
				console.log(`going to /tag/${value.tag} >>>>>>>>>>>>>>`);
				goto(`/tag/${value.tag}`);
			}
		}
		$$renderer.push(`<div class="px-32"><h1 class="text-4xl font-bolder text-slate-100 my-8 py-32">Search by tag</h1> `);
		TagSearchInput($$renderer, {
			options: optionList,
			placeholder: "Search tag...",
			value: textValue,
			onChange: entryClicked
		});
		$$renderer.push(`<!----></div>`);
	});
}
//#endregion
export { _page as default };
