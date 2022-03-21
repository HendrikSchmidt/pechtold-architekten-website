const dev = process.env.NODE_ENV === 'development';

export const variables = {
    apiPath: dev ? 'http://localhost:1337/api' : 'https://pechtold-architekten-cms.herokuapp.com/api',
};
