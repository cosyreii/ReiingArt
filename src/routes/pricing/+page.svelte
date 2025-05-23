<script>
	import GoToTop from '$lib/components/go-to-top.svelte';
</script>

<svelte:head>
	<title>Reii | Services</title>
</svelte:head>
<p class="m-4 flex items-center justify-center"></p>

<!-- size -->
<div
	class="align-center m-1 flex flex-col justify-start px-20 text-left text-lg max-md:px-3"
	id="commercial-usage"
>
	<!-- background -->
	<div
		class="m-2 flex h-fit items-start justify-start rounded-3xl bg-[url('https://i.imgur.com/baZTPzV.png')] bg-cover bg-center p-1 max-lg:bg-none"
	>
		<!-- align-left + info? -->
		<div class="m-2 flex w-2/3 flex-col justify-start text-[#171515] max-lg:w-full">
			<div class="mb-2 w-full overflow-clip rounded-3xl border-2 border-dashed border-[#171515]">
				<div class="border-b-2 border-dashed border-[#171515] bg-pink p-2 text-lg font-black">
					<p>Personal Use</p>
				</div>
				<div class="bg-pale p-2">
					<p>⇀ Profile Picture (PFP), sharing on social media (with credit).</p>
					<p>⇀ Showing art on stream or unmonetised video (with credit).</p>
					<p>⇀ Posting artwork on forum or Discord (with credit).</p>
					<p>⇀ Using image as wallpaper for personal enjoyment.</p>
					<p>⇀ Streaming models (PNGtuber, GIFtuber, VTuber).</p>
				</div>
			</div>

			<div class="my-2 w-full overflow-clip rounded-3xl border-2 border-dashed border-[#171515]">
				<div class="border-b-2 border-dashed border-[#171515] bg-pink p-2 text-lg font-black">
					<p>Commercial (+50$)</p>
				</div>
				<div class="bg-pale p-2">
					<p class="text-red font-bold">☆ Use for personal branding or hobby monetisation.</p>
					<p>⇀ Pay to use emotes (e.g. Twitch Subscription, YouTube Membership)</p>
					<p>⇀ Use art to promote direct revenue, events, merch etc.</p>
					<p>⇀ Branding (logos, overlays, stingers).</p>
					<p>⇀ Streaming model for corporates.</p>
				</div>
			</div>

			<div class="mt-2 w-full overflow-clip rounded-3xl border-2 border-dashed border-[#171515]">
				<div class="border-b-2 border-dashed border-[#171515] bg-pink p-2 text-lg font-black">
					<p>Commercial (+100$)</p>
				</div>
				<div class="bg-pale p-2">
					<p class="text-red font-bold">☆ Use for profit generating, media and merchandise.</p>
					<p>⇀ Digital perks, member rewards, paywall content.</p>
					<p>⇀ Merchandise: Stickers, keychain, pins, apparel, prints etc.</p>
					<p class="ml-4 text-sm text-[#171515a5]">
						↪ Royalty contract is required for merchandise.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<GoToTop showAtPixel={1000} />
