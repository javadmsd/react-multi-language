import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import fa from "./fa/translation";

i18n
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    resources: { fa },
    lng: "en", // default language
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
export default i18n;
