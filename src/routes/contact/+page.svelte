<svelte:head>
	<title>Reii | Let's Chat!</title>
</svelte:head>

<div class="m-4 mt-8 flex flex-row items-center justify-start px-40">
	<div
		class="mr-1 flex h-[35rem] w-[30rem] flex-col overflow-y-scroll border-r-2 border-solid border-white text-left text-lg"
	>
		<h1 class="text-3xl text-pink">Please include:</h1>
		<div class="w-[25rem] text-left">
			<p class="mt-2">⇀ Type of commission + Amount ( if applicable )</p>
			<p class="mt-2">⇀ Commercial usage ( Personal, Commercial )</p>
			<p class="ml-4 text-sm text-translucent">
				↪ check commercial tiers <a href="/tiers" class="underline hover:text-pink"> here </a>
			</p>
			<p class="mt-2">⇀ Deadlines / Expectations</p>
			<p class="mt-2">⇀ Rights to stream and post WIP / final artwork</p>
			<p class="ml-4 text-sm text-translucent">
				↪ read the <a href="/terms" class="underline hover:text-pink">Terms & Conditions</a> for rules
				and fees regarding NDA
			</p>
		</div>
		<h1 class="mt-[5rem] text-xl text-pink">Thank you for considering me~</h1>
		<p class="w-80 text-justify text-sm text-translucent">
			highly suggest you save a copy / screenshot of the email~ I haven't a clue on how to send you
			a copy of your form ( still new to code )
		</p>
	</div>

	<form
		class="m-1 ml-8 flex h-[35rem] max-w-sm flex-col"
		name="contact"
		method="POST"
		data-netlify="true"
		on:submit={async (event) => {
			event.preventDefault();

			const myForm = event.currentTarget;
			const formData = new FormData(myForm);

			await fetch('/contact', {
				method: 'POST',
				body: formData
			});
			window.alert('form submitted');
		}}
	>
		<div class="mb-2 ml-2 mr-2 w-[38rem]">
			<label for="contact-point" class="mb-2 ml-2 block text-lg text-white"
				>Primary Contact Point</label
			>
			<select
				name="contact"
				id="contact"
				class="block w-[38rem] rounded-lg border-2 border-white bg-translucent/15 p-2.5 text-white hover:border-pink"
			>
				<option class="bg-grey">Email</option>
				<option class="bg-grey">Discord (Recommended)</option>
				<option class="bg-grey">Bluesky</option>
				<option class="bg-grey">X / Twitter</option>
				<option class="bg-grey">Instagram</option>
			</select>
		</div>
		<div>
			<input
				type="text"
				name="name"
				class="m-2 w-[38rem] rounded-lg border-2 border-white bg-translucent/15 p-3 text-white placeholder-white hover:border-pink"
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
