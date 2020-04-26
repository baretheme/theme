import { sep } from 'path';

const getLanguageFromPath = (languages, defaultLanguage, path) => {
  const parts = path.split(sep);
  const language = languages.find((language) => parts.find((part) => part === language.code));
  if (language) return language;
  return languages.find((language) => language.code === defaultLanguage);
};

export { getLanguageFromPath };
