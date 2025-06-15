<script>
	import GoToTop from '$lib/components/go-to-top.svelte';
</script>

<svelte:head>
	<title>Reii | Gallery</title>
</svelte:head>

<div
	class="noscrollbar align-center m-1 my-4 flex flex-col justify-center overflow-y-scroll px-20 text-left text-lg max-md:items-center max-md:px-3"
>
	<div class="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-1">
		<img src="https://i.imgur.com/4fIBkTn.png" class="mb-2 w-72" alt="cosyreii logo" />
		<img src="https://i.imgur.com/fbBqyD6.png" class="mb-2 w-72" alt="stride 2025 namecard" />
		<img src="https://i.imgur.com/uqh6nuJ.png" class="mb-2 w-72" alt="sword" />
		<img src="https://i.imgur.com/BhgWbzb.png" class="mb-2 w-72" alt="plague scythe" />
		<img src="https://i.imgur.com/tQWb9zt.png" class="mb-2 w-72" alt="butterfly" />
		<img src="https://i.imgur.com/qKLKYlH.png" class="mb-2 w-72" alt="cosyreii" />
		<img src="https://i.imgur.com/hG3YPAh.png" class="mb-2 w-72" alt="soupspoon logo" />
		<img src="https://i.imgur.com/US3BGdd.png" class="mb-2 w-72" alt="poxial emotes" />
		<img src="https://i.imgur.com/7Uh4P9I.png" class="mb-2 w-72" alt="dupcup 1" />
		<img src="https://i.imgur.com/92SQ8Aa.png" class="mb-2 w-72" alt="noctovilia suchi" />
		<img src="https://i.imgur.com/PnB042t.png" class="mb-2 w-72" alt="noctovilia details" />
		<img src="https://i.imgur.com/Yk58REc.png" class="mb-2 w-72" alt="duffy" />
		<img src="https://i.imgur.com/5L9Kr5g.png" class="mb-2 w-72" alt="levhanni" />
	</div>
</div>

<GoToTop showAtPixel={800} />
