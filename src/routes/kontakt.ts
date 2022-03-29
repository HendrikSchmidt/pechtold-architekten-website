import { variables } from '$lib/variables';

export async function get() {
	const response = await fetch(`${variables.apiPath}/kontakt`);
	const contactData = await response.json();

	if (contactData) {
		return {
			body: { contact: contactData.data.attributes },
		};
	}

	return {
		status: 404,
	};
}
