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
		getRandomMessage(); // Initialize a random message when the component mounts
	});
</script>

<div class="error-container">
	<div class="flex flex-row justify-center items-center">
		<img src="https://i.imgur.com/QqG2An6.gif" alt="loading" class="loading" />
		<h1 class="text-pink ">404</h1>
	</div>
	<h2 class="error-message text-pale text-[3rem]">{errorMessage}</h2>
	<h3 class="text-translucent mt-14">refresh this page for a different message</h3>
</div>

<style>
	.error-container {
		text-align: center;
		margin-top: 3rem;
		margin-bottom: 3rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	h1 {
		font-size: 5rem;
		color: #faa0bb;
		margin: 1rem;
	}
	p {
		font-size: 1.5rem;
		margin-top: 0.5rem;
	}
	.error {
		margin: 0%;
		gap: 0.5rem;

		display: flex;
		flex-direction: row;
		justify-content: left;
		align-items: center;
	}

	.loading {
		width: 5rem;
		height: auto;
	}
</style>
