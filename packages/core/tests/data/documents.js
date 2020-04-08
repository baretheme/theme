const faker = require('faker');
const document = require('./document');

const n = faker.random.number({ min: 1, max: 5 });
return Array.from({ length: n }, () => document);
