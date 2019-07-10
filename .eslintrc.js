module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    curly: 0,
    'import/no-named-as-default': 0,
    'react/jsx-filename-extension': 0,
    'import/no-named-as-default-member': 0,
    'react/prop-types': ['error', { ignore: ['navigation'] }],
    'no-use-before-define': ['error', { variables: false }],
  },
};
