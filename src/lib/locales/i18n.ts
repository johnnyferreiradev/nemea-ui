import { use } from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { en, pt } from './index';

use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    supportedLngs: ['en', 'pt'],
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: en },
      pt: { translation: pt },
    },
  });

export default use;
