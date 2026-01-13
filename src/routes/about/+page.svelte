<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();

	let name = $state('NoteNow');
</script>

<h1 class="text-4xl">About Page {name}</h1>

<style>
	h1 {
		color: var(--color-red-400);
	}
</style>
