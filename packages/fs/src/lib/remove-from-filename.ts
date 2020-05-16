import path from 'path';

export const removeFromFilename = (filename: string, value: string) => {
  const parts = filename.split(path.sep)
    .filter((part) => part !== value);
  if (filename === path.sep || !parts.length) {
    return null;
  }
  const newFilename = path.join(...parts);
  return newFilename === '.' ? null : newFilename;
};
