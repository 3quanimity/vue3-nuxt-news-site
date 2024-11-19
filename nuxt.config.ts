// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/node_modules/bootstrap/dist/css/bootstrap.min.css'],

  runtimeConfig: {
    // https://www.thenewsapi.com/documentation
    // TODO: should use apiSecret instead of hardcoding the token into the apiBase
    apiSecret: 'FtLRaK0ZATRDL2rtWjWDYriArlkAG8DoMVO7oPJy',

    public: {
      apiBase: 'https://api.thenewsapi.com/v1/news/top?locale=us&limit=3&api_token=FtLRaK0ZATRDL2rtWjWDYriArlkAG8DoMVO7oPJy'
    }
  }
})
