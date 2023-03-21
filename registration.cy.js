// describe('Registration page', () => {

//     it('Visit Registration page', () => {
//         cy.visit('https://gallery-app.vivifyideas.com/register');
//         cy.get('#first-name').clear();
//         cy.get('#last-name').clear();
//         cy.get('#email').clear();
//         cy.get('#password').clear();
//         cy.get('#password-confirmation').clear();
//     })
// })
//     it('Positive case - successful registration', () => {
//         cy.visit('https://gallery-app.vivifyideas.com/register');
//         cy.get('#first-name').type('Milan');
//         cy.get('#last-name').type('Aleksic');
//         cy.get('#email').type('milannnnnnaleksic23@gmail.com');
//         cy.get('#password').type('milanaleksic123');
//         cy.get('#password-confirmation').type('milanaleksic123');
//         cy.get('.form-check-input').click();
//         cy.get('.btn').click();
//     })
// })

it('Negative case - try to register with leaving all fields empty', () => {
    cy.visit('https://gallery-app.vivifyideas.com/register');
    cy.get('#first-name').clear();
    cy.get('#last-name').clear();
    cy.get('#email').clear();
    cy.get('#password').clear();
    cy.get('#password-confirmation').clear();
    cy.get('.btn').click();
})

it('Negative case - try to register with leaving first-name field empty', () => {
    cy.visit('https://gallery-app.vivifyideas.com/register');
    cy.get('#first-name').clear();
    cy.get('#last-name').type('Aleksic');
    cy.get('#email').type('milannnnnnaleksic23@gmail.com');
    cy.get('#password').type('milanaleksic123');
    cy.get('#password-confirmation').type('milanaleksic123');
    cy.get('.form-check-input').click();
    cy.get('.btn').click();
})

it('Negative case - try to register with leaving last-name field empty', () => {
    cy.visit('https://gallery-app.vivifyideas.com/register');
    cy.get('#first-name').type('Milan');
    cy.get('#last-name').clear();
    cy.get('#email').type('milannnnnnaleksic23@gmail.com');
    cy.get('#password').type('milanaleksic123');
    cy.get('#password-confirmation').type('milanaleksic123');
    cy.get('.form-check-input').click();
    cy.get('.btn').click();
})
it('Negative case - try to register with leaving email field empty', () => {
    cy.visit('https://gallery-app.vivifyideas.com/register');
    cy.get('#first-name').type('Milan');
    cy.get('#last-name').type('Aleksic');
    cy.get('#email').clear();
    cy.get('#password').type('milanaleksic123');
    cy.get('#password-confirmation').type('milanaleksic123');
    cy.get('.form-check-input').click();
    cy.get('.btn').click();
})

it('Negative case - try to register with leaving password field empty', () => {
    cy.visit('https://gallery-app.vivifyideas.com/register');
    cy.get('#first-name').type('Milan');
    cy.get('#last-name').type('Aleksic');
    cy.get('#email').type('milanaaleksic@gmail.com');
    cy.get('#password').clear();
    cy.get('#password-confirmation').type('milanaleksic123');
    cy.get('.form-check-input').click();
    cy.get('.btn').click();
})
it('Negative case - try to register with leaving password-confirmation field empty', () => {
    cy.visit('https://gallery-app.vivifyideas.com/register');
    cy.get('#first-name').type('Milan');
    cy.get('#last-name').type('Aleksic');
    cy.get('#email').type('milanaaleksic@gmail.com');
    cy.get('#password').type('milanaleksic123');
    cy.get('#password-confirmation').clear();
    cy.get('.form-check-input').click();
    cy.get('.btn').click();
})
it('Negative case - try to register without clicking form-check-input box', () => {
    cy.visit('https://gallery-app.vivifyideas.com/register');
    cy.get('#first-name').type('Milan');
    cy.get('#last-name').type('Aleksic');
    cy.get('#email').type('milanaaleksic@gmail.com');
    cy.get('#password').type('milanaleksic123');
    cy.get('#password-confirmation').type('milanaleksic123');
    cy.get('.form-check-input');
    cy.get('.btn').click();
})
it('Negative case - try to register with entering invalid email (without @)', () => {
    cy.visit('https://gallery-app.vivifyideas.com/register');
    cy.get('#first-name').type('Milan');
    cy.get('#last-name').type('Aleksic');
    cy.get('#email').type('milanaaleksicgmail.com');
    cy.get('#password').type('milanaleksic123');
    cy.get('#password-confirmation').type('milanaleksic123');
    cy.get('.form-check-input');
    cy.get('.btn').click();
})
it('Negative case - try to register with entering invalid password (only latters)', () => {
    cy.visit('https://gallery-app.vivifyideas.com/register');
    cy.get('#first-name').type('Milan');
    cy.get('#last-name').type('Aleksic');
    cy.get('#email').type('milanaaleksic@gmail.com');
    cy.get('#password').type('milanaleksic');
    cy.get('#password-confirmation').type('milanaleksic');
    cy.get('.form-check-input');
    cy.get('.btn').click();
})
it('Negative case - try to register with entering short password (less then 8 characters)', () => {
    cy.visit('https://gallery-app.vivifyideas.com/register');
    cy.get('#first-name').type('Milan');
    cy.get('#last-name').type('Aleksic');
    cy.get('#email').type('milanaaleksic@gmail.com');
    cy.get('#password').type('asdf123');
    cy.get('#password-confirmation').type('asdf123');
    cy.get('.form-check-input');
    cy.get('.btn').click();
})