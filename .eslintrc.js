module.exports = {
  extends: ['eslint:recommended'],
  rules: {
    semi: ['error', 'never'],
    'no-console': 0
  },
  parserOptions: {
    "ecmaVersion": 5,
  },
  env: {
    browser: true,
    node: true,
    jest: true
  }
}