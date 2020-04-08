import chance from 'chance';
import { fakeLanguages } from './language';
import { fakeCollections } from './collection';

const languages = fakeLanguages();

export const fakeSite = () => ({
  title: chance.word(),
  description: chance.sentence(),
  logo: chance.url(),
  defaultLanguage: chance.pickone(languages),
  collections: fakeCollections,
  languages,
});
