import type { RequestHandler } from '@sveltejs/kit';
import { json, error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ fetch }) => {
	const postsRes = await fetch('https://dummyjson.com/posts');
	const postResJson = await postsRes.json();

	return json(postResJson, { status: postsRes.status });
	// return new Response(JSON.stringify({ message: 'error' }), { status: 401 });
	// return error(401, 'Error');
};

export const POST: RequestHandler = async ({ request }) => {
	const post = await request.json();
	// console.log(post);

	if (!post.title) {
		error(400, 'Post title is required');
	}

	return json({ id: crypto.randomUUID(), title: post.title });
};
