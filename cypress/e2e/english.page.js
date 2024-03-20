class EnglishPage {
    getCreateAccount() {
        return cy.get('#pt-createaccount-2')
    }

    getLogIn() {
        return cy.get('#pt-login-2')
    }

    getThreeDots() {
        return cy.get('#vector-user-links-dropdown-checkbox')
    }
}

export default new EnglishPage();