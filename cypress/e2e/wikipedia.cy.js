/// <reference types="Cypress" />

import wikiHome from './home.page'
import englishPage from './english.page'

describe('test', () => {
  it('Should', () => {
    wikiHome.visit()
    wikiHome.getEnglish().click()
    englishPage.getCreateAccount().should('contain', 'Create account')
    englishPage.getLogIn().should('contain', 'Log in')
    englishPage.getThreeDots().click()
  })
})