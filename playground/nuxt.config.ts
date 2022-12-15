import { defineNuxtConfig } from 'nuxt/config'
import MyModule from '..'

export default defineNuxtConfig({
  modules: [
    MyModule, '@unocss/nuxt'
  ],
  myModule: {
    addPlugin: true
  },
  vite: {
    define: {
      'process.env.DEBUG': 'false',
    },
  },
  vueuse: {
    ssrHandlers: true,
  },
  unocss: {
    preflight: true,
  },
})
