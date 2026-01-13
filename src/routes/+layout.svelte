<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<div class="bg-pink-900 p-4 border-2">
	<h1 class="text-3xl">Root Layout</h1>
	<nav class="my-2 bg-amber-600 p-2">
		<ul class="gap-2 flex">
			<li>
				<a href="/">Home</a>
				<a href="/about">About</a>
			</li>
		</ul>
	</nav>

	{@render children()}
</div>
