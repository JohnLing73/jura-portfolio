// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  // future: {
  //   compatibilityVersion: 4
  // }
  // 16. modules > Tailwind
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],
  content: {
    highlight: {
      theme: {
        default: 'min-light',
        dark: 'min-dark'
      }
    }
  },
  // vid 23.就需要加的設定沒加到，補上
  // 沒這段的話，code block 有部分的字會沒有正確的 style
  colorMode: {
    classSuffix: ''
  },
  // vid 45. nuxt generate 時預產 sitemap
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})