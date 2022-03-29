import { variables } from '$lib/variables';
import { sluggify } from '$lib/utils';

export async function get({ params }) {
	const slugsToIds = await variables.categorySlugsToIds;
	const response = await fetch(
		`${variables.apiPath}/kategorien/${
			slugsToIds[sluggify(params.categorySlug)]
		}?populate[Projekte][populate][0]=Fotos`
	);
	const category = await response.json();

	if (category) {
		return {
			body: { projects: category.data.attributes.Projekte.data },
		};
	}

	return {
		status: 404,
	};
}
