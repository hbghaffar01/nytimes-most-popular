describe('NY Times App', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('loads articles and navigates to detail view', () => {
      cy.get('[data-testid="period-select"]').select('1');
      cy.get('[data-testid="article-list"]').should('be.visible');
  
      cy.get('[data-testid="article-card"]').first().click();
  
      cy.url().should('include', '/article/1/1');
      cy.get('[data-testid="article-detail"]').should('be.visible');
      cy.get('h1').should('contain', 'Test Article');
    });
  });