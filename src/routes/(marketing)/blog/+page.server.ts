import type { PageServerLoad } from './$types';

export const load = (async ({ parent }) => {
	
	const parentData = await parent();
	console.log(parentData);

	console.log('🌍 Blog Route Server Load');
	return {
		title: 'The Blog',
		count: 10
	};
}) satisfies PageServerLoad;
