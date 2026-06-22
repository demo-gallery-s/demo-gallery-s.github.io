<script lang="ts">
import sdl from "$lib/code/svelteDeviantartLink"; // only if default export exists
import type { GalleryImage, TagSearchOption } from "$lib/code/svelteDeviantartLink";
    import LandscapeImages from "$lib/elements/LandscapeImages.svelte";
    import PortriatImages from "$lib/elements/PortriatImages.svelte";

    const linkLibrary: Array<GalleryImage> = [
        ...sdl.loadImagesForGallery(),
        ...sdl.loadImagesForGallery(),
        ...sdl.loadImagesForGallery(),
        ...sdl.loadImagesForGallery(),
    ];

    function handleClick(image: GalleryImage){

    }
</script>

<LandscapeImages linkLibrary={linkLibrary} title="Landscape 1" />
<PortriatImages linkLibrary={linkLibrary} title="Portriat 1" />
