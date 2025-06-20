<script lang="ts">
	import GoToTop from '$lib/components/go-to-top.svelte';
	import Masonry from 'svelte-bricks';
	import Review from '$lib/components/review.svelte';

	let items = $state([
		{
			id: 'poxial',
			image: 'https://pbs.twimg.com/profile_images/1650273413179789312/_Xjjz9QH_400x400.jpg',
			name: 'Poxial',
			link: 'ttps://www.youtube.com/@Poxial',
			review:
				'She went above and beyond and created a bunch of cute little emotes that me and my community adore! 🙂'
		},
		{
			id: 'wylie',
			image: 'https://pbs.twimg.com/profile_images/1832050112169648128/6mtK3lcS_400x400.jpg',
			name: 'WylieCantTwitch',
			link: 'https://www.twitch.tv/wyliecanttwitch',
			review:
				"Reii is a fantastic option who never ceases to provide S tier quality work! She even shares the interest in the work she's commissioned with :)"
		},
		{
			id: 'yukihara',
			image: 'https://i.imgur.com/6RPWzpB.png',
			name: 'Yukihara',
			link: '/unavailable',
			review:
				'I had only vague ideas but she stayed patient and put it into practice way better than I thought it could turn out.'
		},
		{
			id: 'smolminy',
			image: 'https://i.imgur.com/uzyoIZC.png',
			name: 'Smolminy',
			link: 'https://www.twitch.tv/smolminy',
			review:
				'Extremely patient and attentive with me which is super important as I am an individual with a few disabilities. Super accommodating.'
		},
		{
			id: 'kwondor',
			image: 'https://i.imgur.com/sw6z73g.png',
			name: 'Kwondor',
			link: 'https://www.twitch.tv/kwondor',
			review:
				'Reii is not only incredibly talented but also a joy to work with, refusing to rest until her clients are 100% satisfied.'
		}
	]);
</script>

<svelte:head>
	<title>Reii | Services</title>
</svelte:head>

<p class="m-4 flex items-center justify-center"></p>

<!-- size -->
<div
	class="align-center m-1 flex flex-col justify-start px-20 text-left text-lg max-md:px-3"
	id="copyright"
>
	<!-- background -->
	<div
		class="m-2 flex h-fit items-center justify-center rounded-3xl bg-[url('https://i.imgur.com/KjVfxR2.png')] bg-cover bg-bottom p-1"
	>
		<!-- info -->
		<div
			class="m-2 flex flex-col items-center justify-center rounded-3xl bg-[#171515a5]/40 p-3 text-center max-lg:m-2 max-lg:w-full"
		>
			<div class="mb-2 flex items-center justify-center rounded-lg">
				<p class="rounded-3xl bg-[#171515a5]/40 p-4 text-xl font-black tracking-widest">
					COPYRIGHT / USAGE
				</p>
			</div>

			<div class="flex flex-row max-lg:flex-col">
				<div
					class="mx-1 mb-1 w-full overflow-clip rounded-3xl border-[3px] border-solid border-grey"
				>
					<div class="border-b-[3px] border-solid border-grey bg-red p-1 font-bold">
						<p>Personal</p>
					</div>
					<div class="h-full bg-[#171515a5] p-1 text-left text-sm">
						<div class="ml-2">
							<p class="flex flex-row">
								<img src="https://i.imgur.com/BewOHTr.png" alt="pointer" class="mr-1 size-4" /> Profile
								Picture (PFP), sharing on social media (with credit).
							</p>
							<p class="flex flex-row">
								<img src="https://i.imgur.com/BewOHTr.png" alt="pointer" class="mr-1 size-4" /> Showing
								art on stream or unmonetised video (with credit).
							</p>
							<p class="flex flex-row">
								<img src="https://i.imgur.com/BewOHTr.png" alt="pointer" class="mr-1 size-4" /> Posting
								artwork on forum or Discord (with credit).
							</p>
							<p class="flex flex-row">
								<img src="https://i.imgur.com/BewOHTr.png" alt="pointer" class="mr-1 size-4" /> Free
								to use emotes (e.g. Discord Server, Twitch Follower)
							</p>
							<p class="flex flex-row">
								<img src="https://i.imgur.com/BewOHTr.png" alt="pointer" class="mr-1 size-4" /> Using
								image as wallpaper for personal enjoyment.
							</p>
						</div>
					</div>
				</div>

				<div
					class="mx-1 my-1 w-full overflow-clip rounded-3xl border-[3px] border-solid border-grey"
				>
					<div class="border-b-[3px] border-solid border-grey bg-red p-1 font-bold">
						<p>Branding (+25%)</p>
					</div>
					<div class="h-full bg-[#171515a5] p-1 text-left text-sm">
						<div class="ml-2">
							<p class="flex flex-row">
								<img src="https://i.imgur.com/MoPDHeQ.png" alt="important" class="mr-1 size-4" /> Use
								for personal branding or hobby monetisation.
							</p>
							<p class="flex flex-row">
								<img src="https://i.imgur.com/BewOHTr.png" alt="pointer" class="mr-1 size-4" /> Pay to
								use emotes (e.g. Twitch Subscription, YouTube Membership)
							</p>
							<p class="flex flex-row">
								<img src="https://i.imgur.com/BewOHTr.png" alt="pointer" class="mr-1 size-4" /> Use art
								to promote direct revenue, events, merch etc.
							</p>
							<p class="flex flex-row">
								<img src="https://i.imgur.com/BewOHTr.png" alt="pointer" class="mr-1 size-4" /> Branding
								(logos, overlays, stingers).
							</p>
						</div>
					</div>
				</div>

				<div
					class="mx-1 mt-1 w-full overflow-clip rounded-3xl border-[3px] border-solid border-grey"
				>
					<div class="border-b-[3px] border-solid border-grey bg-red p-1 font-bold">
						<p>Commercial (+75%)</p>
					</div>
					<div class="h-full bg-[#171515a5] p-1 text-left text-sm">
						<div class="ml-2">
							<p class="flex flex-row">
								<img src="https://i.imgur.com/MoPDHeQ.png" alt="important" class="mr-1 size-4" /> Use
								for profit generating, media and merchandise.
							</p>
							<p class="flex flex-row">
								<img src="https://i.imgur.com/BewOHTr.png" alt="pointer" class="mr-1 size-4" /> Digital
								perks, member rewards, paywall content.
							</p>
							<p class="flex flex-row">
								<img src="https://i.imgur.com/BewOHTr.png" alt="pointer" class="mr-1 size-4" /> Merchandise:
								Stickers, keychain, pins, apparel, prints etc.
							</p>
							<p class="ml-4 flex flex-row items-center text-xs text-translucent">
								<img src="https://i.imgur.com/noUP00a.png" alt="sub info" class="mr-1 size-2" /> Royalty
								contract is required for merchandise.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="align-center m-1 flex flex-col justify-start px-20 text-left text-lg max-md:px-3">
	<hr class="my-4 w-full border-translucent" />
	
	<div class="w-11/12 text-justify">
		<p class="mb-3 mt-1 flex w-full text-3xl font-black tracking-widest text-pink">REVIEWS</p>
	</div>

	<div class="w-full">
		<Masonry {items} minColWidth={400} maxColWidth={600} gap={20} class="w-full">
			{#snippet children({ item })}
				<Review image={item.image} name={item.name} link={item.link}>
					<p>
						{item.review}
					</p>
				</Review>
			{/snippet}
		</Masonry>
	</div>
</div>

<GoToTop showAtPixel={800} />
