import path from 'path';

const removeFromFilename = (filename, value) => {
  const parts = filename.split(path.sep)
    .filter((part) => part !== value);
  if (filename === path.sep || !parts.length) {
    return null;
  }
  const newFilename = path.join(...parts);
  return newFilename === '.' ? null : newFilename;
};

export { removeFromFilename };
