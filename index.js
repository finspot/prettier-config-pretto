module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  plugins: ['@prettier/plugin-php', '@trivago/prettier-plugin-sort-imports'],
  printWidth: 120,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  // @prettier/plugin-php
  phpVersion: '7.4',
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
