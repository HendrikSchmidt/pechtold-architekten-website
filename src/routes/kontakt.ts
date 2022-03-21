import { variables } from '$lib/variables';

export async function get() {
    const response = await fetch(`${variables.apiPath}/kontakt`);
    const contact = await response.json();

    if (contact) {
        return {
            body: { contact }
        };
    }

    return {
        status: 404
    };
}
