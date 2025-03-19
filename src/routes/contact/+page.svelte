<svelte:head>
	<title>Reii | Let's Chat!</title>
</svelte:head>

<div class="m-4 mt-8 flex flex-row items-center px-40 max-md:flex-col max-md:px-0">
	<div
		class="flex h-[35rem] flex-col overflow-y-scroll border-r-2 border-solid border-white pr-20 text-left text-lg max-md:h-44 max-md:border-hidden max-md:px-0 max-md:pr-0"
	>
		<h1 class="text-3xl text-pink max-md:text-center">Please include:</h1>
		<div class=" text-left max-md:text-base">
			<p class="mt-2">⇀ General info / What you're looking for</p>
			<p class="mt-2">⇀ Commercial usage ( Personal, Commercial )</p>
			<p class="ml-4 text-sm text-translucent">
				↪ check commercial tiers <a href="/tiers" class="underline hover:text-pink"> here </a>
			</p>
			<p class="mt-2">⇀ Deadlines / Expectations</p>
		</div>
		<h1 class="mt-20 text-xl text-pink max-md:hidden">Thank you for considering me~</h1>
	</div>

	<hr class="my-5 hidden w-80 border-pale max-md:block" />

	<form
		class="m-1 ml-8 flex h-[35rem] flex-col max-md:ml-0"
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
			window.alert('Thankiew~ Will get back to you as soon as possible! ৻(  •̀ ᗜ •́  ৻)');
		}}
	>
		<div class="mb-2 ml-2 mr-2 w-[38rem] max-md:ml-0 max-md:w-80">
			<label for="contact-point" class="mb-2 ml-2 block text-lg text-white"
				>Primary Contact Point</label
			>
			<select
				name="contact"
				id="contact"
				class="block w-[38rem] rounded-lg border-2 border-white bg-translucent/15 p-2.5 text-white hover:border-pink max-md:ml-0 max-md:w-80"
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
				class="m-2 w-[38rem] rounded-lg border-2 border-white bg-translucent/15 p-3 text-white placeholder-white hover:border-pink max-md:ml-0 max-md:w-80"
				placeholder="Name / Handle"
				required
			/>
		</div>
		<div>
			<input
				type="email"
				name="email"
				class="m-2 w-[38rem] rounded-lg border-2 border-white bg-translucent/15 p-3 text-white placeholder-white hover:border-pink max-md:ml-0 max-md:w-80"
				placeholder="Email Address"
				required
			/>
		</div>

		<textarea
			placeholder="Your Message"
			class="m-2 w-[38rem] rounded-lg border-2 border-white bg-translucent/15 p-3 text-white placeholder-white hover:border-pink max-md:ml-0 max-md:w-80"
			name="message"
			rows="10"
			required
		></textarea>

		<div class="w-[38rem] text-right text-xl hover:text-pink max-md:w-80">
			<button type="submit">Submit Form</button>
		</div>
	</form>

	<h1 class="mt-2 mb-4 hidden w-80 text-center text-xl text-pink max-md:block">
		Thank you for considering me~
	</h1>
</div>
