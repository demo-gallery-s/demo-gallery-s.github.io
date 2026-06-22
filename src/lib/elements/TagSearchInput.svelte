<script lang="ts">
    import sdl from "$lib/code/svelteDeviantartLink";
    import type { GalleryImage, TagSearchOption } from "$lib/code/svelteDeviantartLink";


    import { createEventDispatcher } from 'svelte';

    let {
        options = [],
        placeholder = 'Search...',
        value = '',
        onChange,
    }:{
        options: TagSearchOption[],
        placeholder: string,
        value: string,
        onChange: any,
    } = $props();

    // const dispatch = createEventDispatcher<{
    //     select: TagSearchOption;
    //     input: string;
    // }>();

    let open = $state(false);
    let highlighted = $state(0);

    let filtered = $derived(
        value.trim() === ''
            ? options
            : options.filter(
                  (o) =>
                      o.tag.toLowerCase().includes(value.toLowerCase()) ||
                      o.searchTerm.toLowerCase().includes(value.toLowerCase())
            )
    );

    function onInput() {
        open = true;
        highlighted = 0;

        onChange('input', value);
    }

    function select(option: TagSearchOption) {
        value = option.searchTerm;
        open = false;

        onChange('select', option);
    }

    function handleKeydown(event: KeyboardEvent) {
        if (!open) return;

        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                highlighted = Math.min(
                    highlighted + 1,
                    filtered.length - 1
                );
                break;

            case 'ArrowUp':
                event.preventDefault();
                highlighted = Math.max(highlighted - 1, 0);
                break;

            case 'Enter':
                if (filtered[highlighted]) {
                    event.preventDefault();
                    select(filtered[highlighted]);
                }
                break;

            case 'Escape':
                open = false;
                break;
        }
    }
</script>

<div class="relative w-full">
    <input
        bind:value
        type="text"
        {placeholder}
        class="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white"
        oninput={onInput}
        onfocus={() => (open = true)}
        onkeydown={handleKeydown}
    />

    {#if open && filtered.length > 0}
        <div
            class="absolute z-50 mt-1 max-h-64 w-full overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg"
        >
            {#each filtered as option, index}
                <button
                    type="button"
                    class:selected={index === highlighted}
                    class="flex w-full flex-col px-3 py-2 text-left hover:bg-gray-100 selected:bg-blue-50"
                    onmousedown={() => select(option)}
                >
                    <span class="font-medium">
                        {option.tag}
                    </span>

                    <span class="text-sm text-gray-500">
                        {option.searchTerm}
                    </span>
                </button>
            {/each}
        </div>
    {/if}
</div>
