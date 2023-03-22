/// <reference types="Cypress" />

import { registerPage, RegisterPage } from '../page_object/registerPage'
import { navigationBar } from '../page_object/navigationBar';

describe('Registration page', () => {

    before(() => {
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
    });

    it('Visit Registration page', () => {
        cy.visit('/register');
        registerPage.firstNameInputField.clear();
        registerPage.lastNameInputField.clear();
        registerPage.emailInputField.clear();
        registerPage.passwordInputField.clear();
        registerPage.passwordConfirmationInputField.clear();
    })
})
it('Positive case - successful registration', () => {
    cy.visit('/register');
    registerPage.firstNameInputField.type('Milan');
    registerPage.lastNameInputField.type('Aleksic');
    registerPage.emailInputField.type('milannnnnnaleksic23@gmail.com');
    registerPage.passwordInputField.type('milanaleksic123');
    registerPage.passwordConfirmationInputField.type('milanaleksic123');
    registerPage.formCheckInputField.click();
    navigationBar.registerBtn.click();
})


it('Negative case - try to register with leaving all fields empty', () => {
    cy.visit('/register');
    registerPage.firstNameInputField.clear();
    registerPage.lastNameInputField.clear();
    registerPage.emailInputField.clear();
    registerPage.passwordInputField.clear();
    registerPage.passwordConfirmationInputField.clear();
    navigationBar.registerBtn.click();
})

it('Negative case - try to register with leaving first-name field empty', () => {
    cy.visit('/register');
    registerPage.firstNameInputField.clear();
    registerPage.lastNameInputField.type('Aleksic');
    registerPage.emailInputField.type('milannnnnnaleksic23@gmail.com');
    registerPage.passwordInputField.type('milanaleksic123');
    registerPage.passwordConfirmationInputField.type('milanaleksic123');
    registerPage.formCheckInputField.click();
    navigationBar.registerBtn.click();
})

it('Negative case - try to register with leaving last-name field empty', () => {
    cy.visit('/register');
    registerPage.firstNameInputField.type('Milan');
    registerPage.lastNameInputField.clear();
    registerPage.emailInputField.type('milannnnnnaleksic23@gmail.com');
    registerPage.passwordInputField.type('milanaleksic123');
    registerPage.passwordConfirmationInputField.type('milanaleksic123');
    registerPage.formCheckInputField.click();
    navigationBar.registerBtn.click();
})
it('Negative case - try to register with leaving email field empty', () => {
    cy.visit('/register');
    registerPage.firstNameInputField.type('Milan');
    registerPage.lastNameInputField.type('Aleksic');
    registerPage.emailInputField.clear();
    registerPage.passwordInputField.type('milanaleksic123');
    registerPage.passwordConfirmationInputField.type('milanaleksic123');
    registerPage.formCheckInputField.click();
    navigationBar.registerBtn.click();
})

it('Negative case - try to register with leaving password field empty', () => {
    cy.visit('/register');
    registerPage.firstNameInputField.type('Milan');
    registerPage.lastNameInputField.type('Aleksic');
    registerPage.emailInputField.type('milanaaleksic@gmail.com');
    registerPage.passwordInputField.clear();
    registerPage.passwordConfirmationInputField.type('milanaleksic123');
    registerPage.formCheckInputField.click();
    navigationBar.registerBtn.click();
})
it('Negative case - try to register with leaving password-confirmation field empty', () => {
    cy.visit('/register');
    registerPage.firstNameInputField.type('Milan');
    registerPage.lastNameInputField.type('Aleksic');
    registerPage.emailInputField.type('milanaaleksic@gmail.com');
    registerPage.passwordInputField.type('milanaleksic123');
    registerPage.passwordConfirmationInputField.clear();
    registerPage.formCheckInputField.click();
    navigationBar.registerBtn.click();
})
it('Negative case - try to register without clicking form-check-input box', () => {
    cy.visit('/register');
    registerPage.firstNameInputField.type('Milan');
    registerPage.lastNameInputField.type('Aleksic');
    registerPage.emailInputField.type('milanaaleksic@gmail.com');
    registerPage.passwordInputField.type('milanaleksic123');
    registerPage.passwordConfirmationInputField.type('milanaleksic123');
    registerPage.formCheckInputField;
    navigationBar.registerBtn.click();
})
it('Negative case - try to register with entering invalid email (without @)', () => {
    cy.visit('/register');
    registerPage.firstNameInputField.type('Milan');
    registerPage.lastNameInputField.type('Aleksic');
    registerPage.emailInputField.type('milanaaleksicgmail.com');
    registerPage.passwordInputField.type('milanaleksic123');
    registerPage.passwordConfirmationInputField.type('milanaleksic123');
    registerPage.formCheckInputField.click();
    navigationBar.registerBtn.click();
})
it('Negative case - try to register with entering invalid password (only latters)', () => {
    cy.visit('/register');
    registerPage.firstNameInputField.type('Milan');
    registerPage.lastNameInputField.type('Aleksic');
    registerPage.emailInputField.type('milanaaleksic@gmail.com');
    registerPage.passwordInputField.type('milanaleksic');
    registerPage.passwordConfirmationInputField.type('milanaleksic');
    registerPage.formCheckInputField.click();
    navigationBar.registerBtn.click();
})
it('Negative case - try to register with entering short password (less then 8 characters)', () => {
    cy.visit('/register');
    registerPage.firstNameInputField.type('Milan');
    registerPage.lastNameInputField.type('Aleksic');
    registerPage.emailInputField.type('milanaaleksic@gmail.com');
    registerPage.passwordInputField.type('asdf123');
    registerPage.passwordConfirmationInputField.type('asdf123');
    registerPage.formCheckInputField.click();
    navigationBar.registerBtn.click();
})
