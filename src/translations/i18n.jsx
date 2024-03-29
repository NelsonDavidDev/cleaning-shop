import LenguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import global_en from "./en/global";
import global_es from "./es/global";

i18n.use(LenguageDetector).use(initReactI18next).init({
  interpolation: { escapeValue: false },
  debug: true,
  resources: {
    es: {
      translation: global_es
    },
    en: {
      translation: global_en,
    },
  },
});