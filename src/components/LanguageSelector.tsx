import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
    const { i18n, t } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const currentLanguage = i18n.language;

    return (
        <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-portfolio-highlight" />
            <div className="flex items-center space-x-1">
                <button
                    onClick={() => changeLanguage('en')}
                    className={`text-sm uppercase transition-colors ${currentLanguage === 'en'
                            ? 'text-white font-semibold'
                            : 'text-gray-400 hover:text-white'
                        }`}
                    aria-label="Switch to English"
                >
                    {t('language.english')}
                </button>
                <span className="text-gray-400">|</span>
                <button
                    onClick={() => changeLanguage('es')}
                    className={`text-sm uppercase transition-colors ${currentLanguage === 'es'
                            ? 'text-white font-semibold'
                            : 'text-gray-400 hover:text-white'
                        }`}
                    aria-label="Cambiar a Español"
                >
                    {t('language.spanish')}
                </button>
            </div>
        </div>
    );
};

export default LanguageSelector;
