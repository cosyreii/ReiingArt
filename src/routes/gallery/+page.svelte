<script lang="ts">
	import GoToTop from '$lib/components/go-to-top.svelte';
	import Masonry from 'svelte-bricks';
	import BiggerPicture from 'bigger-picture';
	import 'bigger-picture/css';
	import { onMount } from 'svelte';

	let bp = $state<ReturnType<typeof BiggerPicture>>();
	onMount(() => {
		bp = BiggerPicture({ target: document.body });
	});

	let items = $state([
		{
			id: 'cosyreii_logo',
			width: '2500',
			height: '1767',
			title: '@cosyreii',

			sourceDT: 'https://i.imgur.com/K8LuG54.png',
			source: 'https://i.imgur.com/2k4k1Qm.png',
			alt: 'cosyreii logo'
		},
		{
			id: 'butterfly',
			width: '2000',
			height: '2000',
			title: '@Sparkythethird',
			sourceDT: 'https://i.imgur.com/LXPp3Do.png',
			source: 'https://i.imgur.com/LXPp3Do.png',
			alt: 'Sparky butterfly'
		},
		{
			id: 'stride2025_namecard',
			width: '2500',
			height: '1767',
			title: 'PKGB Stride 2025',
			sourceDT: 'https://i.imgur.com/2epDOkP.png',
			source: 'https://i.imgur.com/szBuPoy.png',
			alt: 'namecard for stride 2025'
		},
		{
			id: 'poxmote',
			width: '2000',
			height: '2000',
			title: '@Poxial',

			sourceDT: 'https://i.imgur.com/J7lbLXX.png',
			source: 'https://i.imgur.com/J7lbLXX.png',
			alt: 'Poxial emote'
		}
	]);
</script>

<svelte:head>
	<title>Reii | Gallery</title>
</svelte:head>

<div
	class="noscrollbar align-center m-1 my-4 flex flex-col justify-center overflow-y-scroll px-20 text-left text-lg max-md:items-center max-md:px-3"
>
	<Masonry {items} minColWidth={400} maxColWidth={800} gap={20} class="w-full">
		{#snippet children({ item })}
			<div id="showcase">
				<button
					onclick={(event) => {
						bp?.open({
							items: document.querySelectorAll('#showcase > button'),
							el: event.currentTarget
						});
					}}
					class="group relative flex flex-col items-center justify-center p-1"
					data-width={item.width}
					data-height={item.height}
					data-img={item.sourceDT}
				>
					<div
						class="absolute inset-0 flex flex-col items-center justify-center bg-grey/80 opacity-0 transition-opacity duration-100 group-hover:opacity-100"
					>
						<p class="text-3xl font-black text-pink">{item.title}</p>
						<!-- <p class="text-xl">{item.subtitle}</p> -->
					</div>
					<img src={item.source} class="rounded-xl" alt={item.alt} />
				</button>
			</div>
		{/snippet}
	</Masonry>
</div>

<GoToTop showAtPixel={800} />
