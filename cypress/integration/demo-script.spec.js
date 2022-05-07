/// <reference types="cypress" />

describe("suite de test kata", () => {
  it("Scenario 1 kata", function () {
    cy.visit("quizz_js/index.html");
    cy.get('[data-cy="titre-question-1"]').should("be.visible");
    cy.get('[data-cy="titre-question-2"]').should("be.visible");
    cy.get("#Kyoto").should("be.visible");
    cy.get("#Tokyo").should("be.visible");
    cy.get("#Okinawa").should("be.visible");
    cy.get("#reponse1").should("be.visible");
    cy.get("#reponse2").should("be.visible");
    cy.get("#reponse3").should("be.visible");
    cy.get("#reponse4").should("be.visible");
  });
  it("Scenario 2 kata", function () {
    cy.visit("quizz_js/index.html");
    cy.get("#Tokyo").click();
    cy.get("#reponse1").click();
    cy.get("#reponse3").click();
    cy.get("#envoyer").click();
    cy.get("#resultat1").should("be.visible");
    cy.get("#final").should("be.visible");
  });
  it("Scenario 3 kata", function () {
    cy.visit("quizz_js/index.html");
    cy.get("#Okinawa").click();
    cy.get("#Kyoto").click();
    cy.get("#reponse2").click();
    cy.get("#reponse4").click();
    cy.get("#envoyer").click();
    cy.get("#resultat2").should("be.visible");
    cy.get("#final").should("be.visible");
  });
});
