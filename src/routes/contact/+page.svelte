<svelte:head>
	<title>Reii | Let's Chat!</title>
</svelte:head>

<form
	target="_blank"
	action="https://formsubmit.co/reiing.art@gmail.com"
	method="POST"
	class="m-auto mt-4 flex h-[38rem] max-w-sm flex-col items-center justify-center"
>
	<div class="m-4 w-[38rem]">
		<label for="contact-point" class="mb-2 block text-lg text-white">Primary Contact Point</label>
		<select
			id="contact-point"
			class="block w-full rounded-lg border-2 border-white bg-translucent/15 p-2.5 text-white hover:border-pink"
		>
			<option class="bg-grey">Email</option>
			<option class="bg-grey/85">Discord (Recommended)</option>
			<option class="bg-grey">Bluesky</option>
			<option class="bg-grey">X / Twitter</option>
			<option class="bg-grey">Instagram</option>
		</select>
	</div>
	<div>
		<input
			type="text"
			name="name"
			class="m-4 w-[38rem] rounded-lg border-2 border-white bg-translucent/15 p-2 text-white placeholder-white hover:border-pink"
			placeholder="Name / Handle"
			required
		/>
	</div>
	<div>
		<input
			type="email"
			name="email"
			class="m-4 w-[38rem] rounded-lg border-2 border-white bg-translucent/15 p-2 text-white placeholder-white hover:border-pink"
			placeholder="Email Address"
			required
		/>
	</div>
	<textarea
		placeholder="Your Message"
		class="m-4 w-[38rem] rounded-lg border-2 border-white bg-translucent/15 p-2 text-white placeholder-white hover:border-pink"
		name="message"
		rows="10"
		required
	></textarea>

	<div class="w-[38rem] text-right text-xl hover:text-pink">
		<button type="submit">Submit Form</button>
	</div>
</form>
