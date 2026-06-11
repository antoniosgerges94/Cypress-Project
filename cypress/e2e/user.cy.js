/// <reference types="cypress" />

import LoginPage from '../pages/loginPage';

it('login functionality', () => {
    new LoginPage()
        .load()
        .login('test@example.com', 'Test1234')
        .welcomeMessageShouldBeVisible();
});