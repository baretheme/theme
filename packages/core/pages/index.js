import React from 'react';
import fs from 'fs';
import path from 'path';

const IndexPage = () => (<div>Index</div>);

export default IndexPage;

IndexPage.getInitialProps = () => {
  console.log('props');
  const file = fs.readFileSync(path.join(process.env.BARETHEME_HOME, 'content', 'documents', 'index.json'), 'utf-8');
  console.log(file);
  return {};
};
