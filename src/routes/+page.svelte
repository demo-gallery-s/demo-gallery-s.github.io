<script lang="ts">
import sdl from "$lib/code/svelteDeviantartLink"; // only if default export exists
import type { GalleryImage, TagSearchOption } from "$lib/code/svelteDeviantartLink";
    import LandscapeImages from "$lib/elements/LandscapeImages.svelte";
    import PortriatImages from "$lib/elements/PortriatImages.svelte";

    const linkLibrary: Array<GalleryImage> = [
        ...sdl.loadImagesForGallery(),
    ];

    function handleClick(image: GalleryImage){

    }
</script>

<svelte:head>
    <title>Demo Gallery Site</title>
</svelte:head>

<LandscapeImages linkLibrary={linkLibrary} title="Landscape 1" />
<PortriatImages linkLibrary={linkLibrary} title="Portriat 1" />
