<script lang="ts">
	import clsx from 'clsx';

	// make a variable to store which thing to show
	let sectionDisplay = $state('intro');
</script>

<main class="p-5 text-center">
	<div class="m-4 flex flex-row items-center justify-center gap-4">
		<div>
			<img
				src="https://i.imgur.com/XcYfQTY.png"
				class="size-80 rounded-xl object-cover"
				alt="cosyreii's chibi model"
			/>
			<p class="text-translucent">funni placeholder bottom text</p>
		</div>

		{#if sectionDisplay == 'intro'}
			<div
				class="noscrollbar m-1 flex h-96 w-[40rem] flex-col items-start overflow-y-scroll text-left text-lg"
			>
				<p class="text-pink mb-4 text-3xl">Hai! I'm Reii.</p>
				<p>
					I'm a diploma student in
					<span class="text-pink">Design and Media</span> specialising in 2D
					<span class="text-pink">Animation</span>. I stream on Twitch and am fluent in English and
					Mandarin~
				</p>
				<p class="mt-4">Nice to meet you!</p>
			</div>
		{:else if sectionDisplay == 'eduExp'}
			<div
				class="noscrollbar m-1 flex h-96 w-[40rem] flex-col items-start overflow-y-scroll text-left text-lg"
			>
				<p class="text-pink mb-4 text-3xl">Education & Experience</p>
				<div
					class="border-pale grid border-collapse grid-cols-[1fr,2fr] grid-rows-5 items-center overflow-hidden rounded-lg border-2 border-solid pb-8"
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
				<p class="text-pink mb-4 text-3xl">Featured Work</p>
				<p>( ˶ • ᴖ •) Currently no featured artwork..</p>
			</div>
		{:else if sectionDisplay == 'projects'}
			<div
				class="noscrollbar m-1 flex h-96 w-[40rem] flex-col items-start overflow-y-scroll text-left text-lg"
			>
				<p class="text-pink mb-4 text-3xl">Projects</p>
				<p>Games, websites, and whatnot will be posted here (๑&gt;ᴗ&lt;๑)</p>
			</div>
		{:else if sectionDisplay == 'merch'}
			<div
				class="noscrollbar m-1 flex h-96 w-[40rem] flex-col items-start overflow-y-scroll text-left text-lg"
			>
				<p class="text-pink mb-4 text-3xl">Merch</p>
				<p>What? Did you really think Reii plush was a thing? www</p>
			</div>
		{:else if sectionDisplay == 'affiliate'}
			<div
				class="noscrollbar m-1 flex h-96 w-[40rem] flex-col items-start overflow-y-scroll text-left text-lg"
			>
				<p class="text-pink mb-4 text-3xl">Affiliation</p>
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
			class="border-pale noscrollbar ml-8 flex h-96 w-40 flex-col items-start justify-center overflow-y-scroll border-l-2 border-solid p-3 text-left"
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

			<hr class="border-pale m-5 mx-auto w-11/12" />

			<button
				class={clsx([
					'mb-2 ml-4 mt-2 text-left text-xl',
					sectionDisplay == 'projects' ? 'text-pink' : 'text-pale hover:text-pink'
				])}
				onclick={() => {
					sectionDisplay = 'projects';
				}}>Project</button
			>
			<button
				class={clsx([
					'mb-2 ml-4 mt-2 text-left text-xl',
					sectionDisplay == 'merch' ? 'text-pink' : 'text-pale hover:text-pink'
				])}
				onclick={() => {
					sectionDisplay = 'merch';
				}}>Merch</button
			>
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
