const langaugeFiles = {
  fr: './fr.js',
  pt: './pt.js',
};

export const getRruleLanguage = async (language) => {
  if (!Object.keys(langaugeFiles).includes(language)) {
    return { getText: (id) => id, language: null };
  }
  return await import(langaugeFiles[language]).then((language) => language.default);
};
