import path from 'path';
import { getConfig } from '@baretheme/next';
import {
  getSite,
  getAllDocumentVersions,
  getDocumentVersion,
} from '@baretheme/api';
import { Document } from '../components/document';

export default Document;

export async function getStaticPaths() {
  const config = getConfig();
  const site = getSite(config.dataPath);
  const versions = getAllDocumentVersions({
    path: config.documentsPath,
    dir: site.defaultLanguage,
    publicOnly: true,
  });
  const urls = Object.keys(versions);

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
  const site = getSite(config.dataPath);
  const url = params?.slug ? path.join(...params.slug) : site.defaultLanguage;
  console.log('FETCHING BY URL', url);
  const document = getDocumentVersion({
    path: config.documentsPath,
    publicOnly: true,
    url,
  });

  return {
    props: {
      document,
    },
  };
}
