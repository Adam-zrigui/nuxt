// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
modules:[
"@nuxtjs/tailwindcss",
],

css: [
  '@/assets/css/main.css',
],
  devtools: { enabled: true },
  devServer:{
    port:3000
  },

})
