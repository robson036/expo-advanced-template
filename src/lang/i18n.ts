import * as Localization from "expo-localization";
import i18n from "i18n-js";

import pt from "./locales/pt_BR.json";
import es from "./locales/es.json";
import en from "./locales/en_US.json";
import fr from "./locales/fr_FR.json";

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: en,
  "en-AU": en,
  "en-BZ": en,
  "en-CA": en,
  "en-CB": en,
  "en-GB": en,
  "en-IE": en,
  "en-JM": en,
  "en-NZ": en,
  "en-PH": en,
  "en-TT": en,
  "en-US": en,
  "en-ZA": en,
  "en-ZW": en,

  es: es,
  "es-AR": es,
  "es-BO": es,
  "es-CL": es,
  "es-CO": es,
  "es-CR": es,
  "es-DO": es,
  "es-EC": es,
  "es-ES": es,
  "es-GT": es,
  "es-HN": es,
  "es-MX": es,
  "es-NI": es,
  "es-PA": es,
  "es-PE": es,
  "es-PR": es,
  "es-PY": es,
  "es-SV": es,
  "es-UY": es,
  "es-VE": es,

  pt: pt,
  "pt-BR": pt,
  "pt-PT": pt,

  fr: fr,
  "fr-BE": fr,
  "fr-CA": fr,
  "fr-CH": fr,
  "fr-FR": fr,
  "fr-LU": fr,
  "fr-MC": fr,
};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

export default i18n;
