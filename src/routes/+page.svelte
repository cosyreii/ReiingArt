<script lang="ts">
	import clsx from 'clsx';
	import ChevronDown from '$lib/components/chevron-down.svelte';
	const sectionNames: Record<string, string> = {
		intro: 'Introduction',
		eduExp: 'Education & Experience',
		featured: 'Featured Work',
		projects: 'Projects',
		merch: 'Merch',
		affiliate: 'Affiliations'
	};

	// make a variable to store which thing to show
	let sectionDisplay = $state('intro');
	let mobileMenu = $state(false);
</script>

<svelte:head>
	<title>Reii Ng (@cosyreii)</title>
</svelte:head>

<main class="p-5 text-center">
	<div class="m-4 flex flex-row items-center justify-center gap-4 max-md:flex-col-reverse">
		<div class="max-lg:hidden">
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
				class="noscrollbar m-1 flex h-96 w-[40rem] flex-col overflow-y-scroll text-lg max-md:w-auto"
			>
				<p class="mb-4 text-left text-3xl text-pink max-md:text-center">Hai! I'm Reii.</p>
				<p class="text-left max-md:text-center">
					I'm a freelance illustrator specialising in
					<span class="font-black">design</span> and <span class="font-black">expression</span>. I
					stream all my latest hyperfixation on Twitch with the consistency of melted jelly
					<span class="text-translucent">( not consistent at all )</span>. Aside from that, I am
					fluent in <span class="font-black">English</span> and
					<span class="font-black">Mandarin</span>~
				</p>
				<p class="mb-4 mt-4 text-left text-3xl text-pink max-md:text-center">What do I do?</p>
				<p class="mb-4 text-left max-md:text-center">
					I mainly work on
					<span class="font-black">character design</span>,
					<span class="font-black">stickers</span>,
					<span class="font-black">emotes</span>, and
					<span class="font-black">badges</span>. I love helping my clients find their perfect
					persona but that's not all! I am also a
					<span class="font-black">writer</span> that does
					<span class="font-black">stories</span>,
					<span class="font-black">scripts</span>, and
					<span class="font-black">movie critiques</span>.
				</p>
				<p class="text-left text-translucent max-md:text-center">
					Oh and I guess I am technically a
					<span class="font-black">web dev</span> now too?
				</p>
				<p class="mt-4 text-left text-2xl font-black max-md:text-center">Nice to meet you!</p>
			</div>
		{:else if sectionDisplay == 'eduExp'}
			<div
				class="noscrollbar m-1 flex h-96 w-[40rem] flex-col items-start text-left text-lg max-md:w-auto max-md:text-justify"
			>
				<p class="mb-4 text-3xl text-pink">Education & Experience</p>
				<div
					class="chart-scrollbar grid border-collapse scroll-m-4 grid-cols-[1fr,2fr] items-center overflow-hidden overflow-y-scroll rounded-lg border-2 border-solid border-pale pb-4"
				>
					<div class="whitespace-nowrap bg-pink/40 p-4 text-left font-bold">Month, Year</div>
					<div class="whitespace-nowrap bg-pink/40 p-4 text-left font-bold">Event / Experience</div>

					<div class="p-4 text-left">Jul 2024 - Current</div>
					<div class="p-4 text-left">Super Streamer Lobby (TETR.IO) gamemode illustrator.</div>

					<div class="p-4 text-left">Jan 2024 - Current</div>
					<div class="p-4 text-left">Embarked on streaming journey. (Twitch)</div>

					<div class="p-4 text-left">Aug 2023 - Current</div>
					<div class="p-4 text-left">Freelance illustrator.</div>

					<div class="p-4 text-left">Aug 2023 - Jul 2025</div>
					<div class="p-4 text-left">Diploma in Design and Media (Animation).</div>

					<div class="p-4 text-left">Nov 2018</div>
					<div class="p-4 text-left">
						Art journey starts! Specialising in character, concept, and design.
					</div>
				</div>
			</div>
		{:else if sectionDisplay == 'featured'}
			<div
				class="noscrollbar m-1 flex h-96 w-[40rem] flex-col items-start overflow-y-scroll text-left text-lg max-md:w-auto max-md:text-justify"
			>
				<p class="mb-4 text-3xl text-pink">Featured Work</p>
				<p>( ˶ • ᴖ •) Currently no featured artwork..</p>
			</div>
		{:else if sectionDisplay == 'projects'}
			<div
				class="noscrollbar m-1 flex h-96 w-[40rem] flex-col items-start overflow-y-scroll text-left text-lg max-md:w-auto max-md:text-justify"
			>
				<p class="mb-4 text-3xl text-pink">Projects</p>
				<p>Games, websites, and whatnot will be posted here (๑&gt;ᴗ&lt;๑)</p>
			</div>
		{:else if sectionDisplay == 'merch'}
			<div
				class="noscrollbar m-1 flex h-96 w-[40rem] flex-col items-start overflow-y-scroll text-left text-lg max-md:w-auto max-md:text-justify"
			>
				<p class="mb-4 text-3xl text-pink">Merch</p>
				<p>What? Did you really think Reii plush was a thing? www</p>
			</div>
		{:else if sectionDisplay == 'affiliate'}
			<div
				class="noscrollbar m-1 flex h-96 w-[40rem] flex-col items-start overflow-y-scroll text-left text-lg max-md:w-auto max-md:text-justify"
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

		<div class="relative max-md:w-full">
			<button
				class="flex w-full justify-between text-xl md:hidden"
				onclick={() => {
					mobileMenu = !mobileMenu;
				}}
			>
				<span>
					{sectionNames[sectionDisplay]}
				</span>
				<ChevronDown class="justify-end" />
			</button>
			<div
				class={clsx([
					'noscrollbar ml-8 flex h-96 w-40 flex-col items-start justify-center overflow-y-scroll border-l border-dashed border-translucent p-3 text-left transition-[height] max-md:absolute max-md:ml-0 max-md:w-72 max-md:items-center max-md:justify-start max-md:divide-y max-md:overflow-hidden max-md:rounded-lg max-md:border-[3px] max-md:border-l-0 max-md:border-solid max-md:bg-grey',
					mobileMenu ? 'max-md:h-52' : 'max-md:h-0 max-md:p-0'
				])}
			>
				<button
					class={clsx([
						'w-full py-2 text-left text-xl max-md:text-center',
						sectionDisplay == 'intro' ? 'text-pink' : 'text-pale hover:text-pink'
					])}
					onclick={() => {
						sectionDisplay = 'intro';
					}}>{sectionNames['intro']}</button
				>
				<button
					class={clsx([
						'w-full py-2 text-left text-xl max-md:text-center',
						sectionDisplay == 'eduExp' ? 'text-pink' : 'text-pale hover:text-pink'
					])}
					onclick={() => {
						sectionDisplay = 'eduExp';
					}}>{sectionNames['eduExp']}</button
				>
				<button
					class={clsx([
						'w-full py-2 text-left text-xl max-md:text-center',
						sectionDisplay == 'featured' ? 'text-pink' : 'text-pale hover:text-pink'
					])}
					onclick={() => {
						sectionDisplay = 'featured';
					}}>{sectionNames['featured']}</button
				>

				<!-- <hr class="m-5 mx-auto w-11/12 border-dashed border-translucent max-md:hidden" /> -->

				<button
					class={clsx([
						'w-full py-2 text-left text-xl max-md:text-center',
						sectionDisplay == 'projects' ? 'text-pink' : 'text-pale hover:text-pink'
					])}
					onclick={() => {
						sectionDisplay = 'projects';
					}}>{sectionNames['projects']}</button
				>
				<!-- <button
					class={clsx([
						'mb-2 ml-4 mt-2 text-left text-xl max-md:text-center max-md:text-base max-md:w-auto',
						sectionDisplay == 'merch' ? 'text-pink' : 'text-pale hover:text-pink'
					])}
					onclick={() => {
						sectionDisplay = 'merch';
					}}>Merch</button
				> -->
				<!-- <button
					class={clsx([
						'ml-4 my-2 text-left text-xl max-md:text-center max-md:text-base max-md:w-auto',
						sectionDisplay == 'affiliate' ? 'text-pink' : 'text-pale hover:text-pink'
					])}
					onclick={() => {
						sectionDisplay = 'affiliate';
					}}>Affiliation</button
				> -->
			</div>
		</div>
	</div>
</main>

<style>
	.noscrollbar::-webkit-scrollbar {
		width: 0px;
		background: transparent;
	}
</style>
