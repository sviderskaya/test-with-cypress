class WikiHome {
    visit() {
        cy.visit('https://wikipedia.org')
    }
    getEnglish() {
        return cy.get('#js-link-box-en')
    }
}

export default new WikiHome()