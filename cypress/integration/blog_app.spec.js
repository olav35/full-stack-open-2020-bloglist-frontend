describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    // Create user
    const user = {
      name: 'user',
      username: 'username',
      password: 'password'
    }
    cy.request('POST', 'http://localhost:3001/api/users', user)
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function() {
    cy.get('form')
    cy.contains('log in to application')
    cy.contains('username:')
    cy.contains('password:')
  })

  describe('Login', function () {
    it('suceeds with correct credentials', function () {
      cy.get('#username-input').type('username')
      cy.get('#password-input').type('password')
      cy.get('#login-form').submit()
      cy.contains('user logged in')
    })

    it('fails with incorrecet credentials', function () {
      cy.get('#username-input').type('wrongusername')
      cy.get('#password-input').type('wrongpassword')
      cy.get('#login-form').submit()
      cy.contains('user logged in').should('not.exist')
    })
  })

  describe.only('When logged in', function () {
    beforeEach(function() {
      cy.get('#username-input').type('username')
      cy.get('#password-input').type('password')
      cy.get('#login-form').submit()
    })

    it('A blog can be created', function() {
      cy.contains('create post').click()
      cy.get('#title-input').type('Epic title')
      cy.get('#author-input').type('Olav Fosse')
      cy.get('#url-input').type('https://fossegr.im')
      cy.get('#create-blog-input').click()

      cy.contains('Epic title')
      cy.contains('Olav Fosse')
      cy.contains('view').click()
      cy.contains('https://fossegr.im')
    })
  })
})