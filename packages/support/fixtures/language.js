export const createLanguage = (props) => ({
  code: 'en',
  label: 'English',
  ...props,
});

export const createLanguages = () => [
  createLanguage({ code: 'en', label: 'English' }),
  createLanguage({ code: 'de', label: 'German' }),
];
