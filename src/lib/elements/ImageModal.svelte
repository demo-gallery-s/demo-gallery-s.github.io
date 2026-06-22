<script lang="ts">
    let { image, onClose } = $props();

    function handleBackdropClick() {
        onClose();
    }

    function stopPropagation(event: MouseEvent) {
        event.stopPropagation();
    }
</script>

<div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
    onclick={handleBackdropClick}
>
    <div
        class="relative max-w-3xl w-full mx-4 bg-slate-900 rounded-lg overflow-hidden shadow-2xl"
        onclick={stopPropagation}
    >
        <button
            class="absolute top-3 right-3 text-white bg-slate-900/25 text-xl p-2 rounded-lg cursor-pointer"
            onclick={onClose}
            aria-label="Close modal"
        >
            ✕
        </button>

        <img
            src={image.visualLink}
            alt={image.description}
            class="w-full max-h-[80vh] object-contain bg-black"
        />

        <div class="p-4 text-white">
            <h2 class="text-xl font-semibold">{image.title}</h2>

            {#if image.description}
                <p class="text-sm text-slate-300 mt-2">
                    {image.description}
                </p>
            {/if}
        </div>
    </div>
</div>