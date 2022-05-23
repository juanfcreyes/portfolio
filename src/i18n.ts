import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import enus from './locales/en-us.json'
import eses from './locales/es-es.json'

const resources = {
  en: {
    translation: enus
  },
  es: {
    translation: eses
  }
} as const


i18n.use(LanguageDetector)
.use(initReactI18next)
.init({
  resources: resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n;
