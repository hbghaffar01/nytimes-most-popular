/// <reference types="cypress" />

describe('NY Times App', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173');
      cy.wait(2000);
    });
  
    it('loads articles and navigates to detail view', () => {
      cy.get('[data-testid="article-list"]').should('be.visible');
  
      cy.get('[data-testid="article-card"]').first().click();
  
      cy.url().should('include', '/article/');
      cy.get('[data-testid="article-detail"]').should('be.visible');
    });
  });