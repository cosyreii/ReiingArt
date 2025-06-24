<script lang="ts">
	import { siDiscord, siTwitch, siKofi } from 'simple-icons';
	import {Store} from 'lucide-svelte';
	import BiggerPicture from 'bigger-picture';
	import 'bigger-picture/css';
	import { onMount } from 'svelte';

	let bp = $state<ReturnType<typeof BiggerPicture>>();
	onMount(() => {
		bp = BiggerPicture({ target: document.body });
	});
</script>

<svelte:head>
	<title>Super Streamer Lobby</title>
</svelte:head>

<div class="align-center my-4 flex flex-col justify-start px-20 text-left text-lg max-md:px-3">
	<div class="flex flex-row">
		<p class="lex w-full text-3xl font-black tracking-widest text-pink">SUPER STREAMER LOBBY</p>
		<div class="flex gap-2">
			<a
				href="https://discord.gg/aqPSEJS3SR"
				class="flex size-8 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-pale text-center text-pale hover:border-pink hover:text-pink [&_svg]:size-5 [&_svg]:fill-current"
				target="_blank"
			>
				{@html siDiscord.svg}
			</a>
			<a
				href="https://twitch.tv/wyliecanttwitch"
				class="flex size-8 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-pale text-center text-pale hover:border-pink hover:text-pink [&_svg]:size-5 [&_svg]:fill-current"
				target="_blank"
			>
				{@html siTwitch.svg}
			</a>
			<a
				href="https://ko-fi.com/streamerlobby"
				class="flex size-8 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-pale text-center text-pale hover:border-pink hover:text-pink [&_svg]:size-5 [&_svg]:fill-current"
				target="_blank"
			>
				{@html siKofi.svg}
			</a>
			<a
				href="https://superstreamerlobby-shop.fourthwall.com/"
				class="flex size-8 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-pale text-center text-pale hover:border-pink hover:text-pink [&_svg]:size-5"
				target="_blank"
			>
				<Store/>
			</a>
		</div>
	</div>

	<div id="SSL" class="mt-2 grid grid-cols-3">
		<button
			onclick={(event) => {
				bp?.open({
					items: document.querySelectorAll('#SSL > button'),
					el: event.currentTarget
				});
			}}
			class="group relative flex flex-col items-center justify-center p-1"
			data-width="1920"
			data-height="1080"
			data-img="https://i.imgur.com/xThzP8b.png"
		>
			<div
				class="absolute inset-0 flex flex-col items-center justify-center bg-grey/80 opacity-0 transition-opacity duration-100 group-hover:opacity-100"
			>
				<p class="text-3xl font-black text-pink">SSL 4</p>
				<p class="text-xl">Australian Mode</p>
			</div>
			<img src="https://i.imgur.com/xThzP8b.png" class="rounded-3xl" alt="Australian Mode" />
		</button>
		<button
			onclick={(event) => {
				bp?.open({
					items: document.querySelectorAll('#SSL > button'),
					el: event.currentTarget
				});
			}}
			class="group relative flex flex-col items-center justify-center p-1"
			data-width="1920"
			data-height="1080"
			data-img="https://i.imgur.com/YFFOhQm.png"
		>
			<div
				class="absolute inset-0 flex flex-col items-center justify-center bg-grey/80 opacity-0 transition-opacity duration-100 group-hover:opacity-100"
			>
				<p class="text-3xl font-black text-pink">SSL 5</p>
				<p class="text-xl">Ghosts and Ghouls</p>
			</div>
			<img src="https://i.imgur.com/gEN4JWO.png" class="rounded-3xl" alt="Ghosts and Ghouls" />
		</button>
		<button
			onclick={(event) => {
				bp?.open({
					items: document.querySelectorAll('#SSL > button'),
					el: event.currentTarget
				});
			}}
			class="group relative flex flex-col items-center justify-center p-1"
			data-width="1920"
			data-height="1080"
			data-img="https://i.imgur.com/NG8Bfzs.png"
		>
			<div
				class="absolute inset-0 flex flex-col items-center justify-center bg-grey/80 opacity-0 transition-opacity duration-100 group-hover:opacity-100"
			>
				<p class="text-3xl font-black text-pink">SSL 5</p>
				<p class="text-xl">Splitting Squares</p>
			</div>
			<img src="https://i.imgur.com/NG8Bfzs.png" class="rounded-3xl" alt="Split Squares Mode" />
		</button>
	</div>
</div>
