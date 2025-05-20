<script lang="ts">
	import Review from '$lib/components/review.svelte';
</script>

<svelte:head>
	<title>Reii | Showcase</title>
</svelte:head>

<div
	class="noscrollbar align-center m-1 flex flex-col justify-start overflow-y-scroll px-20 text-left text-lg max-md:px-3"
>
	<p class=" m-4 flex items-center justify-center">
		Illustrations, models, animations, websites ( Currently too lazy to import it here )
	</p>

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

		<Review
			image="https://i.imgur.com/6RPWzpB.png"
			name="Yukihara"
			link="https://www.reiing.art/unavailable"
		>
			<p>
				I had only vague ideas but she stayed patient and put it into practice way better than I
				thought it could
			</p>
		</Review>
	</div>
</div>
