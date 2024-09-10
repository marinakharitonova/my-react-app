import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'

const mode = import.meta.env.MODE

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    debug: mode === 'development',
    fallbackLng: 'ru',
  })

export default i18n
