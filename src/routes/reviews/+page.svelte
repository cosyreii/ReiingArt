<script lang="ts">
	import NorthEast from '$lib/components/northeast.svelte';
</script>

<svelte:head>
	<title>Reviews (Temp Layout)</title>
</svelte:head>

<div class="flex h-[14rem] w-[41rem] items-center justify-center rounded-3xl bg-pale m-2">
	<div
		class="h-[13rem] w-[40rem] rounded-3xl border-2 border-dashed border-grey bg-pale text-[#171515]"
	>
		<div class="m-3 flex flex-row">
			<div class="flex w-[19rem] items-start justify-start">
				<img
					src="https://pbs.twimg.com/profile_images/1650273413179789312/_Xjjz9QH_400x400.jpg"
					class="size-14 rounded-full border-2 border-solid border-pink p-[0.1rem]"
					alt="Content Creator, Poxial"
				/>
			</div>

			<div class="ml-2 mr-4 flex flex-col">
				<div class="flex flex-row items-center text-pink hover:underline">
					<a href="https://www.youtube.com/@Poxial" target="_blank">
						<p class="PFP mr-2 text-xl text-pink hover:scale-[1.005]">Poxial</p>
					</a>
					<a href="https://www.youtube.com/@Poxial" target="_blank">
						<NorthEast class="PFP justify-end" />
					</a>
				</div>
				<p class="text-justify">
					I commissioned Reii to make some emotes for my discord server and YouTube channel. She
					went above and beyond and created a bunch of cute little emotes that me and my community
					adore! Reii is super talented, you'd be silly not to commission her artwork! She is also
					so easy to communicate with and such a lovely person 🙂 GET YOUR COMMISSIONS IN ASAP!!
				</p>
			</div>
		</div>
	</div>
</div>

<div class="flex h-[25rem] w-[41rem] items-center justify-center rounded-3xl bg-pale m-2">
	<div
		class="h-[24rem] w-[40rem] rounded-3xl border-2 border-dashed border-grey bg-pale text-[#171515]"
	>
		<div class="m-3 flex flex-row">
			<div class="flex w-[30rem] items-start justify-start">
				<img
					src="https://pbs.twimg.com/profile_images/1832050112169648128/6mtK3lcS_400x400.jpg"
					class="size-14 rounded-full border-2 border-solid border-pink p-[0.1rem]"
					alt="Content Creator, Poxial"
				/>
			</div>

			<div class="ml-2 mr-4 flex flex-col">
				<div class="flex flex-row items-center text-pink hover:underline">
					<a href="https://www.twitch.tv/wyliecanttwitch" target="_blank">
						<p class="PFP mr-2 text-xl text-pink hover:scale-[1.005]">WylieCantTwitch</p>
					</a>
					<a href="https://www.twitch.tv/wyliecanttwitch" target="_blank">
						<NorthEast class="PFP justify-end" />
					</a>
				</div>
				<p class="text-justify">
					After years of working on projects with dozens of independent artists, my best experience
					has been with Reii. Her commission work is fairly priced and of high quality. Reii is easy
					to talk to and workshop ideas with, and she always dawns a friendly, warm demeanor that
					makes the commission process genuinely enjoyable and exciting! She's never failed to meet
					any of my deadlines, and has made revisions and changes when requested. What I found to be
					the icing on the cake is that Reii shares the interest in her work she's get gets
					commissioned, and strives to make sure that I'm always satisfied with the final product.
				</p>
				<p class="mt-2 text-justify">
					To anyone seeking to commission anything from a ginormous collage to a small set of
					emotes, Reii is a fantastic option who never ceases to provide S tier quality work, and is
					a joy to work with :&#41;
				</p>
				<p class="mt-2 text-justify">- Mr Wylie</p>
			</div>
		</div>
	</div>
</div>

<style>
	.PFP:hover {
		cursor: pointer;
	}
</style>
