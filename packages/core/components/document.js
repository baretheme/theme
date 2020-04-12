import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { getDocumentVersionBySlug } from '../api';

const Document = ({ title }) => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      {title}
    </main>
  </div>
);

Document.defaultProps = {
  title: '',
};

Document.propTypes = {
  title: PropTypes.string,
};

Document.getInitialProps = async function getInitialProps({ res, asPath: slug }) {
  console.log('LOL??', slug);
  const document = await getDocumentVersionBySlug(slug);
  console.log(document);
  if (!document) {
    res.statusCode = 404;
    res.end('Document was not found.');
    return;
  }
  return document;
};

export { Document };
