import { variables } from '$lib/variables';
import { sluggify } from '$lib/utils';

export async function get({ params }) {
    const slugsToIds = await variables.slugsToIds;
    const response = await fetch(`${variables.apiPath}/projekte/${slugsToIds[sluggify(params.slug)]}`);
    const project = await response.json();

    console.log(slugsToIds)
    console.log(sluggify(params.slug))

    if (project) {
        return {
            body: { project }
        };
    }

    return {
        status: 404
    };
}
