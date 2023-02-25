// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxt/image-edge",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
  ],

  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  googleFonts: {
    families: { Rubik: [500] },
  },
  build: {},
});
