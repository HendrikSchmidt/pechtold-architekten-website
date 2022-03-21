import { sluggify } from "./utils";

const dev = process.env.NODE_ENV === 'development';
const apiPath = dev ? 'http://localhost:1337/api' : 'https://pechtold-architekten-cms.herokuapp.com/api';

const getSlugsToIdsMapping = async () => {
    const response = await fetch(`${apiPath}/projekte`);
    const projects = await response.json();
    const slugsToIds = {};
    projects.data.forEach(project => slugsToIds[sluggify(project.attributes.Titel)] = project.id);
    return slugsToIds;
}

export const variables = {
    apiPath,
    slugsToIds: getSlugsToIdsMapping(),
};
