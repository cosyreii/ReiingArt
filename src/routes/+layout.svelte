<script lang="ts">
	import '../app.css';
	import { siDiscord, siTwitch, siBluesky, siInstagram, siKofi } from 'simple-icons';
	import { page } from '$app/state';
	import { slide } from 'svelte/transition';
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import clsx from 'clsx';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<link href="https://fonts.googleapis.com/css?family=Imprima" rel="stylesheet" />

<header class="flex flex-col bg-grey">
	<div class="mx-8 mb-6 mt-2">
		{#if page.route.id == '/'}
			<div transition:slide={{ axis: 'y', duration: 800 }}>
				<div
					class="flex flex-row items-center justify-center gap-14 rounded-3xl bg-[linear-gradient(to_right,rgba(255,255,255,0.1),rgba(255,255,255,0.5)),url('https://i.imgur.com/duyxKiX.png')] bg-cover bg-bottom p-2 text-center"
				>
					<div>
						<h1 class="text-xl font-black text-grey">
							「Reii Ng」<span class="font-bold text-[#b46e86]">✦ Audrey NJX</span>
						</h1>
						<p class="text-grey">
							Character & Concept Designer | Part-time Streamer, Full-time Artist
						</p>
					</div>
					<img
						src="https://i.imgur.com/YcDK5ZD.png"
						class="size-28 rounded-full border-2 border-grey object-cover p-1 max-md:hidden"
						alt="logo"
					/>
				</div>
			</div>
		{/if}
	</div>

	<nav
		class="flex flex-initial flex-row flex-wrap items-center justify-center gap-8 px-1 max-md:gap-2"
	>
		<a
			href="/"
			class={clsx([
				'h-auto w-32 cursor-pointer rounded-3xl border-2 border-solid py-2 text-center hover:border-pink hover:text-pink hover:underline max-md:w-24 max-md:py-1',
				page.route.id == '/' ? 'border-pink text-pink' : 'border-pale text-pale'
			])}>Home</a
		>
		<a
			href="/gallery"
			class={clsx([
				'h-auto w-32 cursor-pointer rounded-3xl border-2 border-solid py-2 text-center hover:border-pink hover:text-pink hover:underline max-md:w-24 max-md:py-1',
				page.route.id == '/gallery' ? 'border-pink text-pink' : 'border-pale text-pale'
			])}>Gallery</a
		>
		<a
			href="/arkadia"
			class={clsx([
				'h-auto w-32 cursor-pointer flex flex-row justify-center items-center rounded-3xl border-2 border-solid py-2 text-center hover:border-pink hover:text-pink hover:underline max-md:w-24 max-md:py-1',
				page.route.id == '/arkadia' ? 'border-pink text-pink' : 'border-pale text-pale'
			])}
			><img
				src="https://i.imgur.com/sgzID13.gif"
				class="mr-2 size-6"
				alt="pixel reii"
			/>Arkadia</a
		>
		<!-- <a
		
			href="/terms"
			class={clsx([
				'h-auto w-32 cursor-pointer rounded-3xl border-2 border-solid py-2 text-center hover:border-pink hover:text-pink hover:underline max-md:w-24 max-md:py-1',
				page.route.id == '/terms' ? 'border-pink text-pink' : 'border-pale text-pale'
			])}>Terms</a
		>
		<a
			href="/services"
			class={clsx([
				'h-auto w-32 cursor-pointer rounded-3xl border-2 border-solid py-2 text-center hover:border-pink hover:text-pink hover:underline max-md:w-24 max-md:py-1',
				page.route.id == '/services' ? 'border-pink text-pink' : 'border-pale text-pale'
			])}>Services</a
		>  -->
	</nav>
</header>

<hr class="mx-auto mt-4 w-11/12 border-pale" />

{@render children()}

<hr class="mx-auto mt-4 w-11/12 border-pale" />

<footer class="mt-4 flex flex-col items-center justify-center pb-10">
	<h1 class="text-xl text-pink">Contact / 询问 ⊹ reiing.art@gmail.com</h1>
	<p class="text-center text-translucent">
		any characters displayed belong to their respective IP owners
	</p>

	<nav class="mt-2 flex flex-initial flex-row flex-wrap items-center justify-center gap-5">
		<a
			href="https://discord.gg/rQudKfzSZT"
			class="flex size-12 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-pale text-center text-pale hover:border-pink hover:text-pink [&_svg]:size-7 [&_svg]:fill-current"
			target="_blank"
		>
			{@html siDiscord.svg}
		</a>
		<a
			href="https://twitch.tv/cosyreii"
			class="flex size-12 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-pale text-center text-pale hover:border-pink hover:text-pink [&_svg]:size-7 [&_svg]:fill-current"
			target="_blank"
		>
			{@html siTwitch.svg}
		</a>
		<a
			href="https://bsky.app/profile/reiing.art"
			class="flex size-12 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-pale text-center text-pale hover:border-pink hover:text-pink [&_svg]:size-7 [&_svg]:fill-current"
			target="_blank"
		>
			{@html siBluesky.svg}
		</a>
		<a
			href="https://instagram.com/cosyreii"
			class="flex size-12 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-pale text-center text-pale hover:border-pink hover:text-pink [&_svg]:size-7 [&_svg]:fill-current"
			target="_blank"
		>
			{@html siInstagram.svg}
		</a>
		<a
			href="https://ko-fi.com/cosyreii"
			class="flex size-12 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-pale text-center text-pale hover:border-pink hover:text-pink [&_svg]:size-7 [&_svg]:fill-current"
			target="_blank"
		>
			{@html siKofi.svg}
		</a>
	</nav>
</footer>
