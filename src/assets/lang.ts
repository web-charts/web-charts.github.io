const enUS = "en_US";

const zhCN = "zh_CN";

const langArr = [
  zhCN, enUS
];

const langMap: { [key: string]: string } = {};

langArr.forEach(lang => langMap[lang] = lang);

export {
  enUS,
  zhCN,
  langMap
};

export default {
  langMap
};
