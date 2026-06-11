
/// <reference types="cypress" />

import LoginPage from '../pages/loginPage';

it('login functionality', () => {
    cy.env(['email', 'password']).then(({ email, password }) => {
        new LoginPage()
            .load()
            .login(email, password)
            .welcomeMessageShouldBeVisible();
    });
});