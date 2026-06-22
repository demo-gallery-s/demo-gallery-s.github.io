<script lang="ts">
	import Header from './Header.svelte';
	import './layout.css';

	let { children } = $props();
</script>

<div class="h-screen flex flex-col overflow-hidden bg-slate-900">

	<Header />

	<main class="flex-1 overflow-y-auto w-full flex flex-col">
		{@render children()}
	</main>

	<footer class="shrink-0 flex flex-col items-center justify-center py-3 text-sm text-gray-600 border-t border-black">
		<p class="text-slate-100">
			Sophies site
			<a
				href="https://www.deviantart.com/"
				class="font-bold text-olive-500 hover:underline ml-1"
			>
				Link to something
			</a>
		</p>
	</footer>

</div>