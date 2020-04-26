import path from 'path';
import { getConfig } from '@baretheme/next';
import {
  readJson,
  removeFromFilename,
} from '@baretheme/fs';
import {
  getDocumentVersionBySlug,
  getAllURLs,
} from '@baretheme/api';
import { Document } from '../components/document';

export default Document;

export async function getStaticPaths() {
  const config = getConfig();
  const urls = getAllURLs(config);

  const paths = urls.map((url) => ({
    params: {
      slug: url ? url.split('/') : ['/'],
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const config = getConfig();
  const slug = path.join(params?.slug || ['/']);
  const version = getDocumentVersionBySlug(config, slug);
  const optimizedVersion = Object.keys(version).reduce((acc, key) => {
    const value = version[key];
    if (key.startsWith('$')) return acc;
    return {
      ...acc,
      [key]: value,
    };
  }, {});
  return {
    props: {
      document: optimizedVersion,
    },
  };
}
