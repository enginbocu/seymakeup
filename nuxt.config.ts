// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: [
    '~/public/assets/scss/Main.scss',
    'bootstrap/dist/css/bootstrap.min.css'
  ],
  plugins: [
    '~/plugins/swiper.client.ts',
    '~/plugins/element-plus.client.ts',
    '~/plugins/bootstrap.client.ts'
  ],
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets'
  }
})
