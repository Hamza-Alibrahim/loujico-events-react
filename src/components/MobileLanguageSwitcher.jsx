/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const MobileLanguageSwitcher = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { i18n } = useTranslation();

  const switchLanguage = (locale) => {
    i18n.changeLanguage(locale);
    setIsLanguageOpen(false);

    localStorage.setItem("preferred-language", locale);
  };

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-1 px-3 py-2 rounded-lg bg-blue-fantastic/30 hover:bg-blue-fantastic/50 border border-burning-flame/30 transition-all duration-300 text-palladian hover:text-burning-flame"
      >
        <span className="text-sm font-medium">
          {currentLanguage.code.toUpperCase()}
        </span>
        <motion.svg
          animate={{ rotate: isLanguageOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-3 h-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isLanguageOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full right-0 mt-2 w-32 bg-blue-fantastic/95 backdrop-blur-xl border border-burning-flame/30 rounded-xl shadow-2xl shadow-burning-flame/20 overflow-hidden z-50"
          >
            <div className="p-1">
              {languages.map((language, index) => (
                <button
                  key={language.code}
                  onClick={() => switchLanguage(language.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-300 text-sm ${
                    i18n.language === language.code
                      ? "bg-burning-flame/20 text-burning-flame"
                      : "text-palladian/80 hover:text-palladian hover:bg-blue-fantastic/50"
                  } ${index !== languages.length - 1 ? "mb-1" : ""}`}
                >
                  <span className="font-medium">{language.name}</span>
                  <span className="text-lg">{language.flag}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileLanguageSwitcher;
