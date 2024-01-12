module.exports = {
  root: true,
  env: {
    browser: true,
    node: 1
  },
  extends: [
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  rules: {
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'vue/no-multiple-template-root': 'off',
    'no-undef': 'off',
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'off',
  }
}
