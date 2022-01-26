import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/translation.json';
import es from './es/translation.json';

export const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});
