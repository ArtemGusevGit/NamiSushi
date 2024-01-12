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
    '@typescript-eslint/no-unused-vars': 'error',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1
        },
        multiline: {
          max: 1
        }
      }
    ]
  }
}
