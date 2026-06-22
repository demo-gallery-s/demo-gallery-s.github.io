<script lang="ts">
    import ImageModal from "./ImageModal.svelte";

    let { linkLibrary, title } = $props();

    let selectedImage: any = $state(null);

    function openModal(image: any) {
        console.log(image)
        selectedImage = image;
    }

    function closeModal() {
        selectedImage = null;
    }
</script>


{#if title}
    <h1 class="text-4xl font-bolder text-slate-100 my-8">{title}</h1>
{/if}
<div class="grid grid-cols-2 md:grid-cols-3 gap-4 content-center px-64">
    {#each linkLibrary as image}
        <button
            type="button"
            class="relative group cursor-pointer overflow-hidden rounded-4xl shadow-md bg-slate-900 min-h-200"
            onclick={() => openModal(image)}
        >
            <img
                src={image.visualLink}
                alt={image.description}
                class="h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p class="text-white text-sm font-semibold text-center px-2">
                    {image.title}
                </p>
            </div>
        </button>
    {/each}
</div>

{#if selectedImage}
    <ImageModal
        image={selectedImage}
        onClose={closeModal}
    />
{/if}
