import { getDocumentVersionBySlug } from '@baretheme/api';

export async function getServerSideProps({ res, req }) {
  const document = getDocumentVersionBySlug(req.url);

  if (!document) {
    res.statusCode = 404;
    res.end('Document was not found.');
    return;
  }

  return {
    props: {
      ...document,
    },
  };
}
