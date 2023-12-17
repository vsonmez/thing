import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en.json";
import trTranslation from "./locales/tr.json";
/**
 * This code snippet initializes an internationalization library called i18n for a React application. It sets up language resources for English and Turkish, and determines the language based on a value stored in the browser's local storage. If no language is found, it defaults to English. The code also configures the interpolation settings for i18n.
 */
const resources = {
  en: {
    translation: enTranslation,
  },
  tr: {
    translation: trTranslation,
  },
};

const language = localStorage.getItem("language");

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: language || "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
