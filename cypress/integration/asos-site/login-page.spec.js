/// <reference types="Cypress" />


import {LoginPage} from "../po/LoginPage";

context('Asos Login Page', () => {
  const loginPage = new LoginPage();
  beforeEach(() => {
    loginPage.navigate();
    loginPage.switchToRegister()
  })


  it('should check email validation field ', () => {
    const loginPage = new LoginPage();
    loginPage.insertEmail("www.walla.com")
    loginPage.insertPassword("test");
    loginPage.elements.register_btn().click();
    loginPage.elements.register_btn().should('be.disabled')
    loginPage.selectDay("17");
    loginPage.selectMonth("1");
    loginPage.selectYear("1997");
  })

  it('should check form validation field ', () => {
    const loginPage = new LoginPage();
    loginPage.insertEmail("www.walla.com")
    loginPage.insertPassword("test");
    loginPage.elements.register_btn().click();
    loginPage.elements.register_btn().should('be.disabled')
    loginPage.selectDay("17");
    loginPage.selectMonth("1");
    loginPage.selectYear("1997");
  })
})
