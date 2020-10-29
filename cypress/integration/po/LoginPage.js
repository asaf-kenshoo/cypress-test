export class LoginPage {

  url = "https://my.asos.com/";

  elements = {
    user_email: () => cy.get('.qa-email-textbox'),
    user_password: () => cy.get('.qa-password-textbox'),
    register_tab: () => cy.get('a.qa-join-asos'),
    day_selection : () =>cy.get('#BirthDay'),
    month_selection : () =>cy.get('#BirthMonth'),
    year_selection : () =>cy.get('#BirthYear'),
    register_btn : () =>cy.get('#register'),
  }

  navigate() {
    cy.visit(this.url)
  }

  insertEmail(userEmailText) {
    return this.elements.user_email().type(userEmailText)
  }

  switchToRegister() {
    return this.elements.register_tab().click();
  }

  insertPassword(userPassword) {
    return this.elements.user_password().type(userPassword)
  }

  selectDay(day) {
    return this.elements.day_selection().select(day)
  }

  selectMonth(month) {
    return this.elements.month_selection().select(month)
  }

  selectYear(year) {
    return this.elements.year_selection().select(year)
  }

  toggleTodo(todoIndex) {
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
  }

  showOnlyCompletedTodos() {
    cy.contains('Completed').click()
  }

  showOnlyActiveTodos() {
    cy.contains('Active').click()
  }

  showAllTodos() {
    cy.contains('All').click()
  }

  clearCompleted() {
    cy.contains('Clear completed').click()
  }

  validateNumberOfTodosShown(expectedNumberOfTodos) {
    cy.get('.todo-list li').should('have.length', expectedNumberOfTodos)
  }

  validateTodoCompletedState(todoIndex, shouldBeCompleted) {
    const l = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)
    l.should(`${shouldBeCompleted ? '' : 'not.'}have.css`, 'text-decoration-line', 'line-through')
  }

  validateTodoText(todoIndex, expectedText) {
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText)
  }

  validateToggleState(todoIndex, shouldBeToggled) {
    const label = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)
    label.should(`${shouldBeToggled ? '' : 'not.'}be.checked`)
  }
}
