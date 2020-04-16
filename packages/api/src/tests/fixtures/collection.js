import { id, createMany } from '../helpers';

export const createCollection = (props) => ({
  id: id(),
  title: 'Articles',
  ...props,
});

export const createCollections = () => createMany(createCollection);
