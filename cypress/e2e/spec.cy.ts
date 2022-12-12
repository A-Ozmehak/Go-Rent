describe('Go Rent website', () => {
  // Open the website before running the tests
  beforeEach(() => {
    cy.on('uncaught:exception', handleUncaughtException);
    cy.visit('https://go-rent.vercel.app/');
  });

  it('should display the correct title', () => {
    // Use the `getByText` command to assert that the correct title is displayed
    cy.getByText('GO:RENT').should('be.visible');
  });
});

function handleUncaughtException(error: Error) {
  console.error(error);
}
