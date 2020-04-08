import chance from 'chance';
import { randomCollection } from '../helpers';

export const fakeCollection = () => ({
  id: chance.guid(),
  title: chance.word(),
});

export const fakeCollections = () => randomCollection(fakeCollection);
