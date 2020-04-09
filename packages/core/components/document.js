import React from 'react';
import Head from 'next/head';
import { getDocumentVersionBySlug } from '../api';

const Document = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      document
    </main>
  </div>
);

Document.getInitialProps = async function getInitialProps({ res, asPath: slug }) {
  const document = await getDocumentVersionBySlug(slug);
  if (!document) {
    res.statusCode = 404;
    res.end('Document was not found.');
    return;
  }
  return {};
};

export { Document };
