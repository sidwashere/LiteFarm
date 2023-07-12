// packages/webapp/node_modules/.pnpm/rrule@2.7.2/node_modules/rrule/dist/esm/nlp/i18n.js

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
