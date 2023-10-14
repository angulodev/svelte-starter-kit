<script>
	import { IconHeart, IconBrandSvelte } from '@tabler/icons-svelte';
</script>

<div class="flex">
	<IconHeart size={48} stroke={1} />
	<h1 class="text-3xl font-bold underline">Hello world!</h1>
	<IconBrandSvelte size={48} stroke={1} />
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
