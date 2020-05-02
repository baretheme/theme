import path from 'path';
import { getConfig } from '@baretheme/next';
import {
  getAllDocumentsByURL,
  optimizeVersion,
} from '@baretheme/api';
import { Document } from '../components/document';

const config = getConfig();
const documents = getAllDocumentsByURL(config, { publicOnly: true });

export default Document;

export async function getStaticPaths() {
  const urls = Object.keys(documents);

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
  const slug = params?.slug ? path.join(...params.slug) : 'index';
  const version = documents[slug];
  const optimizedVersion = optimizeVersion(version);
  return {
    props: {
      document: optimizedVersion,
    },
  };
}
