import siteMetadata from './app/siteMetadata'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-10-01',

  css: ['~/assets/css/main.css'],

  devtools: {
    enabled: true,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  image: {
    domains: ['mokkapps.twic.pics'],
    provider: 'twicpics',
    screens: { '2xl': 1536, 'lg': 1024, 'md': 768, 'sm': 640, 'xl': 1280, 'xs': 320, 'xxl': 1536 },
    twicpics: {
      baseURL: siteMetadata.twicPicsBaseUrl,
    },
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/seo',
    'nuxt-umami',
  ],

  routeRules: {
    // Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
    '/': { prerender: true },
  },

  runtimeConfig: {
    public: {
      googleMapsApiKey: '',
    },
  },

  site: {
    defaultLocale: 'de',
    description: siteMetadata.description,
    name: siteMetadata.title,
    url: siteMetadata.url,
  },

  umami: {
    domains: ['privatimkerei-hoffmann.de'],
    ignoreLocalhost: true,
    proxy: 'cloak',
  },
})
