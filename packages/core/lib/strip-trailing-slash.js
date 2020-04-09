export function stripTrailingSlash(string) {
  return string.replace(/^(.+?)\/*?$/, '$1');
}
