import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		files: {
			assets: 'static',
		},

		paths: {
			base: dev ? '' : '/pechtold-architekten-website',
		},

		prerender: {
			default: true,
		},
	},
};

export default config;
