import { variables } from '$lib/variables';

export async function get() {
    const response = await fetch(`${variables.apiPath}/buero`);
    const office = await response.json();

    if (office) {
        return {
            body: { office }
        };
    }

    return {
        status: 404
    };
}
