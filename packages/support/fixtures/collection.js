import { id, createMany } from '../helpers';

export const createCollection = (props) => ({
  $filename: 'collection',
  id: id(),
  title: 'Collection',
  ...props,
});

export const createCollections = () => createMany(createCollection);
