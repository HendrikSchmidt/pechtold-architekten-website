import { variables } from '$lib/variables';

export async function get() {
	const response = await fetch(`${variables.apiPath}/startseite?populate=*`);
	const homepageData = await response.json();

	if (homepageData) {
		return {
			body: { homepage: homepageData.data.attributes },
		};
	}

	return {
		status: 404,
	};
}
