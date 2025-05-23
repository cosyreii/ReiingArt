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
		class="m-2 flex h-fit items-start justify-start rounded-3xl bg-[url('https://i.imgur.com/OFZMXJo.png')] bg-cover bg-bottom p-1 max-lg:bg-none"
	>
		<!-- align-left + info? -->
		<div
			class="m-2 ml-16 flex w-1/2 flex-col justify-start rounded-3xl bg-translucent/40 p-3 text-center text-[#171515] max-lg:w-full max-lg:bg-translucent/20"
		>
			<div
				class="mb-2 flex items-center justify-center rounded-lg bg-pale/85 max-lg:bg-translucent/20"
			>
				<p class="p-4 text-xl font-black tracking-widest text-pink">COPYRIGHT / USAGE</p>
			</div>

			<div class="mb-1 w-full overflow-clip rounded-3xl border-[3px] border-solid border-red">
				<div class="border-b-[3px] border-solid border-red bg-pink p-1 font-bold">
					<p>Personal Use</p>
				</div>
				<div class="bg-pale p-1 text-left text-sm">
					<div class="ml-2">
						<p>⇀ Profile Picture (PFP), sharing on social media (with credit).</p>
						<p>⇀ Showing art on stream or unmonetised video (with credit).</p>
						<p>⇀ Posting artwork on forum or Discord (with credit).</p>
						<p>⇀ Using image as wallpaper for personal enjoyment.</p>
						<p>⇀ Streaming models (PNGtuber, GIFtuber, VTuber).</p>
					</div>
				</div>
			</div>

			<div class="my-1 w-full overflow-clip rounded-3xl border-[3px] border-solid border-red">
				<div class="border-b-[3px] border-solid border-red bg-pink p-1 font-bold">
					<p>Commercial (+50$)</p>
				</div>
				<div class="bg-pale p-1 text-left text-sm">
					<div class="ml-2">
						<p class="font-bold text-red">☆ Use for personal branding or hobby monetisation.</p>
						<p>⇀ Pay to use emotes (e.g. Twitch Subscription, YouTube Membership)</p>
						<p>⇀ Use art to promote direct revenue, events, merch etc.</p>
						<p>⇀ Branding (logos, overlays, stingers).</p>
						<p>⇀ Streaming model for corporates.</p>
					</div>
				</div>
			</div>

			<div class="mt-1 w-full overflow-clip rounded-3xl border-[3px] border-solid border-red">
				<div class="border-b-[3px] border-solid border-red bg-pink p-1 font-bold">
					<p>Commercial (+100$)</p>
				</div>
				<div class="bg-pale p-1 text-left text-sm">
					<div class="ml-2">
						<p class="font-bold text-red">☆ Use for profit generating, media and merchandise.</p>
						<p>⇀ Digital perks, member rewards, paywall content.</p>
						<p>⇀ Merchandise: Stickers, keychain, pins, apparel, prints etc.</p>
						<p class="ml-2 text-xs text-[#171515a5]">
							↪ Royalty contract is required for merchandise.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<p class="text-right text-lg font-black text-pale max-lg:hidden">Artwork by @amyhmlam</p>
</div>

<GoToTop showAtPixel={1000} />
