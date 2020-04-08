import chance from 'chance';
import slugify from 'slugify';
import { randomCollection } from '../helpers';

const collections = ['pages', 'articles'];

const createBlock = () => ({
  block: chance.word(),
});

const createVersion = ({ language }) => ({
  title: chance.word(),
  slug: slugify(chance.word()),
  draft: chance.bool(),
  blocks: randomCollection(createBlock),
  language,
});

export const fakeDocument = ({ versions = true } = {}) => ({
  title: chance.word(),
  date: chance.date(),
  draft: chance.bool(),
  collections: chance.pickset(collections),
  versions: versions ? [createVersion({ language: 'de' }), createVersion({ language: 'en' })] : [],
});

export const fakeDocuments = () => randomCollection(fakeDocument);
