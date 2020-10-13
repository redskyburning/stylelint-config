"use strict";

module.exports = {
	extends: 'stylelint-config-standard',
	rules: {
		'indentation': 'tab',
		'function-name-case': null,
		'number-leading-zero': 'never',
		'declaration-colon-space-after': null,
		'at-rule-no-unknown': null,
		'scss/dollar-variable-colon-space-before': 'never',
	},
	plugins: [
		'stylelint-scss',
	],
};
