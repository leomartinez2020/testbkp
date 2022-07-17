describe("This is my first cypress test", () => {
    it("should have a title", () => {
        cy.visit("https://leomartinez.co");
        cy.title().should("eq", "Google");
        cy.get("h3").eq(0).should("contain", "Simulaciones");
    });
});