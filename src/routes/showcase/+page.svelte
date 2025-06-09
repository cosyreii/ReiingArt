<script lang="ts">
	import Review from '$lib/components/review.svelte';
</script>

<svelte:head>
	<title>Reii | Showcase</title>
</svelte:head>

<div
	class="noscrollbar align-center m-1 my-4 flex flex-col justify-start overflow-y-scroll px-20 text-left text-lg max-md:px-3"
>
	<div class="grid grid-cols-4  max-lg:grid-cols-3 max-md:grid-cols-1">
		<img src="https://i.imgur.com/5HpQOMu.png" class="mb-2 w-72" alt="cosyreii logo" />
		<img src="https://i.imgur.com/tQWb9zt.png" class="mb-2 w-72" alt="butterfly" />
		<img src="https://i.imgur.com/uqh6nuJ.png" class="mb-2 w-72" alt="sword" />
		<img src="https://i.imgur.com/BhgWbzb.png" class="mb-2 w-72" alt="plague scythe" />
		<img src="https://i.imgur.com/hG3YPAh.png" class="mb-2 w-72" alt="soupspoon logo" />
		<img src="https://i.imgur.com/fbBqyD6.png" class="mb-2 w-72" alt="stride 2025 namecard" />
		<img src="https://i.imgur.com/rkyf01m.png" class="mb-2 w-72" alt="poxial emotes" />
	</div>

	<hr class="my-4 w-full border-translucent" />

	<div class="w-11/12 text-justify">
		<p class="mb-3 mt-1 flex w-full text-3xl font-black tracking-widest text-pink">REVIEWS</p>
	</div>

	<div class="grid grid-cols-3 px-2 max-lg:grid-cols-2 max-md:grid-cols-1">
		<Review
			image="https://pbs.twimg.com/profile_images/1650273413179789312/_Xjjz9QH_400x400.jpg"
			name="Poxial"
			link="https://www.youtube.com/@Poxial"
		>
			<p>
				She went above and beyond and created a bunch of cute little emotes that me and my community
				adore! 🙂
			</p>
		</Review>

		<Review
			image="https://pbs.twimg.com/profile_images/1832050112169648128/6mtK3lcS_400x400.jpg"
			name="WylieCantTwitch"
			link="https://www.twitch.tv/wyliecanttwitch"
		>
			<p>
				Reii is a fantastic option who never ceases to provide S tier quality work! She even shares
				the interest in the work she's commissioned with :&#41;
			</p>
		</Review>

		<Review image="https://i.imgur.com/6RPWzpB.png" name="Yukihara" link="/unavailable">
			<p>
				I had only vague ideas but she stayed patient and put it into practice way better than I
				thought it could turn out.
			</p>
		</Review>

		<Review
			image="https://i.imgur.com/sw6z73g.png"
			name="Kwondor"
			link="https://www.twitch.tv/kwondor"
		>
			<p>
				Reii is not only incredibly talented but also a joy to work with, refusing to rest until her
				clients are 100% satisfied.
			</p>
		</Review>

		<Review
			image="https://i.imgur.com/uzyoIZC.png"
			name="smolminy"
			link="https://www.twitch.tv/smolminy"
		>
			<p>
				Extremely patient and attentive with me which is super important as I am an individual with
				a few disabilities. Super accommodating.
			</p>
		</Review>
	</div>
</div>
