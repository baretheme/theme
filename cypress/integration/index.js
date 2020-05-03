const documents = require('../fixtures/documents.json');

Object.keys(documents).forEach((url) => {
  describe(url, () => {
    const doc = documents[url];
    beforeEach(() => {
      cy.log(`Visiting ${url}`);
      cy.visit(url);
    });

    it('should have the right title', () => {
      cy.title().should('contain', doc.title);
    });
  });
});
