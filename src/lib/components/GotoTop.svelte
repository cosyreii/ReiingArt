<script>
	export let showAtPixel = 2000;

	let scrollHeight = 0;

	const gotoTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	$: showGotoTop = scrollHeight > showAtPixel;
</script>

{#if showGotoTop}
	<button on:click={gotoTop} class="gototop">
		<img src="https://i.imgur.com/ZxSTTGV.png" alt="Go Back Up" class="size-16 rounded-xl" />
	</button>
{/if}

<svelte:window bind:scrollY={scrollHeight} />

<style>
	.gototop {
		position: fixed;
		right: 1rem;
		bottom: 1rem;
		z-index: 999;
		cursor: pointer;
		color: #fcf0f0a5;

		background: none;
		border: none;
		padding: 0;
	}
	.gototop:hover {
		scale: 1.1;
	}
</style>
