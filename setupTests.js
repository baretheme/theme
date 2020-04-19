import '@testing-library/jest-dom/extend-expect';
import faker from 'faker';
import { matchers } from 'jest-json-schema';

expect.extend(matchers);

module.exports = function setupTests() {
  const seed = process.env.FAKER_SEED || faker.random.uuid();
  faker.seed(seed);
  console.log(`Using faker seed: ${seed}`);
};
