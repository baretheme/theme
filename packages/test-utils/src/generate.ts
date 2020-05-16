import faker from 'faker';
import { sample, sampleSize } from 'lodash';
import {
  Document, DocumentVersion, Version, Block, Collection, Site,
} from '@baretheme/api';

export function attrs(array: any[], prop: string) {
  return array.map((item) => item[prop]);
}

export function pickSome(array: any[], n?: number) {
  if (n) return sampleSize(array, n);
  return sampleSize(array, faker.random.number({ min: 1, max: array.length }));
}

export function pickOne(array: any[]) {
  return sample(array);
}

export const createMany = <T>(fn: () => T, min = 1, max = 5): T[] => {
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

export const createCollection = (props?: {}): Collection => ({
  id: id(),
  title: faker.random.word(),
  ...props,
});

const defaultCollections = createMany(createCollection);

export function collections() {
  return defaultCollections;
}

export const createCollections = () => createMany(createCollection);

export const createSite = (props?: {}): Site => ({
  title: faker.random.word(),
  description: faker.random.words(),
  logo: faker.system.fileName(),
  defaultLanguage: pickOne(defaultLanguages).code,
  collections: defaultCollections,
  languages: defaultLanguages,
  ...props,
});

export const createBlock = (props?: {}): Block => ({
  block: faker.lorem.slug(),
  ...props,
});

export const createVersion = (props?: {}): Version => ({
  title: faker.random.word(),
  slug: faker.lorem.slug(),
  draft: faker.random.boolean(),
  blocks: createMany(createBlock),
  language: pickOne(defaultLanguages).code,
  ...props,
});

export const createDocumentVersion = (props?: {}): DocumentVersion => {
  const version = createVersion(props);
  return {
    $url: faker.system.filePath(),
    ...version,
  };
};

export const createDocument = (props?: {}): Document => ({
  id: id(),
  title: faker.random.word(),
  createdAt: faker.date.past().toString(),
  updatedAt: faker.date.past().toString(),
  draft: faker.random.boolean(),
  collections: attrs(pickSome(defaultCollections), 'id'),
  versions: defaultLanguages.map((language): DocumentVersion => createDocumentVersion({ language: language.code })),
  ...props,
});

export const createDocuments = () => createMany(createDocument);
