import path from 'path';
import { readJson } from '@baretheme/fs';
import { Document, DocumentVersion, Version } from '../interfaces';


const getDocument = (filename: string): Document|null => {
  const dir = path.dirname(filename);
  const json = readJson(filename);
  const basename = path.basename(filename, '.json');

  if (!json) { return null; }

  const parent = readJson(dir);
  const versions = json.versions.map((v: Version): DocumentVersion => {
    let $url = '.';

    if (basename !== 'index') {
      $url = v.slug;
    }

    if (parent) {
      const parentVersion = parent.versions.find((pv: Version) => pv.language === v.language);
      $url = path.join(parentVersion.slug, $url);
    }

    $url = path.join(v.language, $url);

    $url = $url.replace(/([^:]\/)\/+/g, '$1'); // remove double slashes
    $url = $url.replace(/^\/|\/$/g, ''); // remove leading and trailing slashes

    return {
      $url,
      ...v,
    };
  });

  const data = {
    ...json,
    $parent: parent,
    versions,
  };

  return data;
};

export { getDocument };
