import { variables } from '$lib/variables';
import { sluggify } from '$lib/utils';

export async function load({ params }) {
	const slugsToIds = await variables.categorySlugsToIds;
	const response = await fetch(
		`${variables.apiPath}/kategorien/${
			slugsToIds[sluggify(params.categorySlug)]
		}?populate[Projekte][populate][0]=Fotos&pagination[pageSize]=100`
	);
	const category = await response.json();

	if (category) {
		return {
			projects: category.data.attributes.Projekte.data,
		};
	}

	return {
		status: 404,
	};
}
