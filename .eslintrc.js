module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:you-dont-need-momentjs/recommended',
	],
	overrides: [{
		files: ['*.svelte'],
		processor: 'svelte3/svelte3'
	}],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
    tsconfigRootDir: __dirname,
		project: './tsconfig.json',
		extraFileExtensions: ['.svelte'],
	},
	plugins: [
		'svelte3',
		'@typescript-eslint',
	],
	root: true,
	settings: {
		'svelte3/typescript': require('typescript'),
		// ignore style tags in Svelte because of Tailwind CSS
		// See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
		'svelte3/ignore-styles': () => true,
	},
	ignorePatterns: ['node_modules'],
	rules: {
		'linebreak-style': 'off',
		'no-console': 'off',
		'no-constant-condition': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				varsIgnorePattern: 'UU',
				args: 'none',
			},
		],
		'no-useless-catch': 'off',
		quotes: 'off',
		semi: ['error', 'always'],
		curly: ['error', 'multi-line'],
		'one-var': ['error', 'never'],
		'no-var': 'error',
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: '*',
				next: 'return',
			},
			{
				blankLine: 'always',
				prev: ['const', 'let', 'var'],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var'],
			},
			{
				blankLine: 'always',
				prev: ['block', 'block-like', 'if'],
				next: '*',
			},
			{
				blankLine: 'always',
				prev: '*',
				next: ['block', 'block-like', 'if'],
			},
			{
				blankLine: 'any',
				prev: 'export',
				next: '*',
			},
			{
				blankLine: 'any',
				prev: '*',
				next: 'export',
			},
		],
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/prefer-interface': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
	},
};
