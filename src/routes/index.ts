import { variables } from '$lib/variables';

export async function get() {
    const response = await fetch(`${variables.apiPath}/startseite?populate=*`);
    const homepage = await response.json();

    if (homepage) {
        return {
            body: { homepage }
        };
    }

    return {
        status: 404
    };
}
