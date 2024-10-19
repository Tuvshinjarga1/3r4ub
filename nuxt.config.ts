// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/nuxt",
    "nuxt-headlessui",
    "@morev/vue-transitions/nuxt",
  ],

  tailwindcss: { exposeConfig: true },
  headlessui: { prefix: "H" },

  app: {
    head: {
      title: "Analytics",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/icon.svg" },
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "preconnect", href: "https://rsms.me/" },
      ],
    },
    baseURL: process.env.NODE_ENV === 'production' ? '/3r4ub/' : '/',
  },

  compatibilityDate: "2024-07-09",
});
