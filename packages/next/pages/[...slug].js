import React from 'react';
import { getConfig } from '@baretheme/next';
// import { getDocumentVersionBySlug } from '@baretheme/api';

const Document = () => (<div>Example Doc</div>);

export default Document;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: ['blog'] } },
    ],
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
