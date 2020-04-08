import { join } from 'path';
import { readFile, readDir } from './utils/reader';

const contentPath = process.env.CONTENT_PATH;
const documentsDirectory = 'documents';
const documentsRelativePath = join(contentPath, documentsDirectory);
const documentsPath = join(process.cwd(), documentsRelativePath);
const dataDirectory = 'data';
const dataRelativePath = join(contentPath, dataDirectory);
const dataPath = join(process.cwd(), dataRelativePath);

export async function readSite() {
  const file = 'site.json';
  const fullPath = join(dataPath, file);

  try {
    return readFile(fullPath);
  } catch {
    throw new Error(`[BARETHEME] Site does not exist. Please make sure a "site.json" file exists in "${dataRelativePath}".`);
  }
}

export function readDocumentsDir() {
  try {
    return readDir(documentsPath);
  } catch {
    throw new Error(`[BARETHEME] No documents directory found. Please make sure "${documentsRelativePath}" exists.`);
  }
}

export async function readDocumentByFileName(name) {
  const file = `${name}.json`;
  const fullPath = join(documentsPath, file);

  try {
    const fileContents = readFile(fullPath);
    return fileContents;
  } catch {
    return null;
  }
}

export function readAllDocuments() {
  const slugs = readDocumentsDir();
  return slugs.map((slug) => readDocumentByFileName(slug));
}
