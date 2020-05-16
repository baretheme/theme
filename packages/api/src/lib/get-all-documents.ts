import { processFiles } from '@baretheme/fs';
import { getDocument } from './get-document';
import { Document } from '../interfaces';

const getAllDocuments = (path: string): Document[] => processFiles(path, getDocument);

export { getAllDocuments };
