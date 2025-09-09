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
			id: 'sword',
			width: '2480',
			height: '3508',

			sourceDT: 'https://i.imgur.com/Ycteoqu.png',
			source: 'https://i.imgur.com/Ycteoqu.png',
			alt: 'sword'
		},
		{
			id: 'scythe',
			width: '2480',
			height: '3508',

			sourceDT: 'https://i.imgur.com/wLpxSNe.png',
			source: 'https://i.imgur.com/wLpxSNe.png',
			alt: 'scythe'
		},
		{
			id: 'badge 2',
			width: '2000',
			height: '2000',

			sourceDT: 'https://i.imgur.com/8AX4t8r.png',
			source: 'https://i.imgur.com/8AX4t8r.png',
			alt: 'badge 2'
		},
		{
			id: 'sketch 1',
			width: '3508',
			height: '2480',

			sourceDT: 'https://i.imgur.com/htCNaI7.jpeg',
			source: 'https://i.imgur.com/htCNaI7.jpeg',
			alt: 'sketch 1'
		},
		{
			id: 'sketch 2',
			width: '3508',
			height: '2480',

			sourceDT: 'https://i.imgur.com/TaEd5Ax.jpeg',
			source: 'https://i.imgur.com/TaEd5Ax.jpeg',
			alt: 'sketch 2'
		},
		{
			id: 'sketch 3',
			width: '1920',
			height: '1080',

			sourceDT: 'https://i.imgur.com/VKsr532.png',
			source: 'https://i.imgur.com/VKsr532.png',
			alt: 'sketch 3'
		},
		{
			id: 'sketch 4',
			width: '3508',
			height: '2480',

			sourceDT: 'https://i.imgur.com/y3WbbOJ.png',
			source: 'https://i.imgur.com/y3WbbOJ.png',
			alt: 'sketch 4'
		},
		{
			id: 'stride 2025',
			width: '1920',
			height: '1080',

			sourceDT: 'https://i.imgur.com/2epDOkP.png',
			source: 'https://i.imgur.com/2epDOkP.png',
			alt: 'stride 2025'
		},
		{
			id: 'logo 1',
			width: '1920',
			height: '1080',

			sourceDT: 'https://i.imgur.com/2k4k1Qm.png',
			source: 'https://i.imgur.com/K8LuG54.png',
			alt: 'logo, cosyreii'
		},
		{
			id: 'logo 2',
			width: '2000',
			height: '2000',

			sourceDT: 'https://i.imgur.com/RAVVRcO.png',
			source: 'https://i.imgur.com/RAVVRcO.png',
			alt: 'pinrei'
		},
		{
			id: 'emote 1',
			width: '2000',
			height: '2000',

			sourceDT: 'https://i.imgur.com/LPTF47h.png',
			source: 'https://i.imgur.com/LPTF47h.png',
			alt: 'smolminy'
		},
		{
			id: 'emote 2',
			width: '2000',
			height: '2000',

			sourceDT: 'https://i.imgur.com/fpq3B4L.png',
			source: 'https://i.imgur.com/fpq3B4L.png',
			alt: 'poxial'
		},
		{
			id: 'emote 3',
			width: '2000',
			height: '2000',

			sourceDT: 'https://i.imgur.com/Zl4OqP1.png',
			source: 'https://i.imgur.com/Zl4OqP1.png',
			alt: 'cosyreii'
		},
		{
			id: 'character 1',
			width: '2480',
			height: '3508',

			sourceDT: 'https://i.imgur.com/F2aK7uo.png',
			source: 'https://i.imgur.com/F2aK7uo.png',
			alt: 'character 1'
		},
		{
			id: 'character 2',
			width: '2480',
			height: '3508',

			sourceDT: 'https://i.imgur.com/W6Hv1QO.jpeg',
			source: 'https://i.imgur.com/W6Hv1QO.jpeg',
			alt: 'character 2'
		},
		{
			id: 'character 3',
			width: '2480',
			height: '3508',

			sourceDT: 'https://i.imgur.com/UXW8Jkl.jpeg',
			source: 'https://i.imgur.com/UXW8Jkl.jpeg',
			alt: 'character 3'
		},
		{
			id: 'character 4',
			width: '2480',
			height: '3508',

			sourceDT: 'https://i.imgur.com/mqt4Gnv.jpeg',
			source: 'https://i.imgur.com/mqt4Gnv.jpeg',
			alt: 'character 4'
		},
		{
			id: 'character 5',
			width: '2480',
			height: '3508',

			sourceDT: 'https://i.imgur.com/1F64npe.png',
			source: 'https://i.imgur.com/1F64npe.png',
			alt: 'cosyreii'
		},
		{
			id: 'character 6',
			width: '2480',
			height: '3508',

			sourceDT: 'https://i.imgur.com/LwSk7TF.png',
			source: 'https://i.imgur.com/LwSk7TF.png',
			alt: 'duffy'
		},
		{
			id: 'character 7',
			width: '2480',
			height: '3508',

			sourceDT: 'https://i.imgur.com/HL8uJ54.png',
			source: 'https://i.imgur.com/HL8uJ54.png',
			alt: 'churro'
		},
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
					<!-- <div
						class="absolute inset-0 flex flex-col items-center justify-center bg-grey/80 opacity-0 transition-opacity duration-100 group-hover:opacity-100"
					>
						<p class="text-3xl font-black text-pink">{item.title}</p>
						<p class="text-xl">{item.subtitle}</p>
					</div> -->
					<img src={item.source} class="rounded-xl hover:scale-105" alt={item.alt} />
				</button>
			</div>
		{/snippet}
	</Masonry>
</div>

<GoToTop showAtPixel={800} />
