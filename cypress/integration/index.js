describe('Index page', () => {
  describe('Default', () => {
    beforeEach(() => {
      cy.log('Visiting http://localhost:3000/');
      cy.visit('/');
    });

    it('should have the right title', () => {
      cy.title().should('contain', 'Home');
    });
  });

  describe('German', () => {
    beforeEach(() => {
      cy.log('Visiting http://localhost:3000/de');
      cy.visit('/de');
    });

    it('should have the right title', () => {
      cy.title().should('contain', 'Start');
    });
  });
});
