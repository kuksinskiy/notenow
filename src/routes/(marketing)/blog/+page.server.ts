import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import type { PostsResponse } from '$lib/types'
import { POSTS_PER_PAGE } from '$lib/constants'

export const load = (async ({ fetch, url }) => {
	const page = +(url.searchParams.get('page') || 1)
	const SKIP = (page - 1) * POSTS_PER_PAGE
	const postsRes = await fetch(`https://dummyjson.com/posts?limit=${POSTS_PER_PAGE}&skip=${SKIP}`)
	if (!postsRes.ok) {
		error(postsRes.status, 'An error has occurred!')
	}

	console.log('🌍 Blog Route Server Load')
	return {
		title: 'The Blog',
		posts: (await postsRes.json()) as PostsResponse,
		postType: Math.random() > 0.5 ? 1 : 2
	}
}) satisfies PageServerLoad
