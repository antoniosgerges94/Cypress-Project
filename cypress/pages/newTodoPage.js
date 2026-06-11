
import TodoPage from './todoPage';

class NewTodoPage {

    // Elements (Or Locators)
    get newTodoInput() {
        return cy.get('[data-testid="new-todo"]');
    }

    get submitNewTaskButton() {
        return cy.get('[data-testid="submit-newTask"]');
    }

    load() {
        cy.visit('/todo/new');
        return this;
    }

    addNewTodo(item) {
        this.newTodoInput.type(item);
        this.submitNewTaskButton.click();
        return new TodoPage();
    }

}

    export default NewTodoPage;
