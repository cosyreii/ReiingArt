<script lang="ts">
	import type { Snippet } from 'svelte';
	import NorthEast from '$lib/components/northeast-plane.svelte';
	let props = $props<{
		image: string;
		name: string;
		link: string;
		children: Snippet;
	}>();
</script>

<div class="m-2 flex h-fit items-center justify-center rounded-3xl bg-pale p-1 hover:scale-[1.01]">
	<div class="rounded-3xl border-4 border-dashed border-red text-[#171515]">
		<div class="m-3 flex flex-row max-md:flex-col">
			<div class="flex flex-shrink-0 items-start justify-start">
				<img
					src={props.image}
					class="size-14 rounded-full border-2 border-solid border-red p-[0.1rem]"
					alt="User Profile"
				/>
			</div>

			<div class="ml-2 mr-4 flex w-full flex-col">
				<a
					class="flex cursor-pointer flex-row items-center text-red hover:underline"
					href={props.link}
					target="_blank"
				>
					<p class="mr-2 text-xl text-red hover:scale-[1.005]">{props.name}</p>

					<NorthEast class="justify-end" />
				</a>
				<div>
					{@render props.children()}
				</div>
			</div>
		</div>
	</div>
</div>
