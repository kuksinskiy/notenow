<script lang="ts">
	import { page } from '$app/state';
	import type { PageProps } from './$types';
	import { POSTS_PER_PAGE } from '$lib/constants';

	let { data }: PageProps = $props();

	let currentPage = $derived(+(page.url.searchParams.get('page') ?? 1));
	$inspect(currentPage);
</script>

<div class="px-4 py-8 container mx-auto">
	<section class="mb-16 text-center">
		<h1 class="mb-3 text-4xl font-bold md:text-5xl">{data.title}</h1>
	</section>

	<div class="mb-4 gap-2 flex justify-center">
		{#if currentPage > 1}
			<a href="/blog?page={currentPage - 1}" class="join-item btn btn-outline">Previous page</a>
		{/if}
		{#if Math.ceil(data.posts.total / POSTS_PER_PAGE) !== currentPage}
			<a href="/blog?page={currentPage + 1}" class="join-item btn btn-outline">Next</a>
		{/if}
	</div>
	<div class="gap-4 md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1">
		{#each data.posts.posts as post}
			<data.component {post} />
		{/each}
	</div>

	<div class="mt-4 gap-2 flex justify-center">
		{#if currentPage > 1}
			<a href="/blog?page={currentPage - 1}" class="join-item btn btn-outline">Previous page</a>
		{/if}
		{#if Math.ceil(data.posts.total / POSTS_PER_PAGE) !== currentPage}
			<a href="/blog?page={currentPage + 1}" class="join-item btn btn-outline">Next</a>
		{/if}
	</div>
</div>
