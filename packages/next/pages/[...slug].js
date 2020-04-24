import React from 'react';
import { getConfig } from '@baretheme/next';
import { readAllJson } from '@baretheme/fs';
import path from 'path';
// import { getDocumentVersionBySlug } from '@baretheme/api';

const Document = () => (<div>Example Doc</div>);

export default Document;

const getAllDocuments = ({ publicOnly } = {}) => {
  const config = getConfig();
  let documents = readAllJson(config.documentsPath);

  if (publicOnly) {
    documents = documents.filter((d) => !d.draft);
  }

  return documents;
};

const getAllVersions = (documents) => documents.reduce((acc, item) => [
  ...acc,
  ...item.versions,
], []);

const getVersionURLs = (versions) => versions.map((v) => path.join(v.language, v.slug));

export async function getStaticPaths() {
  const documents = getAllDocuments({ publicOnly: true });
  const versions = getAllVersions(documents);
  const urls = getVersionURLs(versions);
  const paths = urls.map((url) => ({
    params: {
      slug: url.split('/'),
    },
  }));
  console.log(urls);
  console.log(paths[0].params);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(ctx) {
  console.log(ctx);
  const config = getConfig();
  console.log('GETTING DOC BY PATH', config.documentsPath);
  return {
    props: {
      DOC: {
        foo: 'bar',
      },
    },
  };
}

// import { getDocumentVersionBySlug, getData } from '@baretheme/api';
// import { Document } from '../components/document';

// export default Document;

// export async function getServerSideProps({ res, req }) {
// const document = getDocumentVersionBySlug(req.url);
// const data = getData();

// if (!document) {
//   res.statusCode = 404;
//   res.end('Document was not found.');
//   return;
// }

// return {
//   props: {
//     document,
//     data,
//   },
// };
// }
