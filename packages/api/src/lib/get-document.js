import path from 'path';
import { readJson } from '@baretheme/fs';

const getDocument = (filename) => {
  const dir = path.dirname(filename);
  const json = readJson(filename);
  const basename = path.basename(filename, '.json');
  if (!json) { return null; }

  const parent = readJson(dir);
  const versions = json.versions.map((v) => {
    let $url = '.';

    if (basename !== 'index') {
      $url = v.slug;
    }

    if (parent) {
      const parentVersion = parent.versions.find((pv) => pv.language === v.language);
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
