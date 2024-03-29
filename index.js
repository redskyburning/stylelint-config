'use strict';

module.exports = {
	extends: 'stylelint-config-standard',
	rules: {
		'indentation': 'tab',
		'function-name-case': null,
		'number-leading-zero': 'never',
		'declaration-colon-space-after': null,
		'at-rule-no-unknown': null,
		'declaration-no-important': true,
		'scss/dollar-variable-colon-space-before': 'never',
		'scss/at-rule-no-unknown': true,
		'scss/dollar-variable-pattern': /^[a-z][a-z0-9]+(-[a-z0-9]+)*$/, // Kebab case
		'string-quotes': 'single',
		"scale-unlimited/declaration-strict-value": [
			["/color$/", "z-index", "font-size"],
			{
				ignoreValues: {
					"/color$/": [
						'transparent',
						'inherit',
					],
				}
			},
		],
	},
	plugins: [
		'stylelint-scss',
		'stylelint-declaration-strict-value',
	],
};
