module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'string-quotes': 'single',
    'font-family-name-quotes': 'always-unless-keyword',
    // 'value-keyword-case': { camelCaseSvgKeywords: true },
  },
}
