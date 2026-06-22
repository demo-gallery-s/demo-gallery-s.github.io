<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import logo from '$lib/images/svelte-logo.svg';

	function goBack() {
		goto('..');
	}

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/tag', label: 'Search' }
	];
</script>

<header class="w-full bg-slate-900 shadow-sm border-b border-black flex items-center justify-between px-4 h-14">

	<!-- Left corner -->
	<div class="w-12 h-12 flex items-center justify-center">
		<button on:click={goBack}
			class="hover:scale-105 transition-transform duration-200">
			<img src={logo} alt="SvelteKit" class="w-7 h-7 object-contain" />
		</button>
	</div>

	<!-- Nav -->
	<nav class="flex-1 flex justify-center">
		<ul class="flex items-center gap-6 px-2 py-2">

			{#each links as link}
				{@const active = page.url.pathname === link.href}
				<li
					class="relative"
					aria-current={active ? 'page' : undefined}
				>
					<a
						href={link.href}
						class={
							"relative px-2 py-1 text-sm font-medium tracking-wide transition-all duration-300 " +
							(active
								? "text-gray-900"
								: "text-gray-500 hover:text-gray-900")
						}
					>
						{link.label}

						{#if active}
							<!-- subtle “paint stroke” underline -->
							<!-- <span class="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-rose-300 via-violet-300 to-sky-300 opacity-80 rounded-full"></span> -->
							
							<span class="absolute left-0 -bottom-1 w-full h-[2px] bg-slate-100 opacity-80 rounded-full"></span>

							<!-- small ink dot accent -->
							<!-- <span class="absolute -right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gray-900 rounded-full opacity-70"></span> -->
						{/if}
					</a>
				</li>
			{/each}

		</ul>
	</nav>

	<!-- Right corner -->
	<div class="w-12 h-12"></div>

</header>