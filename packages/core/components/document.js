import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { PageProvider } from '@baretheme/core/context/page';

const Document = ({ document }) => (
  <PageProvider value={{ document }}>
    <div className="container">
      <Head>
        <title>{document.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        Title: {document.title}
      </main>
    </div>
  </PageProvider>
);

Document.propTypes = {
  document: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

export { Document };
