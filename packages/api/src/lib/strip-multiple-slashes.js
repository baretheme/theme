export function stripMultipleSlashes(string) {
  return string.replace(/\/+/g, '/');
}
