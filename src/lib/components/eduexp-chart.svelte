<script lang="ts">
	import type { Snippet } from 'svelte';
	import NorthEast from '$lib/components/northeast-plane.svelte';
	let props = $props<{
		time: string;
		position: string;
	}>();
</script>

<div class="px-4 py-3 text-left">{props.time}</div>
<div class="px-4 py-3 text-left">{props.position}</div>
