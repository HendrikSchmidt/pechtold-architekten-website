import { variables } from '$lib/variables';

export async function load() {
	const response = await fetch(
		`${variables.apiPath}/startseite?populate[Projekte][populate][0]=Fotos`
	);
	const homepageData = await response.json();

	if (homepageData) {
		return {
			contact: homepageData.data.attributes.Kontakt,
			projects: homepageData.data.attributes.Projekte.data,
		};
	};

	return {
		status: 404,
	};
}
