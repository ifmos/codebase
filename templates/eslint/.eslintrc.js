module.exports = {
  extends: ['eslint:recommended'],
  rules: {
    semi: ['error', 'never']
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