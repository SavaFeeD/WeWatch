require('dotenv').config();
export default {
  ssr: false,

  target: 'static',

  head: {
    title: 'WeWatch',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@/assets/scss/main.scss',
  ],

  plugins: [
    { src: '@plugins/main.js' },
    { src: '@plugins/vee-validate.js' },
    { src: '@plugins/injectComponents.js' },
    { src: '@plugins/axios.js' },
    { src: '@plugins/vue-clipboard.js' },
    { src: '~/mixins/global.js' },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    '@nuxtjs/color-mode',
    '@nuxtjs/composition-api/module',
  ],

  styleResources: {
    scss: ['./assets/scss/resourses.scss'],
  },

  modules: [
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
    'nuxt-i18n',
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
  ],

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL,
  },

  build: {
    transpile: [
      'vee-validate/dist/rules',
    ],
  },

  env: {
    baseUrl: process.env.BASE_URL,
  },
}
