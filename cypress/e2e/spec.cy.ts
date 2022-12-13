export { }

describe('"Log in" and "Create listing" test', () => {
  beforeEach(() => {
    // Doing all this beforeEach cause cypress clears cache and leaves site inbetween tests and I can't find where to disable this behaviour...
    cy.on('uncaught:exception', handleUncaughtException);
    // Visit the website
    cy.visit('https://go-rent.vercel.app')
    // Go to login
    cy.get('.chakra-menu__menu-button').first().click();
    cy.get('body').contains('Logga in').click();

    // Login
    cy.get('#email').type('lol@live.se')
    cy.get('#password').type('testtest')
    cy.get('button[type="submit"]').contains('Logga in').click()
  });
  
  it('Create a listing', () => {
    // Go to listing and fill in form
    // Waiting for redirect to profile page, wait should not be necessary
    cy.wait(3000).get('button[type="button"]').contains('Lägg upp annons').first().click()
    cy.get('#title').type('Cypress test-listing')
    cy.get('#price').type(`${Math.floor(Math.random() * 1000)}`)
    cy.get('#description').type(`Cypress test-listing, random nr:${Math.floor(Math.random() * 150)}`)
    cy.get('button[type="submit').contains('Skapa annons').click();
  })
})

function handleUncaughtException(error: Error) {
  console.error(error);
}