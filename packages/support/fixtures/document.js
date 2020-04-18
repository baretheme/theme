import { createMany } from '../helpers';

export const createBlock = (props) => ({
  block: 'text',
  ...props,
});

export const createVersion = (props) => ({
  title: 'My version title',
  slug: 'my-version-title',
  draft: true,
  blocks: createMany(createBlock),
  language: 'en',
  ...props,
});

export const createDocument = (props) => ({
  $filename: 'document',
  title: 'My document',
  date: new Date(),
  draft: false,
  collections: ['pages', 'articles'],
  versions: [createVersion({ language: 'de' }), createVersion({ language: 'en' })],
  ...props,
});

export const createDocuments = () => createMany(createDocument);
