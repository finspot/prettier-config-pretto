module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  printWidth: 120,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  // @trivago/prettier-plugin-sort-imports
  importOrder: [
    '^@pretto/bricks/(.*)$',
    '^@pretto/zen/(.*)$',
    '^@pretto/app-core/(.*)$',
    '^@pretto/picto/(.*)$',
    '^@pretto/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^../(.*(?!(css)))$',
    '^./(.*)$',
    '^(?![.]).*(.css)$',
    '^.*(.css)$',
  ],
  importOrderSeparation: true,
}
