// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/seo'
  ],

  components: [
    { path: '~/components/home', pathPrefix: false },
    { path: '~/components/layout', pathPrefix: false },
    { path: '~/components/ui', pathPrefix: false },
    '~/components'
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      }
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  site: {
    url: 'https://visonext.farouk.uk',
    name: 'VisoNext Corporation',
    description: 'Innovative solutions for modern businesses. Transform your business with cutting-edge technology and expert consulting.',
    defaultLocale: 'en'
  }
})
