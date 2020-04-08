const faker = require('faker');

const languages = ['en', 'de'];
const collections = ['pages', 'articles'];

const document = {
  title: faker.name.title(),
  date: faker.date.past(),
  draft: faker.random.boolean(),
  collections: faker.random.arrayElement(collections),
  versions: [
    {
      title: faker.name.title(),
      slug: faker.lorem.slug(),
      draft: faker.random.boolean(),
      language: faker.random.arrayElement(languages),
      blocks: [
      ],
    },
    {
      title: faker.name.title(),
      slug: faker.lorem.slug(),
      draft: faker.random.boolean(),
      language: faker.random.arrayElement(languages),
      blocks: [
      ],
    },
  ],
};

module.exports = document;
