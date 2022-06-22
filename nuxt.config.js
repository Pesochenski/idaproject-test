import { resolve } from 'path'

export default {
  head: {
    title: 'Test task',

    htmlAttrs: {
      lang: 'en',
    },

    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Test task for idaproject company',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],

    link: [
      {
        rel: 'dns-prefetch',
        href: 'https://fonts.googleapis.com/',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  alias: {
    '@': resolve(__dirname, './src'),
  },
  srcDir: 'src/',

  css: [
    '@/styles/index.scss',
  ],

  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxtjs/eslint-module',
  ],

  components: true,

  target: 'static',
  router: {
    base: '/idaproject-test/',
  },

  build: {
    loaders: {
      scss: {
        implementation: require('sass'),
      },
    },
  },
}
