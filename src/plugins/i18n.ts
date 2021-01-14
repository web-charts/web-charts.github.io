import { createI18n } from "vue-i18n";

const enUS = "en_US";

const zhCN = "zh_CN";

const lang = [
  zhCN, enUS
];

const langMap: { [key: string]: string } = {};

lang.forEach(lang => langMap[lang] = lang);

const i18n = createI18n({
  legacy: true,
  locale: "zh_CN",
  fallbackLocale: "zh_CN",
});

const hasLang = (lang: string) => !!langMap[lang];

const isZhCN = () => i18n.global.locale === zhCN;

const isEnUS = () => i18n.global.locale === enUS;

const locale = () => i18n.global.locale;

export {
  enUS,
  zhCN,
  i18n,
  lang,
  locale,
  isZhCN,
  isEnUS,
  hasLang,
};

export default i18n;
