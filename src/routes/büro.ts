import { variables } from '$lib/variables';

export async function get() {
	const response = await fetch(`${variables.apiPath}/buero`);
	const officeData = await response.json();

	if (officeData) {
		return {
			body: { office: officeData.data.attributes },
		};
	}

	return {
		status: 404,
	};
}
