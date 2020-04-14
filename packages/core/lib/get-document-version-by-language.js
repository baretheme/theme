export function getDocumentVersionByLanguage(document, language) {
  if (!document || !language) return null;
  return document?.versions?.find((v) => v.language === language);
}
