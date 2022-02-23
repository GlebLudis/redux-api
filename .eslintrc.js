module.exports = {
  globals: {
    NodeJS: true,
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 'off',
    'max-len': ['error', { code: 120, ignoreComments: true }],
    'import/no-unresolved': 'off',
    'import/extensions': ['warn', 'never'],
    'no-unused-vars': 'off',
    'no-param-reassign': 0,
    'no-shadow': 'off',
  },
};
