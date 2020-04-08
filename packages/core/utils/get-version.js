export function getVersion(document, language) {
  return document.versions.find((v) => v.language === language);
}
