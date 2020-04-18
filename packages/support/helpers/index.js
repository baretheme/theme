import { random } from 'lodash';
import { v4 as id } from 'uuid';

export { random, id };

export const pickOne = (data) => data[random(data.length - 1)];

export const createMany = (fn, min = 1, max = 5) => {
  const n = random(min, max);
  return Array.from({ length: n }, fn);
};

export const createJson = (props) => ({
  $filename: 'file.json',
  $basename: 'file',
  ...props,
});
