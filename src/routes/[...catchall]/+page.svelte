<script>
	import { onMount } from 'svelte';

	const errorMessages = [
		"Oopsies! Looks like Reii got a bit too lazy and missed this one.",
		"Oops! It seems like Reii’s too busy to finish this page right now.",
		"Did Reii accidentally hide this page from us? It’s gone!",
		"Page not found. Reii's too comfy in bed to work on it.",
		"OmO! Reii didn’t put the finishing touches on this page.",
		"Reii’s a dummy, this page doesn’t exist!"
	];

	let errorMessage = '';

	function getRandomMessage() {
		const randomIndex = Math.floor(Math.random() * errorMessages.length);
		errorMessage = errorMessages[randomIndex];
	}

	onMount(() => {
		getRandomMessage();
	});
</script>

<div class="text-center mt-12 mb-12">
	<div class="flex flex-row justify-center items-center">
		<img src="https://i.imgur.com/QqG2An6.gif" alt="loading" class="w-[5rem] h-auto" />
		<h1 class="text-pink text-[5rem] mt-4">404</h1>
	</div>
	<h2 class="error-message text-pale text-[2rem]">{errorMessage}</h2>
	<h3 class="text-translucent mt-14">refresh this page for a different message</h3>
</div>