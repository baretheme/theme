import { getDocumentVersionBySlug, getData } from '@baretheme/api';
import { Document } from '../components/document';

export default Document;

export async function getServerSideProps({ res, req }) {
  const document = getDocumentVersionBySlug(req.url);
  const data = getData();

  if (!document) {
    res.statusCode = 404;
    res.end('Document was not found.');
    return;
  }

  return {
    props: {
      document,
      data,
    },
  };
}
