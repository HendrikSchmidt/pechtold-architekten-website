import { variables } from '../../lib/variables';
import { sluggify } from '../../lib/utils';

export async function get({ params }) {
    const slugsToIds = await variables.projectSlugsToIds;
    const response = await fetch(`${variables.apiPath}/projekte/${slugsToIds[sluggify(params.projectSlug)]}`);
    const project = await response.json();


    if (project) {
        return {
            body: { project }
        };
    }

    return {
        status: 404
    };
}
