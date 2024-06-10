import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'eClass - Learning Platform',
      meta: [
        {
          name: 'description',
          content:
            'eClass is a dynamic online learning hub tailored for the Nigerian student. Our platform is the brainchild of educators, tech enthusiasts, and professionals who recognized the need for a comprehensive and accessible educational resource. What started as an idea has evolved into a thriving community dedicated to shaping the future of education.'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'og:title', content: 'eClass - Learning Platform' },
        {
          name: 'og:description',
          content:
            'eClass is a dynamic online learning hub tailored for the Nigerian student. Our platform is the brainchild of educators, tech enthusiasts, and professionals who recognized the need for a comprehensive and accessible educational resource. What started as an idea has evolved into a thriving community dedicated to shaping the future of education.'
        },
        { name: 'og:image', content: 'https://cdn.eclass.ng/logo/eclass-square.png' },
        { name: 'og:url', content: 'https://eclass.ng' },
        { name: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        // Twitter
        { name: 'twitter:title', content: 'eClass - Learning Platform' },
        {
          name: 'twitter:description',
          content:
            'eClass is a dynamic online learning hub tailored for the Nigerian student. Our platform is the brainchild of educators, tech enthusiasts, and professionals who recognized the need for a comprehensive and accessible educational resource. What started as an idea has evolved into a thriving community dedicated to shaping the future of education.'
        },
        { name: 'twitter:image', content: 'https://cdn.eclass.ng/logo/eclass-square.png' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.svg'
        }
      ]
    },
    buildAssetsDir: 'eclass'
  },

  // SSR
  ssr: true,

  // Vuetify
  build: {
    transpile: ['vuetify']
  },

  modules: [
    '@nuxtjs/google-fonts',
    /* (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    } */
    // Vuetify
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        // @ts-expect-error
        config.plugins.push(vuetify())
      })
    }
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },

  // Run time config
  runtimeConfig: {
    apiUrl: process.env.API_URL || '',
    apiKey: process.env.API_KEY || ''
  },

  nitro: {
    awsAmplify: {
      // catchAllStaticFallback: true,
      // imageOptimization: { "/_image", cacheControl: "public, max-age=3600, immutable" },
      // imageSettings: { ... },
    }
  },

  typescript: {
    typeCheck: true
  },

  // Google Fonts
  googleFonts: {
    families: {
      Lato: {
        wght: [400, 700, 900]
      },
      Poppins: {
        wght: [400, 500, 600, 700, 800, 900]
      }
    },
    download: false,
    useStylesheet: true
  },

  devtools: { enabled: true }
})
