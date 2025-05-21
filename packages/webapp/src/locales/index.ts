import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import { locales } from '@/pages/form/views/FormComponents'

import ptBr from './ptBr'

const resources = {
  'pt-br': {
    translation: {
      ...ptBr,
      ...locales['pt-br'].translation
    }
  }
}

const LANG_ALIASES: Record<string, string> = {
  'zh-hans': 'zh-cn',
  'zh-hant': 'zh-tw',
  'pl-pl': 'pl'
}

const supportedLngs = Object.keys(resources)
const fallbackLng = supportedLngs[0]

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: import.meta.env.DEV,
    lowerCaseLng: true,
    resources,
    fallbackLng,
    supportedLngs,
    interpolation: {
      escapeValue: false
    },
    react: {
      // https://react.i18next.com/latest/trans-component#trans-props
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'b', 'i', 'a']
    },
    detection: {
      order: ['cookie', 'navigator', 'htmlTag'],
      caches: ['cookie'],
      lookupCookie: 'locale',
      convertDetectedLanguage: (lng: string) => {
        const lowerLng = lng.toLowerCase()

        if (LANG_ALIASES[lowerLng]) {
          return LANG_ALIASES[lowerLng]
        }

        return lng
      }
    }
  })

export default i18n
