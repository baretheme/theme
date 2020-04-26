const getAllVersions = (documents) => documents.reduce((acc, item) => [
  ...acc,
  ...item.versions,
], []);

export { getAllVersions };
