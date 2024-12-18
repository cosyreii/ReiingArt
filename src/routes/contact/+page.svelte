<svelte:head>
	<title>Reii | Let's Chat!</title>
</svelte:head>

<div class="m-4 mt-8 flex flex-row items-center justify-start px-40">
	<div
		class="mr-1 flex h-[35rem] w-[30rem] flex-col overflow-y-scroll border-r-2 border-solid border-white text-left text-lg"
	>
		<h1 class="text-3xl text-pink">Please include:</h1>
		<div class="w-[25rem] text-left">
			<p class="mt-2">⇀ Contact Point(s)</p>
			<p class="text-sm text-translucent">Email, Discord, Bluesky, X / Twitter, Instagram</p>
			<p class="mt-2">⇀ Type of commission + Amount ( if applicable )</p>
			<p class="mt-2">⇀ Commercial usage ( Personal, Commercial )</p>
			<p class="text-sm text-translucent">
				check commercial tiers <a href="/tiers" class="underline hover:text-pink"> here </a>
			</p>
			<p class="mt-2">⇀ Deadlines / Expectations</p>
			<p class="mt-2">⇀ Rights to stream and post WIP / final artwork</p>
			<p class="text-sm text-translucent">
				read the <a href="/terms" class="underline hover:text-pink">Terms & Conditions</a> for rules
				and fees regarding NDA
			</p>
		</div>
		<h1 class="mt-[5rem] text-xl text-pink">Thank you for considering me~</h1>
	</div>

	<form
		target="_blank"
		action="https://formsubmit.co/reiing.art@gmail.com"
		method="POST"
		class="m-1 ml-8 flex h-[35rem] max-w-sm flex-col"
	>
		<div class="mb-2 ml-2 mr-2 w-[38rem]">
			<input
				type="text"
				name="name"
				class="w-[38rem] rounded-lg border-2 border-white bg-translucent/15 p-3 text-white placeholder-white hover:border-pink"
				placeholder="Name / Handle"
				required
			/>
		</div>
		<div>
			<input
				type="email"
				name="email"
				class="m-2 w-[38rem] rounded-lg border-2 border-white bg-translucent/15 p-3 text-white placeholder-white hover:border-pink"
				placeholder="Email Address"
				required
			/>
		</div>
		<div>
			<input
				type="text"
				name="primary"
				class="m-2 w-[38rem] rounded-lg border-2 border-white bg-translucent/15 p-3 text-white placeholder-white hover:border-pink"
				placeholder="Primary Contact Point"
				required
			/>
		</div>
		<textarea
			placeholder="Your Message"
			class="m-2 w-[38rem] rounded-lg border-2 border-white bg-translucent/15 p-3 text-white placeholder-white hover:border-pink"
			name="message"
			rows="10"
			required
		></textarea>

		<div class="w-[38rem] text-right text-xl hover:text-pink">
			<button type="submit">Submit Form</button>
		</div>
	</form>
</div>
