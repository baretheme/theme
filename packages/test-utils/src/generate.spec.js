import * as generate from './generate';

describe('generate', () => {
  describe('attrs', () => {
    it('generates only the attrs of an array', () => {
      const mockArray = [
        { id: 'test-1', name: 'foo' },
        { id: 'test-2', name: 'bar' },
      ];
      expect(generate.attrs(mockArray, 'id')).toEqual(['test-1', 'test-2']);
    });
  });

  describe('pickSome', () => {
    it('generates random elements from an array', () => {
      const mockArray = [
        { id: 'test-1', name: 'foo' },
        { id: 'test-2', name: 'bar' },
        { id: 'test-3', name: 'baz' },
      ];
      const picked = generate.pickSome(mockArray);
      expect(mockArray).toEqual(expect.arrayContaining(picked));
    });

    it('generates n elements from an array', () => {
      const mockArray = [
        { id: 'test-1', name: 'foo' },
        { id: 'test-2', name: 'bar' },
        { id: 'test-3', name: 'baz' },
      ];
      const picked = generate.pickSome(mockArray, 2);
      expect(mockArray).toEqual(expect.arrayContaining(picked));
      expect(picked.length).toEqual(2);
    });
  });

  describe('createMany', () => {
    it('generates an array of elements by function', () => {
      const mockObject = { id: 'test' };
      const fn = jest.fn().mockReturnValue(mockObject);
      expect(generate.createMany(fn)).toContain(mockObject);
    });
  });

  describe('id', () => {
    it('generates a unique id', () => {
      const uuid = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
      expect(uuid.test(generate.id())).toBe(true);
    });
  });

  describe('languages', () => {
    it('generates languages', () => {
      const schema = {
        properties: {
          code: { type: 'string' },
          label: { type: 'string' },
        },
        required: ['code', 'label'],
      };
      const languages = generate.languages();
      languages.forEach((language) => {
        expect(language).toMatchSchema(schema);
      });
    });
  });

  describe('createCollection', () => {
    it('generates a collection', () => {
      const schema = {
        properties: {
          id: { type: 'string' },
          title: { type: 'string' },
        },
        required: ['id', 'title'],
      };
      const collection = generate.createCollection();
      expect(collection).toMatchSchema(schema);
    });
  });

  describe('createCollections', () => {
    it('generates multiple collections', () => {
      const spy = jest.spyOn(generate, 'createCollection');
      const collections = generate.createCollections();
      expect(spy).toHaveBeenCalled();
      expect(collections.length).toBeGreaterThanOrEqual(1);
      spy.mockClear();
    });
  });

  describe('createSite', () => {
    it('generates a site', () => {
      const schema = {
        properties: {
          title: { type: 'string' },
          description: { type: 'string' },
          logo: { type: 'string' },
          defaultLanguage: { type: 'string' },
          collections: { type: 'array' },
          languages: { type: 'array' },
        },
        required: ['defaultLanguage', 'collections', 'languages'],
      };
      const site = generate.createSite();
      expect(site).toMatchSchema(schema);
    });
  });

  describe('createBlock', () => {
    it('generates a block', () => {
      const schema = {
        properties: {
          block: { type: 'string' },
        },
      };
      const block = generate.createBlock();
      expect(block).toMatchSchema(schema);
    });
  });

  describe('createVersion', () => {
    it('generates a document version', () => {
      const schema = {
        properties: {
          title: { type: 'string' },
          slug: { type: 'string' },
          draft: { type: 'boolean' },
          blocks: { type: 'array' },
          language: { type: 'string' },
        },
        required: ['slug', 'draft', 'blocks', 'language'],
      };
      const block = generate.createVersion();
      expect(block).toMatchSchema(schema);
    });
  });

  describe('createDocument', () => {
    it('generates a document', () => {
      const schema = {
        properties: {
          id: { type: 'string' },
          title: { type: 'string' },
          date: { type: 'string' },
          draft: { type: 'boolean' },
          collections: { type: 'array' },
          versions: { type: 'array' },
        },
        required: ['id', 'versions', 'collections', 'date', 'draft'],
      };
      const document = generate.createDocument();
      console.log(document.date, typeof document.date);
      expect(document).toMatchSchema(schema);
    });
  });

  describe('createDocuments', () => {
    it('generates multiple documents', () => {
      const spy = jest.spyOn(generate, 'createDocuments');
      const documents = generate.createDocuments();
      expect(spy).toHaveBeenCalled();
      expect(documents.length).toBeGreaterThanOrEqual(1);
      spy.mockClear();
    });
  });
});
