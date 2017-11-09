module.exports = {
  parser: 'babel-eslint',
  extends: ['standard', 'plugin:react/recommended', 'prettier', 'plugin:jsx-a11y/recommended', 'plugin:import/recommended'],
  plugins: ['react', 'jest', 'jsx-a11y'],
  env: {
    'jest/globals': true
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline']
  }
}