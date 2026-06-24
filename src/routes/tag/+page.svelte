<script lang="ts">
    import TagSearchInput from "$lib/elements/TagSearchInput.svelte";
    import { onMount } from "svelte";
    import sdl from "$lib/code/svelteDeviantartLink"; // only if default export exists
    import type {
        GalleryImage,
        TagSearchOption,
    } from "$lib/code/svelteDeviantartLink";
    import { goto } from "$app/navigation";

    let textValue = $state("");
    let optionList: Array<TagSearchOption> = $state([]);

    onMount(() => {
        optionList = sdl.getImageTagList();
    });

    function entryClicked(action: string, value: TagSearchOption) {
        console.log("entryClicked");
        console.log(action);
        console.log(value);
        if (action === "select") {
            console.log(`going to /tag/${value.tag} >>>>>>>>>>>>>>`)
            goto(`/tag/${value.tag}`);
        }
    }
</script>

<svelte:head>
    <title>Demo Gallery Site | Search</title>
</svelte:head>

<div class="px-32">

    <h1 class="text-4xl font-bolder text-slate-100 my-8 py-32">Search by tag</h1>
    <TagSearchInput
        options={optionList}
        placeholder="Search tag..."
        value={textValue}
        onChange={entryClicked}
    />
</div>
