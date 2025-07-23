<script lang="ts">
	import GoToTop from '$lib/components/go-to-top.svelte';
</script>

<svelte:head>
	<title>Arkadia 2025</title>
</svelte:head>

<div class="align-center my-4 flex flex-col justify-start px-20 text-left text-lg max-md:px-3">
	<div class="flex flex-row">
		<p class="flex w-full text-3xl font-black tracking-widest text-pink">
			ARKADIA 2025 | Asia Pacific University
		</p>
		<div class="flex gap-2">
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3PdXi5lRLHz7ux6Ps3dZKygHcBkfHMsYRJA&s"
				class="size-16 rounded-xl"
				alt="apu logo"
			/>
		</div>
	</div>

	<div class="mt-2 flex flex-row max-lg:flex-col">
		<img
			src="https://i.imgur.com/GrX2nHo.jpeg"
			class="h-[33rem] w-[43rem] rounded-3xl object-cover object-top"
			alt="Audrey"
		/>
		<div class="m-2 mx-8 flex w-full flex-col">
			<div class="mb-4 mt-2 flex flex-col items-center justify-center">
				<p class="text-3xl font-black text-pink">Audrey NJX</p>
				<p class="text-xl font-bold">Diploma in Design and Media (UCDF2308DSM)</p>
			</div>

			<div
				class="my-2 flex w-auto items-center justify-center rounded-3xl border-2 border-dashed border-[#FFC130] bg-[#ffc13013] text-[#FFC130]"
			>
				<div class="flex w-fit flex-col items-start justify-start p-4">
					<p>Specialising in Animation, Illustration, and Design.</p>
					<p class="ml-20">— Fueled by candy, chaos, and the occasional existential crisis.</p>
				</div>
			</div>

			<p class="mb-1 mt-6 flex items-center justify-center text-2xl font-black text-pink">
				2D Animated Advertisement: JUICED!
			</p>
			<div class="flex flex-col items-center justify-center">
				<p>
					A playful fruit dance leads to an explosive transformation, giving birth to the juice you
					know and love!
				</p>

				<div class="flex w-10/12 flex-row items-center justify-center">
					<img
						src="https://i.imgur.com/OEUWCQV.png"
						class="my-4 w-[28rem] rounded-3xl object-cover"
						alt="zestie logo"
					/>
					<p class="ml-4 text-center text-translucent">
						JUICED! is a vibrant, cartoon-style 2D animated advertisement created for the fictional
						brand “Zestie”.
					</p>
				</div>

				<p>
					<span class="font-bold">GOAL</span> : To encourage drinking ( natural ) fruit juice instead
					of overly sweet beverages such as soda.
				</p>
			</div>
		</div>
	</div>
	<div class="mt-6 flex flex-row">
		<div class="m-2 flex w-1/3 flex-col justify-center">
			<div class="flex flex-col items-center justify-center">
				<p class="text-2xl font-black text-pink">Softwares</p>
				<div class="flex flex-row">
					<img src="https://i.imgur.com/h4AEg0K.png" class="mr-2 size-6" alt="CSP" />
					<p class="text-xl">Clip Studio Paint Ex</p>
				</div>
				<div class="flex flex-row">
					<p class="text-xl">Adobe After Effects</p>
					<img src="https://i.imgur.com/hPKoqBX.png" class="ml-2 size-6" alt="CSP" />
				</div>

				<iframe
					src="https://www.youtube.com/embed/a4Y0Hiz27Lw?si=0nJAuuu2xeq_uL5s"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
					class="mt-8 h-[180px] w-[320px] rounded-3xl"
				></iframe>
				<p class="text-translucent">Shortform Advertisement (15s)</p>
			</div>
		</div>
		<iframe
			src="https://www.youtube.com/embed/a4Y0Hiz27Lw?si=0nJAuuu2xeq_uL5s"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
			class="h-[480px] w-[854px] rounded-3xl"
		></iframe>
	</div>
</div>

<GoToTop showAtPixel={800} />
