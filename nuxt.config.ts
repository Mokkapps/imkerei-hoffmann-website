import siteMetadata from './app/siteMetadata'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro', 'nuxt-umami'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui'
  ],

  ui: {
    icons: ['heroicons', 'simple-icons']
  },

  routeRules: {
    // Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
    '/': { prerender: true }
  },

  runtimeConfig: {
    public: {
      googleMapsApiKey: ''
    }
  },

  devtools: {
    enabled: true
  },

  typescript: {
    strict: false
  },

  future: {
    compatibilityVersion: 4
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  compatibilityDate: '2024-07-11',

  image: {
    provider: 'twicpics',
    twicpics: {
      baseURL: siteMetadata.twicPicsBaseUrl
    },
    domains: ['mokkapps.twic.pics'],
    screens: { 'xs': 320, 'sm': 640, 'md': 768, 'lg': 1024, 'xl': 1280, 'xxl': 1536, '2xl': 1536 }
  },

  site: {
    url: siteMetadata.url,
    name: siteMetadata.title,
    description: siteMetadata.description,
    defaultLocale: 'de'
  }
})
