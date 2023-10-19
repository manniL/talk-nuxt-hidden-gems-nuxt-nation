// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    presets: [
      {
        from: 'date-fns/addDays',
        imports: [
          { name: 'default', as: 'addDays' }
        ]
      }
    ]
  },

  experimental: {
    typedPages: true
  },


  // Just some CSS imports + devtools from here
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css'}
      ]
    }
  },
  devtools: { enabled: true }
})
