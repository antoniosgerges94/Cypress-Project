

const UserApi = require('../api/userApi');
const TodoApi = require('../api/todoApi');
import TodoPage from '../pages/todoPage';

describe('Todo Test Cases', () => {

    const todoApi = new TodoApi();

    beforeEach(() => {
        UserApi.register().then((res) => {
            const token = res.body.access_token;
            cy.setCookie('access_token', token);
            cy.wrap(token).as('accessToken');  // ✅ store for use in it() blocks
        });
    });

    it("Adding Todo Task", function() {  // ✅ must be function(), not arrow function
        cy.getCookie('access_token').should('exist');
        new TodoPage()
            .load()
            .clickOnAddButton()
            .addNewTodo("Learn Cypress")
            .firstTodoItemShouldHaveText("Learn Cypress");
    });

    it('Marking Todo Task as completed', function() {  // ✅ must be function()
        todoApi.add(this.accessToken).then(() => {  // ✅ this.accessToken works now
            cy.getCookie('access_token').should('exist');
            new TodoPage()
                .load()
                .markFirstTodoAsCompleted()
                .firstItemShouldHaveBackgroundColor('rgb(33, 76, 97)');
        });
    });
});