import { variables } from '$lib/variables';
import { sluggify } from '$lib/utils';

export async function load({ params }) {
	const slugsToIds = await variables.projectSlugsToIds;
	const response = await fetch(
		`${variables.apiPath}/projekte/${slugsToIds[sluggify(params.projectSlug)]}?populate=*`
	);
	const project = await response.json();

	if (project) {
		return {
			project: project.data.attributes,
		};
	}

	return {
		status: 404,
	};
}
