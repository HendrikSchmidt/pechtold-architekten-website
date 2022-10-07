import { variables } from '$lib/variables';

export const prerender = true;

export async function load() {
	const response = await fetch(`${variables.apiPath}/projekte?populate=*&pagination[pageSize]=100`);
	const projects = await response.json();

	if (projects) {
		return {
			projects: projects.data,
		};
	}

	return {
		status: 404,
	};
}
