

const { faker } = require('@faker-js/faker');

class UserApi {
    static register() {
        return cy.request({
            url: "https://qacart-todo.herokuapp.com/api/v1/users/register",  // ✅ absolute URL
            method: 'POST',
            body: {
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                email: `user_${Date.now()}@test.com`,
                password: "Password123!"
            }
        });
    }
}

module.exports = UserApi;
