import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cookies from 'js-cookie';

import enTranslation from '../locales/en/translation.json';
import esTranslation from '../locales/es/translation.json';

// Custom language detector that prioritizes cookies
const cookieLanguageDetector = {
    name: 'cookieLanguageDetector',
    lookup() {
        // Check cookie first
        const cookieLang = Cookies.get('i18nextLng');
        if (cookieLang) {
            return cookieLang;
        }

        // Fallback to browser language
        const browserLang = navigator.language || (navigator as any).userLanguage;
        if (browserLang) {
            // Extract the language code (e.g., 'en' from 'en-US')
            const langCode = browserLang.split('-')[0];
            return langCode;
        }

        return 'en'; // Default fallback
    },
    cacheUserLanguage(lng: string) {
        // Save to cookie with 1 year expiration
        Cookies.set('i18nextLng', lng, { expires: 365 });
    }
};

i18n
    // Use language detector
    .use({
        type: 'languageDetector',
        async: false,
        init: () => { },
        detect: cookieLanguageDetector.lookup,
        cacheUserLanguage: cookieLanguageDetector.cacheUserLanguage
    })
    // Pass the i18n instance to react-i18next
    .use(initReactI18next)
    // Initialize i18next
    .init({
        resources: {
            en: {
                translation: enTranslation
            },
            es: {
                translation: esTranslation
            }
        },
        fallbackLng: 'en',
        supportedLngs: ['en', 'es'],
        debug: false,
        interpolation: {
            escapeValue: false // React already escapes values
        },
        react: {
            useSuspense: false // Disable suspense for better compatibility
        }
    });

export default i18n;
