import chance from 'chance';

export const randomCollection = (fn, min = 1, max = 5) => {
  const n = chance.integer({ min, max });
  return Array.from({ length: n }, fn);
};

export const randomForEach = (data, fn) => data.map((item) => fn(item));
