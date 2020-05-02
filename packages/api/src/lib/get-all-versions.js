const getAllVersions = (documents, { publicOnly } = {}) => documents.reduce((acc, item) => {
  let { versions } = item;

  if (publicOnly) {
    versions = item.versions.filter((version) => !version.draft);
  }

  return [
    ...acc,
    ...versions,
  ];
}, []);

export { getAllVersions };
