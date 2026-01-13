<script lang="ts">
	import { page } from '$app/state';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
</script>

<div class="bg-purple-700 p-4 border-2">
	<h1 class="mb-2 text-3xl">About Layout</h1>
	<div class="gap-4 flex">
		<div class="w-50 bg-amber-700">
			<nav class="p-2">
				<ul>
					<li class:underline={page.url.pathname === '/about'}>
						<a href="/about">About</a>
					</li>
					<li class:underline={page.url.pathname === '/about/team'}>
						<a href="/about/team">Team</a>
					</li>
				</ul>
			</nav>
		</div>
		<div class="flex-1">{@render children()}</div>
	</div>
</div>
