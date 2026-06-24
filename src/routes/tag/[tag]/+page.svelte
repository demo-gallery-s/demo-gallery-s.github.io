<script lang="ts">
import sdl from "$lib/code/svelteDeviantartLink";
import type { GalleryImage, TagSearchOption } from "$lib/code/svelteDeviantartLink";
    import { onMount } from "svelte";
	import { page } from '$app/state';
    import LandscapeImages from "$lib/elements/LandscapeImages.svelte";
    import PortriatImages from "$lib/elements/PortriatImages.svelte";
    // import ImageModal from "$lib/elements/ImageModal.svelte";

    const linkLibrary: Array<GalleryImage> = [...sdl.loadImagesForGallery(),];
    
    let filteredImages: Array<GalleryImage> = $state([]);
    let selectedImage: GalleryImage | null = $state(null);
    let siteParam: string = $state("");

    let noImages: boolean = $derived(filteredImages.length == 0);

    onMount(() => {
        console.log("onMount");
        siteParam = page.params.tag as string;

        let param = sdl.getTagStringConversion(siteParam)?.searchTerm;

        if(typeof param == 'string') {
            // const imageTags = sdl.getImageTagList();
            filteredImages = linkLibrary.filter(link => link.tags.includes(param));
        }
    });

    function handleClick(image: GalleryImage){
        selectedImage = image
    }

    function onImageClosed(){
        selectedImage = null;
    }

</script>

<svelte:head>
    <title>Demo Gallery Site | {siteParam}</title>
</svelte:head>


{#if noImages}
    <h2 class="text-slate-100 text-center py-16">No images found with the tag '{siteParam}'</h2>
    <a class="text-center" href="../tag">Go back to search</a>
{:else}
    <LandscapeImages linkLibrary={filteredImages} title="Landscape 1" />
    <PortriatImages linkLibrary={filteredImages} title="Portriat 1" />
{/if}