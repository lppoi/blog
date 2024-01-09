export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@nuxtjs/color-mode",
    "nuxt-lodash"
  ],
  app: {
    head: {},
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
})
