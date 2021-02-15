const sveltePreprocess = require('svelte-preprocess');
module.exports = {
	preprocess: sveltePreprocess({
		scss: {
			includePaths: ['scss', 'src'],
		},
		postcss: {
			plugins: [require('autoprefixer')],
		},
	}),
};
