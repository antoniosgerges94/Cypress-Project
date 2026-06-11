
import TodoPage from './todoPage';


class loginPage {

    // Elements (Or Locators)
    get emailInput() {
        return cy.get('[data-testid="email"]');
    }
    get passwordInput() {
        return cy.get('[data-testid="password"]');
    }
    get submitButton() {
        return cy.get('[data-testid="submit"]');
    }

    // Methods

    load() {
        cy.visit('/login');
        return this;
    }

    login(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.submitButton.click();
        return new TodoPage();
    }
}

export default loginPage;