<script lang="ts">
	import clsx from 'clsx';
	import ChevronDown from '$lib/components/chevron-down.svelte';
	import NorthEast from '$lib/components/northeast-plane.svelte';
	import EduExp from '$lib/components/eduexp-chart.svelte';
	const sectionNames: Record<string, string> = {
		intro: 'Introduction',
		eduExp: 'Education & Experience',
		projects: 'Projects',
		achievement: 'Achievements'
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
		</div>

		{#if sectionDisplay == 'intro'}
			<div
				class="noscrollbar m-1 flex h-96 w-[40rem] flex-col overflow-y-scroll text-lg max-md:w-auto"
			>
				<p class="mb-4 text-left text-3xl text-pink max-md:text-center">Hai! I'm Reii.</p>
				<p class="mb-4 text-left max-md:text-center">
					A freelance illustrator specialising in
					<span class="font-black text-[#ffffff]">design</span> and
					<span class="font-black text-[#ffffff]">expression</span>. I mainly work on
					<span class="bg-pink/25 font-black text-[#ffffff]">character design</span>,
					<span class="bg-pink/25 font-black text-[#ffffff]">streaming models</span>, and
					<span class="bg-pink/25 font-black text-[#ffffff]">emoticons / badges</span>.
				</p>
				<p class="mb-4 text-left max-md:text-center">
					I also have experience working on
					<span class="bg-pink/25 font-black text-[#ffffff]">game assets</span>,
					<span class="bg-pink/25 font-black text-[#ffffff]">merch design</span>, and even
					<span class="bg-pink/25 font-black text-[#ffffff]">logos & cards</span>!
				</p>
				<p class="mb-4 text-left max-md:text-center">
					Other Skills —
					<span class="text-left text-translucent max-md:text-center">
						Hobby writer that does
						<span class="bg-pink/15 font-black">stories</span>,
						<span class="bg-pink/15 font-black">scripts</span>, and
						<span class="bg-pink/15 font-black">movie critiques</span>. Am I considered a
						<span class="bg-pink/15 font-black">web dev</span> now too?
					</span>
				</p>
				<p class="mb-4 text-left max-md:text-center">
					Aside from that, I am fluent in <span class="font-black">English</span> and
					<span class="font-black">Mandarin</span>~
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

					<EduExp time="May 2025 - Current" position="Toybox Tumble Design Director" />
					<EduExp
						time="Jul 2024 - Current"
						position="Super Streamer Lobby (TETR.IO) Gamemode Illustrator"
					/>
					<EduExp time="Jul 2023 - Current" position="Freelance Illustrator and Designer" />
					<EduExp time="Aug 2023 - Jul 2025" position="Diploma in Design and Media (Animation)" />
					<EduExp
						time="Nov 2018 (7 years)"
						position="Art journey starts! Specialising in character, concept, and design."
					/>
				</div>
			</div>
		{:else if sectionDisplay == 'projects'}
			<div
				class="page-scrollbar m-1 flex h-96 w-[40rem] flex-col items-start overflow-y-scroll text-left text-lg max-md:w-auto max-md:text-justify"
			>
				<p class="mb-4 text-3xl text-pink">Projects</p>
				<div class="flex flex-row items-center">
					<a
						class="flex cursor-pointer flex-row items-center hover:underline"
						href="https://discord.gg/aqPSEJS3SR"
						target="_blank"
					>
						<img
							src="https://i.imgur.com/cgBYoqW.png"
							class="mr-2 size-14 rounded-full"
							alt="Super Streamer Lobby (TETR.IO)"
						/>
						<p class="mr-2">Super Streamer Lobby (TETR.IO)</p>
						<NorthEast class="justify-end" />
					</a>
				</div>
				<div class="grid grid-cols-2">
					<div class="flex flex-col items-center justify-center p-1">
						<img src="https://i.imgur.com/xThzP8b.png" class="rounded-3xl" alt="Australian Mode" />
					</div>
					<div class="flex flex-col items-center justify-center p-1">
						<img
							src="https://i.imgur.com/NG8Bfzs.png"
							class="rounded-3xl"
							alt="Split Squares Mode"
						/>
					</div>
				</div>
				<div class="flex flex-row items-center pt-2">
					<a
						class="flex cursor-pointer flex-row items-center hover:underline"
						href="/unavailable"
						target="_blank"
					>
						<img
							src="https://i.imgur.com/RiSNf5Z.png"
							class="mr-2 size-14 rounded-full"
							alt="Nukexplosion"
						/>
						<p class="mr-2">Nukexplosion Design Director</p>
						<NorthEast class="justify-end" />
					</a>
				</div>
			</div>
		{:else if sectionDisplay == 'achievement'}
			<div
				class="page-scrollbar m-1 flex h-96 w-[40rem] flex-col items-start overflow-y-scroll text-left text-lg max-md:w-auto max-md:text-justify"
			>
				<p class="mb-4 text-3xl text-pink">Achievements</p>
				<div class="grid grid-cols-2">
					<div class="flex flex-col items-center justify-center p-1 text-center text-sm">
						<img
							src="https://i.imgur.com/baZTPzV.png"
							class="rounded-3xl"
							alt="Currently Unavailable"
						/>
						<p class="pb-1 pt-2">Runner-Up for Stacky Awards 2024</p>
						<p class="text-xs text-translucent">
							Rising Streamer, VTuber of the Year, Visual Artist of the Year
						</p>
					</div>

					<div class="flex flex-col items-center justify-center p-1 text-center text-sm">
						<img
							src="https://i.imgur.com/Nhd3ZTY.png"
							class="rounded-3xl"
							alt="Twitch Affiliate Email"
						/>
						<p class="pb-1 pt-2">Twitch Affiliate</p>
						<p class="text-xs text-translucent">January 30th, 2024</p>
					</div>
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
						sectionDisplay == 'projects' ? 'text-pink' : 'text-pale hover:text-pink'
					])}
					onclick={() => {
						sectionDisplay = 'projects';
					}}>{sectionNames['projects']}</button
				>
				<button
					class={clsx([
						'w-full py-2 text-left text-xl max-md:text-center',
						sectionDisplay == 'achievement' ? 'text-pink' : 'text-pale hover:text-pink'
					])}
					onclick={() => {
						sectionDisplay = 'achievement';
					}}>{sectionNames['achievement']}</button
				>
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
