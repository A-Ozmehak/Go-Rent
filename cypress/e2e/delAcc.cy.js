describe("Bug: Testing delete account for owner of listing", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", handleUncaughtException);
  });

  it("Creates account", () => {
    // Create acc
    cy.visit("localhost:3000/register");
    cy.get("#username").type("delete");
    cy.get("#firstName").type("delete");
    cy.get("#lastName").type("delete");
    cy.get("#email").type("delete@mail.se");
    cy.get("#password").type("delete");
    cy.get('button[type="submit"]').contains("Registrera dig").click();
    cy.wait(6000);
  });

  it("Create a listing", () => {
    // Login
    cy.visit("localhost:3000/login");
    cy.get("#email").type("delete@mail.se");
    cy.get("#password").type("delete");
    cy.get('button[type="submit"]').contains("Logga in").click();

    // Go to listing and fill in form
    // Waiting for redirect to profile page
    cy.wait(6000)
      .get('button[type="button"]')
      .contains("Lägg upp annons")
      .first()
      .click();
    cy.get("#title").type("Cypress test-listing");
    cy.get("#location").type("Nordstan");
    cy.get("#price").type(`${Math.floor(Math.random() * 1000)}`);
    cy.get("#description").type(
      `Cypress test-listing for deletion, random nr:${Math.floor(
        Math.random() * 150
      )}`
    );
    cy.get('button[type="submit').contains("Skapa annons").click();
    cy.wait(6000);
  });

  it("Delete account that is owner of listing", () => {
    // Login
    cy.visit("localhost:3000/login");
    cy.get("#email").type("delete@mail.se");
    cy.get("#password").type("delete");
    cy.get('button[type="submit"]').contains("Logga in").click();

    // Delete account
    cy.wait(6000);
    cy.get("#editProfile").click();
    cy.get('button[type="button"]').contains("Ta bort konto").click();
    cy.get('button[type="button"]').contains("Ja, ta bort mitt konto").click();
    cy.wait(6000);
  });
});

function handleUncaughtException(error) {
  console.error(error);
}
