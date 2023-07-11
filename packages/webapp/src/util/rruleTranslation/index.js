const langaugeFiles = {
  en: './en.js',
  fr: './fr.js',
  pt: './pt.js',
};

export const getRruleLanguage = async (language) => {
  return await import(langaugeFiles[language]).then((language) => language.default);
};
