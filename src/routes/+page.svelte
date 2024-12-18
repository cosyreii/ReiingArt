<script lang="ts">
	import clsx from 'clsx';

	// make a variable to store which thing to show
	let sectionDisplay = $state('intro');
</script>

<svelte:head>
	<title>Reii Ng</title>
</svelte:head>

<main class="p-5 text-center">
	<div class="m-4 flex flex-row items-center justify-center gap-4">
		<div>
			<img
				src="https://i.imgur.com/XcYfQTY.png"
				class="size-80 rounded-xl object-cover"
				alt="cosyreii's chibi model"
			/>
			<div class="mt-4 text-translucent">
				<p>full-time student:</p>
				<p>Diploma in Media and Design ( Animation )</p>
			</div>
		</div>

		{#if sectionDisplay == 'intro'}
			<div
				class="noscrollbar m-1 flex h-96 w-[40rem] flex-col items-start overflow-y-scroll text-left text-lg"
			>
				<p class="mb-4 text-3xl text-pink">Hai! I'm Reii.</p>
				<p>
					I'm a freelance illustrator specialising in
					<span class="text-pink">character design</span>. I stream all my latest hyperfixation on
					Twitch with the consistency of melted jelly ( not consistent at all ). Aside from that, I
					am fluent in English and Mandarin~
				</p>
				<p class="mt-4">Nice to meet you!</p>
			</div>
		{:else if sectionDisplay == 'eduExp'}
			<div
				class="noscrollbar m-1 flex h-96 w-[40rem] flex-col items-start overflow-y-scroll text-left text-lg"
			>
				<p class="mb-4 text-3xl text-pink">Education & Experience</p>
				<div
					class="grid border-collapse grid-cols-[1fr,2fr] grid-rows-5 items-center overflow-hidden rounded-lg border-2 border-solid border-pale pb-8"
				>
					<div class="bg-pink/40 p-4 text-left font-bold">Month, Year</div>
					<div class="bg-pink/40 p-4 text-left font-bold">Event / Experience</div>

					<div class="p-4 text-left">Nov 2018</div>
					<div class="p-4 text-left">
						Art journey starts! Specialising in character, concept, and design.
					</div>

					<div class="p-4 text-left">Aug 2023 - Current</div>
					<div class="p-4 text-left">Freelance illustrator for content creators.</div>

					<div class="p-4 text-left">Jan 2024 - Current</div>
					<div class="p-4 text-left">Embarked on streaming journey. (Twitch)</div>

					<div class="p-4 text-left">Jul 2024 - Current</div>
					<div class="p-4 text-left">Super Streamer Lobby (TETR.IO) gamemode illustrator.</div>
				</div>
			</div>
		{:else if sectionDisplay == 'featured'}
			<div
				class="noscrollbar m-1 flex h-96 w-[40rem] flex-col items-start overflow-y-scroll text-left text-lg"
			>
				<p class="mb-4 text-3xl text-pink">Featured Work</p>
				<p>( ˶ • ᴖ •) Currently no featured artwork..</p>
			</div>
		{:else if sectionDisplay == 'software'}
			<div
				class="noscrollbar m-1 flex h-96 w-[40rem] items-start overflow-y-scroll text-left text-lg"
			>
				<div>
					<p class="mb-4 w-auto text-3xl text-pink">Software / Hardware</p>
					<div class="flew-col flex">
						<div class="flex flex-col items-center justify-center text-center">
							<img src="https://i.imgur.com/bw5gMmH.png" class="size-24" alt="Clip Studio icon" />
							<p class="w-60 text-center">Clip Studio Paint EX</p>
						</div>
						<div class="flex flex-col items-center justify-center text-center">
							<img src="https://i.imgur.com/nF5yP5N.png" class="size-24" alt="MSI icon" />
							<p class="w-60 text-center">12th Gen i7-12650H</p>
						</div>
					</div>
				</div>
			</div>
		{:else if sectionDisplay == 'projects'}
			<div
				class="noscrollbar m-1 flex h-96 w-[40rem] flex-col items-start overflow-y-scroll text-left text-lg"
			>
				<p class="mb-4 text-3xl text-pink">Projects</p>
				<p>Games, websites, and whatnot will be posted here (๑&gt;ᴗ&lt;๑)</p>
			</div>
		{:else if sectionDisplay == 'merch'}
			<div
				class="noscrollbar m-1 flex h-96 w-[40rem] flex-col items-start overflow-y-scroll text-left text-lg"
			>
				<p class="mb-4 text-3xl text-pink">Merch</p>
				<p>What? Did you really think Reii plush was a thing? www</p>
			</div>
		{:else if sectionDisplay == 'affiliate'}
			<div
				class="noscrollbar m-1 flex h-96 w-[40rem] flex-col items-start overflow-y-scroll text-left text-lg"
			>
				<p class="mb-4 text-3xl text-pink">Affiliation</p>
				<div>
					<a href="https://brekkie.stream" target="_blank">
						<button class="cursor-pointer border-0 bg-transparent text-center">
							<img
								src="https://i.imgur.com/DnngPU0.png"
								class="size-32"
								alt="reii with brekkie logo"
							/>
						</button>
						<p class="flex items-center justify-center">brekkie.stream</p>
					</a>
				</div>
			</div>
		{/if}

		<div
			class="noscrollbar ml-8 flex h-96 w-40 flex-col items-start justify-center overflow-y-scroll border-l border-dashed border-translucent p-3 text-left"
		>
			<button
				class={clsx([
					'mb-2 ml-4 mt-2 text-left text-xl',
					sectionDisplay == 'intro' ? 'text-pink' : 'text-pale hover:text-pink'
				])}
				onclick={() => {
					sectionDisplay = 'intro';
				}}>Introduction</button
			>
			<button
				class={clsx([
					'mb-2 ml-4 mt-2 text-left text-xl',
					sectionDisplay == 'eduExp' ? 'text-pink' : 'text-pale hover:text-pink'
				])}
				onclick={() => {
					sectionDisplay = 'eduExp';
				}}>Education & Experience</button
			>
			<button
				class={clsx([
					'mb-2 ml-4 mt-2 text-left text-xl',
					sectionDisplay == 'featured' ? 'text-pink' : 'text-pale hover:text-pink'
				])}
				onclick={() => {
					sectionDisplay = 'featured';
				}}>Featured Work</button
			>

			<button
				class={clsx([
					'mb-2 ml-4 mt-2 text-left text-xl',
					sectionDisplay == 'software' ? 'text-pink' : 'text-pale hover:text-pink'
				])}
				onclick={() => {
					sectionDisplay = 'software';
				}}>Software / Hardware</button
			>

			<hr class="m-5 mx-auto w-11/12 border-dashed border-translucent" />

			<button
				class={clsx([
					'mb-2 ml-4 mt-2 text-left text-xl',
					sectionDisplay == 'projects' ? 'text-pink' : 'text-pale hover:text-pink'
				])}
				onclick={() => {
					sectionDisplay = 'projects';
				}}>Projects</button
			>
			<!-- <button
				class={clsx([
					'mb-2 ml-4 mt-2 text-left text-xl',
					sectionDisplay == 'merch' ? 'text-pink' : 'text-pale hover:text-pink'
				])}
				onclick={() => {
					sectionDisplay = 'merch';
				}}>Merch</button
			> -->
			<button
				class={clsx([
					'mb-2 ml-4 mt-2 text-left text-xl',
					sectionDisplay == 'affiliate' ? 'text-pink' : 'text-pale hover:text-pink'
				])}
				onclick={() => {
					sectionDisplay = 'affiliate';
				}}>Affiliation</button
			>
		</div>
	</div>
</main>

<style>
	.noscrollbar::-webkit-scrollbar {
		width: 0px;
		background: transparent;
	}
</style>
