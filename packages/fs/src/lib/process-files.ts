import { readDir } from './read-dir';

function isDefined<T>(value: T | undefined | null): value is NonNullable<T> {
  return (typeof value !== 'undefined') && (value !== null);
}

export const processFiles = <T>(path: string, fn: (fileName: string) => T): NonNullable<T>[] => {
  const fileNames = readDir(path, { recursive: true });
  return fileNames.map(fn).filter(isDefined);
};
