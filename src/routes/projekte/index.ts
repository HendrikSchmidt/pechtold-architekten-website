import { variables } from '$lib/variables';

export async function get() {
    const response = await fetch(`${variables.apiPath}/projekte`);
    const projects = await response.json();

    if (projects) {
        return {
            body: { projects }
        };
    }

    return {
        status: 404
    };
}
