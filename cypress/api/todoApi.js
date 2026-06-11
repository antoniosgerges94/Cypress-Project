

class TodoApi {
    add(accessToken) {
        return cy.request({
            url: "https://qacart-todo.herokuapp.com/api/v1/tasks",  // ✅ absolute URL
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            body: {
                isCompleted: false,
                item: 'Learn Cypress'
            }
        });
    }
}

module.exports = TodoApi;