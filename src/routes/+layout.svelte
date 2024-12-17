<script lang="ts">
	import './style.css';
	import { siDiscord, siTwitch, siBluesky, siInstagram, siKofi } from 'simple-icons';
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	FontFaceSet: 'Titillium';
	src: 'https://fonts.googleapis.com/css?family=Titillium';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<link href="https://fonts.googleapis.com/css?family=Imprima" rel="stylesheet" />

<header>
	<div class="reiiBanner">
		<div>
			<h1 class="white">「♡」Reii Ng</h1>
			<p>Character & Concept Artist | 2D Animator & Rigger | Writer</p>
		</div>
		<div>
			<img
				src="https://i.pinimg.com/736x/4f/4f/20/4f4f20df4564cecd9ff959b7e8e5138b.jpg"
				class="reiiPFP"
				alt="profile"
			/>
		</div>
	</div>
	<nav class="pageNav" id="hButton">
		<a href="/" class="hButton">Home</a>
		<a href="/gallery" class="hButton">Gallery</a>
		<a href="/terms" class="hButton">Terms</a>
		<a href="/prices" class="hButton">Prices</a>
		<a href="/contact" class="hButton">Contact</a>
	</nav>
</header>

<hr class="border" />

{@render children()}

<hr class="border" />

<footer>
	<h1 class="pink">Contact / 询问 ⊹ reiing.art@gmail.com</h1>
	<p class="translucent">
		any characters displayed in artwork belong to their respected IP owners.
	</p>

	<nav class="socialNav">
		<a href="https://discord.gg/rQudKfzSZT" class="fButton"> {@html siDiscord.svg} </a>
		<a href="https://twitch.tv/cosyreii" class="fButton"> {@html siTwitch.svg} </a>
		<a href="https://bsky.app/profile/reiing.art" class="fButton"> {@html siBluesky.svg} </a>
		<a href="https://instagram.com/cosyreii" class="fButton"> {@html siInstagram.svg} </a>
		<a href="https://ko-fi.com/cosyreii" class="fButton"> {@html siKofi.svg} </a>
	</nav>
</footer>
