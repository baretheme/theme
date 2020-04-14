import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const Document = ({ title }) => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      Title: {title}
    </main>
  </div>
);

Document.defaultProps = {
  title: '',
};

Document.propTypes = {
  title: PropTypes.string,
};

export { Document };
