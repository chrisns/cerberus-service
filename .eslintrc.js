module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:cypress/recommended',
  ],
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'babel',
    'filenames',
    'import',
    'jest',
    'jsx-a11y',
    'react',
    'react-hooks',
  ],
  rules: {
    'array-callback-return': 'off',
    'arrow-body-style': 'off',
    'consistent-return': 'off',
    'func-names': ['error', 'never'],
    'max-len': ['error', { code: 185, ignoreTemplateLiterals: true, ignoreStrings: true }],
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-syntax': 'off',
    'object-curly-newline': ['error', { consistent: true }],
    'import/no-unresolved': 'off',
    'prefer-const': 'off',
    'prefer-destructuring': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/button-has-type': 'off',
    'react/display-name': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
  overrides: [
    // Unit tests
    {
      files: ['*.test.js'],
      rules: {
        'jest/valid-expect': 'off',
        'jest/valid-expect-in-promise': 'off',
        'no-unused-expressions': 'off',
        'quote-props': 'off',
        'no-console': 'off',
      },
    },
    // Cypress tests
    {
      files: ['*.spec.js', 'commands.js', 'index.js', 'cypress_runner.js'],
      rules: {
        'jest/valid-expect': 0,
        'jest/valid-expect-in-promise': 0,
        'jest/no-standalone-expect': 'off',
        'no-unused-expressions': 'off',
        'quote-props': 'off',
        'cypress/no-unnecessary-waiting': 'off',
        'no-console': 0,
      },
    },
  ],
};
