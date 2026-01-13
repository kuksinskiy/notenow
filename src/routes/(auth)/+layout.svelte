<script lang="ts">
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
</script>

<div class="bg-green-900 p-4">
	<h1>(auth) Layout</h1>
	{@render children()}
</div>
