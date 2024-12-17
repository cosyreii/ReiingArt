<script lang="ts">
	// make a variable to store which thing to show
	let sectionDisplay = $state('intro');
</script>

<main>
	<div class="introduction">
		<div>
			<img src="https://i.imgur.com/KeaFUOV.png" class="introImg" alt="cosyreii's chibi model" />
			<p class="intBottomText">funni placeholder bottom text</p>
		</div>

		{#if sectionDisplay == 'intro'}
			<div class="introText" id="introMain">
				<p class="pink">Hai! I'm Reii.</p>
				<p>
					I'm a diploma student in
					<span class="pink">Design and Media</span> specialising in 2D
					<span class="pink">Animation</span>. I stream on Twitch and am fluent in English and
					Mandarin~
				</p>
				<p>Nice to meet you!</p>
			</div>
		{:else if sectionDisplay == 'eduExp'}
			<div class="introText" id="introMain">
				<p class="pink">Education & Experience</p>
				<div class="eduChart">
					<div class="educRow header">
						<div class="educColumn">Month, Year</div>
						<div class="educColumn">Event / Experience</div>
					</div>
					<div class="educRow">
						<div class="educColumn">Nov 2018</div>
						<div class="educColumn">Art journey starts! Specialising in character, concept, and design.</div>
					</div>
					<div class="educRow">
						<div class="educColumn">Aug 2023 - Current</div>
						<div class="educColumn">Freelance illustrator for content creators.</div>
					</div>
					<div class="educRow">
						<div class="educColumn">Jan 2024 - Current</div>
						<div class="educColumn">Embarked on streaming journey. (Twitch)</div>
					</div>
					<div class="educRow">
						<div class="educColumn">Jul 2024 - Current</div>
						<div class="educColumn">Super Streamer Lobby (TETR.IO) gamemode illustrator.</div>
					</div>
				</div>
			</div>
		{:else if sectionDisplay == 'featured'}
			<div class="introText" id="introMain">
				<p class="pink">Featured Work</p>
				<p>( ˶ • ᴖ •) Currently no featured artwork..</p>
			</div>
		{:else if sectionDisplay == 'projects'}
			<div class="introText" id="introMain">
				<p class="pink">Projects</p>
				<p>Games, websites, and whatnot will be posted here (๑&gt;ᴗ&lt;๑)</p>
			</div>
		{:else if sectionDisplay == 'merch'}
			<div class="introText" id="introMain">
				<p class="pink">Merch</p>
				<p>What? Did you really think Reii plush was a thing? www</p>
			</div>
		{:else if sectionDisplay == 'affiliate'}
			<div class="introText" id="introMain">
				<p class="pink">Affiliation</p>
				<div class="brekkie">
					<a class="brekkieAnchor" href="https://brekkie.stream" target="_blank">
						<button class="brekkieButton">
							<img src="https://i.imgur.com/DnngPU0.png" alt="reii with brekkie logo" />
						</button>
						<p>brekkie.stream</p>
					</a>
				</div>
			</div>
		{/if}

		<div class="scroll">
			<button
				class="mButton"
				onclick={() => {
					sectionDisplay = 'intro';
				}}>Introduction</button
			>
			<button
				class="mButton"
				onclick={() => {
					sectionDisplay = 'eduExp';
				}}>Education & Experience</button
			>
			<button
				class="mButton"
				onclick={() => {
					sectionDisplay = 'featured';
				}}>Featured Work</button
			>

			<hr class="border" />

			<button
				class="mButton"
				onclick={() => {
					sectionDisplay = 'projects';
				}}>Project</button
			>
			<button
				class="mButton"
				onclick={() => {
					sectionDisplay = 'merch';
				}}>Merch</button
			>
			<button
				class="mButton"
				onclick={() => {
					sectionDisplay = 'affiliate';
				}}>Affiliation</button
			>
		</div>
	</div>
</main>
