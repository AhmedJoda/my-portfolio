import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../src/translation/en.json";
import ar from "../src/translation/ar.json";
import tr from "../src/translation/tr.json";
import de from "../src/translation/de.json";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
  tr: {
    translation: tr,
  },
  de: {
    translation: de,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
