import ENG from "./translation/ENG.json";
import ESP from "./translation/ESP.json";

import { initReactI18next } from "react-i18next";
import i18n from "i18next";

const resources = {
  ESP: {
    translation: ESP,
  },
  ENG: {
    translation: ENG,
  },
};

const savedLanguage = (localStorage.getItem('bus-language') || '');

i18n.use(initReactI18next).init({
  resources,
  lng:savedLanguage,
  fallbackLng:'ENG',
});

console.log("i18n", i18n);
export default i18n;