describe('Northcoders News Page', () => {
  it('Visits the page', () => {
    cy.visit('http://localhost:3000/');
    cy.title().should('include', 'North Coders News');
  });
  it('Query DOM elements', function() {
    // Get DOM elements by id
    cy.get('#root');
    cy.get('#userSplash').should('contain', 'Mr Northcoder');
    cy.get('nav');
  });
  it('Find an element on page', () => {
    cy.visit('http://localhost:3000/');
    cy
      .get('nav')
      .contains('Football')
      .should('have.attr', 'id', '5ac91ebc13c0e94d169413e8')
      .click();
  });
});
