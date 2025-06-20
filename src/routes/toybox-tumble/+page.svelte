<script lang="ts">
	import { siSteam } from 'simple-icons';
	import BiggerPicture from 'bigger-picture';
	import 'bigger-picture/css';
	import { onMount } from 'svelte';

	let bp = $state<ReturnType<typeof BiggerPicture>>();
	onMount(() => {
		bp = BiggerPicture({ target: document.body });
	});
</script>

<svelte:head>
	<title>Toybox Tumble</title>
</svelte:head>

<div class="align-center my-4 flex flex-col justify-start px-20 text-left text-lg max-md:px-3">
	<div class="flex flex-row">
		<p class="flex w-full text-3xl font-black tracking-widest text-pink">
			TOYBOX TUMBLE
		</p>
		<div class="flex gap-2">
			<a
				href="/unavailable"
				class="flex size-12 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-pale text-center text-pale hover:border-pink hover:text-pink [&_svg]:size-7 [&_svg]:fill-current"
				target="_blank"
			>
				{@html siSteam.svg}
			</a>
		</div>
	</div>

		<div id="ToyboxTumble" class="mt-2 grid grid-cols-3">
		<button
			onclick={(event) => {
				bp?.open({
					items: document.querySelectorAll('#ToyboxTumble > button'),
					el: event.currentTarget
				});
			}}
			class="group relative flex flex-col items-center justify-center p-1"
			data-width="1920"
			data-height="1080"
			data-img="https://i.imgur.com/baZTPzV.png"
		>
			<div
				class="absolute inset-0 flex flex-col items-center justify-center bg-grey/80 opacity-0 transition-opacity duration-100 group-hover:opacity-100"
			>
				<p class="text-3xl font-black text-pink">Coming Soon</p>
				<p class="text-xl"></p>
			</div>
			<img src="https://i.imgur.com/baZTPzV.png" class="rounded-3xl" alt="Australian Mode" />
		</button>
	</div>
</div>
