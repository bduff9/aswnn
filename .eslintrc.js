module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: [
		'@typescript-eslint',
		'import',
		'prettierx',
		'svelte3',
	],
	settings: {
		prettierx: {
			usePrettierrc: true,
		},
	},
	overrides: [{
		files: ['*.svelte'],
		processor: 'svelte3/svelte3'
	}],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/typescript',
		'plugin:import/warnings',
		'plugin:prettierx/@typescript-eslint',
		'plugin:prettierx/standardx',
		'plugin:you-dont-need-momentjs/recommended',
	],
	rules: {
		'prettierx/options': [
			2,
			{
				alignObjectProperties: false,
				jsxSingleQuote: false,
				semi: true,
				singleQuote: true,
				spaceBeforeFunctionParen: true,
				trailingComma: 'all',
				useTabs: true,
			},
		],
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
		'import/named': 2,
		'import/order': ['error', {
			'newlines-between': 'always'
		}],
		'import/no-unresolved': ['warn'],
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
