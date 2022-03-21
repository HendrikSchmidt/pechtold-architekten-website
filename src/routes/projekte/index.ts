import { variables } from '$lib/variables';

export async function get() {
    const response = await fetch(`${variables.apiPath}/projekte?populate=*`);
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
