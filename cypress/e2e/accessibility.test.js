/// <reference types="Cypress" />

describe("Accessibility tests", () => {
	beforeEach(() => {
		cy.visit("/")
			.get("main")
			.injectAxe();
	});

	it("Has no detectable accessibility violations on load", () => {
		cy.checkA11y();
	});

	it("Navigates to photos page and checks for accessibility violations", () => {
		cy.get("nav")
			.findByText(/Photos/i)
			.click()
			.checkA11y();
	});

	it("Navigates to projects page and checks for accessibility violations", () => {
		cy.get("nav")
			.findByText(/Projects/i)
			.click()
			.checkA11y();
	});

	it("Navigates to contact page and checks for accessibility violations", () => {
		cy.get("nav")
			.findByText(/Contact/i)
			.click()
			.checkA11y();
	});
});
