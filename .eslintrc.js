module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['emotion', 'react-hooks'],
  rules: {
    // 'emotion/jsx-import': 'error',
    'emotion/no-vanilla': 'error',
    'emotion/import-from-emotion': 'error',
    'emotion/styled-import': 'error',
    'emotion/syntax-preference': ['error', 'string'],
    'import/prefer-default-export': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
  },
};
