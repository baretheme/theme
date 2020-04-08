const faker = require('faker');

const languages = ['en', 'de'];

const createCollection = () => ({
  id: faker.random.uuid(),
  title: faker.name.title(),
});

const createLanguage = () => ({
  code: faker.random.uuid(),
  title: faker.name.title(),
});

const randomCollection = (fn, min = 1, max = 5) => {
  const n = faker.random.number({ min, max });
  return Array.from({ length: n }, fn);
};

const site = {
  title: faker.name.title(),
  description: faker.lorem.words(),
  logo: faker.system.filePath(),
  defaultLanguage: faker.random.arrayElement(languages),
  languages: randomCollection(createLanguage),
  collections: randomCollection(createCollection),
};

module.exports = site;
