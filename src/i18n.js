import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import enTranslations from './locales/en/translation.json';
import arTranslations from './locales/ar/translation.json';

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      ar: {
        translation: arTranslations,
      },
    },
    lng: 'ar',
    fallbackLng: 'ar',
    debug: true, // Enable debug to see what's happening
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

// Force set language to Arabic
i18n.changeLanguage('ar');

export default i18n;
