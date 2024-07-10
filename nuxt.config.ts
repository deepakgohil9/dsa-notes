// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  extends: ['shadcn-docs-nuxt'],
  compatibilityDate: '2024-07-06',
  content: {
    highlight: {
      langs: [
        'c',
        'cpp',
        'shell',
        'bash'
      ]
    }
  },
  css: ['~/assets/css/custom.css']
});