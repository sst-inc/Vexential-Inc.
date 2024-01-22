// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importing the translation files
import translationEN from './locales/en.json'; // adjust the path if necessary
import translationZH from './locales/zh.json'; // adjust the path if necessary

// The translation resources
const resources = {
  en: {
    translation: translationEN
  },
  zh: {
    translation: translationZH
  }
};

i18n
  // connect the i18n instance to react-i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // if you want to use English by default
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react is already safe from XSS
    },
  });

export default i18n;
