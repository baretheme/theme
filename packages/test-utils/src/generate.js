import faker from 'faker';
import { sample, sampleSize } from 'lodash';

export function attrs(array, prop) {
  return array.map((item) => item[prop]);
}

export function pickSome(array, n) {
  if (n) return sampleSize(array, n);
  return sampleSize(array, faker.random.number({ min: 1, max: array.length }));
}

export function pickOne(array) {
  return sample(array);
}

export const createMany = (fn, min = 1, max = 5) => {
  const n = faker.random.number({ min, max });
  return Array.from({ length: n }, fn);
};

export function id() {
  return faker.random.uuid();
}

const defaultLanguages = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'German' },
];

export function languages() {
  return defaultLanguages;
}

export const createCollection = (props) => ({
  id: id(),
  title: faker.random.word(),
  ...props,
});

const defaultCollections = createMany(createCollection);

export function collections() {
  return defaultCollections;
}

export const createCollections = () => createMany(createCollection);

export const createSite = (props) => ({
  title: faker.random.word(),
  description: faker.random.words(),
  logo: faker.system.fileName(),
  defaultLanguage: pickOne(defaultLanguages).code,
  collections: defaultCollections,
  languages: defaultLanguages,
  ...props,
});

export const createBlock = (props) => ({
  block: faker.lorem.slug(),
  ...props,
});

export const createVersion = (props) => ({
  title: faker.random.word(),
  slug: faker.lorem.slug(),
  draft: faker.random.boolean(),
  blocks: createMany(createBlock),
  language: pickOne(defaultLanguages).code,
  ...props,
});

export const createDocument = (props) => ({
  id: id(),
  title: faker.random.word(),
  date: faker.date.past().toString(),
  draft: faker.random.boolean(),
  collections: attrs(pickSome(defaultCollections), 'id'),
  versions: defaultLanguages.map((language) => createVersion({ language: language.code })),
  ...props,
});

export const createDocuments = () => createMany(createDocument);
