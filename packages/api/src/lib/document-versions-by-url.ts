import { keyBy } from 'lodash';
import { VersionDictionary, DocumentVersion } from '../interfaces';

export const documentVersionsByURL = (versions: DocumentVersion[]): VersionDictionary => keyBy(versions, '$url');
