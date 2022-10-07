import { variables } from '$lib/variables';

export async function load() {
	const response = await fetch(`${variables.apiPath}/buero`);
	const officeData = await response.json();

	if (officeData) {
		return {
			office: officeData.data.attributes,
		};
	}

	return {
		status: 404,
	};
}
