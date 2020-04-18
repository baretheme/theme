import { pickOne } from '../helpers';
import { createLanguages } from './language';
import { createCollections } from './collection';

const languages = createLanguages();

export const createSite = (props) => ({
  $filename: 'site',
  title: 'My site',
  description: 'Something that describes my site',
  logo: '../assets/logo.svg',
  defaultLanguage: pickOne(languages).code,
  collections: createCollections(),
  languages,
  ...props,
});
