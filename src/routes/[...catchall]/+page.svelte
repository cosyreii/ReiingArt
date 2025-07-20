<script>
	import { onMount } from 'svelte';

	const errorMessages = [
		'Oopsies! Looks like Reii got a bit too lazy and missed this one.',
		'Did Reii accidentally hide this page from us? It’s gone!',
		"Page not found. Reii's too comfy in bed to work on it.",
		'OmO! Reii didn’t put the finishing touches on this page.',
		'Reii’s a dummy, this page doesn’t exist!'
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

<div class="mb-12 mt-12 text-center">
	<div class="flex flex-row items-center justify-center">
		<img src="https://i.imgur.com/y7iAWYz.gif" alt="loading" class="h-auto mr-4 w-[5rem]" />
		<h1 class="mt-4 text-[5rem] text-pink">404</h1>
	</div>
	<h2 class="error-message text-[2rem] text-pale">{errorMessage}</h2>
	<h3 class="mt-14 text-translucent">refresh this page for a different message</h3>
</div>
