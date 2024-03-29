export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NamiSushi',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/main.scss', '~/assets/styles/_vars.scss', '~/assets/styles/_mixins.scss', '~/assets/styles/_fonts.scss'],

  styleResources: {
    scss: ['./assets/styles/_vars.scss', '~/assets/styles/_mixins.scss', '~/assets/styles/_fonts.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@plugins/vee-validate'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'vee-validate/dist/rules'
    ]
  },
  // router: {
  //   base: '/veevalidate-nuxtjs-sample/'
  // }
}
