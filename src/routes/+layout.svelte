<script lang="ts">
	import '../app.css';
	import { siDiscord, siTwitch, siBluesky, siInstagram, siKofi } from 'simple-icons';
	import { page } from '$app/stores';
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import clsx from 'clsx';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<link href="https://fonts.googleapis.com/css?family=Imprima" rel="stylesheet" />

<header>
	<div
		class="m-8 flex flex-row items-center justify-center gap-14 rounded-3xl bg-[linear-gradient(to_right,rgba(16,76,136,0.5),rgba(128,14,27,0.5)),url('https://i.pinimg.com/736x/4d/f7/17/4df7176bf77d87ba9abd2f5f18ccb577.jpg')] bg-cover bg-top p-4 text-center"
	>
		<div>
			<h1 class="text-4xl text-white">「♡」Reii Ng</h1>
			<p class="text-xl">Character & Concept Artist | 2D Animator & Rigger | Writer</p>
		</div>
		<div>
			<img
				src="https://i.imgur.com/OwW3hl5.png"
				class="size-40 rounded-full object-cover shadow-2xl"
				alt="profile"
			/>
		</div>
	</div>
	<nav class="flex flex-initial flex-row flex-wrap items-center justify-center gap-10">
		<a
			href="/"
			class={clsx([
				'h-auto w-32 cursor-pointer rounded-3xl border-2 border-solid py-2 text-center hover:border-pink hover:text-pink hover:underline',
				$page.route.id == '/' ? 'border-pink text-pink' : 'border-pale text-pale'
			])}>Home</a
		>
		<a
			href="/showcase"
			class={clsx([
				'h-auto w-32 cursor-pointer rounded-3xl border-2 border-solid py-2 text-center hover:border-pink hover:text-pink hover:underline',
				$page.route.id == '/showcase' ? 'border-pink text-pink' : 'border-pale text-pale'
			])}>Showcase</a
		>
		<a
			href="/terms"
			class={clsx([
				'h-auto w-32 cursor-pointer rounded-3xl border-2 border-solid py-2 text-center hover:border-pink hover:text-pink hover:underline',
				$page.route.id == '/terms' ? 'border-pink text-pink' : 'border-pale text-pale'
			])}>Terms</a
		>
		<a
			href="/pricing"
			class={clsx([
				'h-auto w-32 cursor-pointer rounded-3xl border-2 border-solid py-2 text-center hover:border-pink hover:text-pink hover:underline',
				$page.route.id == '/pricing' ? 'border-pink text-pink' : 'border-pale text-pale'
			])}>Pricing</a
		>
		<a
			href="/contact"
			class={clsx([
				'h-auto w-32 cursor-pointer rounded-3xl border-2 border-solid py-2 text-center hover:border-pink hover:text-pink hover:underline',
				$page.route.id == '/contact' ? 'border-pink text-pink' : 'border-pale text-pale'
			])}>Contact</a
		>
		<a
			href="/doesnt-exist"
			class={'ml-7 cursor-pointer py-2 text-center hover:text-pink hover:underline'}>404</a
		>
	</nav>
</header>

<hr class="mx-auto mt-5 w-11/12 border-pale" />

{@render children()}

<hr class="mx-auto mt-5 w-11/12 border-pale" />

<footer class="mt-4 flex flex-col items-center justify-center pb-10">
	<h1 class="text-xl text-pink">Contact / 询问 ⊹ reiing.art@gmail.com</h1>
	<p class="text-translucent">
		any characters displayed in artwork belong to their respected IP owners
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
