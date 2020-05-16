import { mapKeys } from 'lodash';
import { VersionDictionary } from '../interfaces';
import { relativeURL } from './relative-url';

export const relativeVersionURLs = (obj: VersionDictionary, language: string) => mapKeys(obj, (_, key) => relativeURL(key, language));
