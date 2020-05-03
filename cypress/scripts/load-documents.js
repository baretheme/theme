const path = require('path');
const fs = require('fs-extra');
const { getAllDocumentsByURL } = require('@baretheme/api');

function loadDocuments() {
  const config = {
    dataPath: path.resolve(process.cwd(), 'example', 'content', 'data'),
    documentsPath: path.resolve(process.cwd(), 'example', 'content', 'documents'),
  };

  const documents = getAllDocumentsByURL(config, { publicOnly: true });
  fs.outputJson(path.resolve(__dirname, '..', 'fixtures/documents.json'), documents);
}

loadDocuments();
