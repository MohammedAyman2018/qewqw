// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/index.scss'],
  modules: ['nuxt-icon', '@pinia/nuxt', '@nuxtjs/critters', 'dayjs-nuxt'],

  plugins: [{ src: '~/plugins/ofetch.ts', mode: 'client' }],
});
