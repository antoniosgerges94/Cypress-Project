
import NewTodoPage from './newTodoPage';

class TodoPage {

    get welcomeMessage() {
        return cy.get('[data-testid="welcome"]');
    }

    get addButton() {
        return cy.get('[data-testid="add"]');
    }

    get firstTodoCheckbox() {
        return cy.get('[data-testid="complete-task"]').eq(0);
    }

    load() {
        cy.visit('/todo');
        return this;
    }

    get firsrtTodoItem() {
        return cy.get('[data-testid="todo-item"]').eq(0);
    }

    clickOnAddButton() {
        this.addButton.click();
        return new NewTodoPage();
    }

    welcomeMessageShouldBeVisible() {
        this.welcomeMessage.should('be.visible');
        return this;
    }

    firstTodoItemShouldHaveText(text) {
        this.firsrtTodoItem.should('have.text', text);
        return this;
    }

    markFirstTodoAsCompleted() {
        this.firstTodoCheckbox.click();
        return this;
    }

    firstItemShouldHaveBackgroundColor(color) {
        this.firsrtTodoItem.should('have.css', 'background-color', color);
        return this;
    }
}

export default TodoPage;