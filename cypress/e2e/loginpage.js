export class LoginPage {
    Website(url) {
        cy.visit(url)
        cy.url.should('equal', url)
    }
    EmailID(EmailL) {
        cy.get(EmailL).should('exist').and('be.visible')
    }
    Password(PassLocator) {
        cy.get(PassLocator).should('exist').and('be.visible')
    }
    LoginButton(LoginL) {
        cy.get(LoginL).should('exist').and('be.visible')
    }
    PasswordAlertEn(PassAlertLocator) {
        cy.get(PassAlertLocator).should('exist').and('be.visible')
    }
    EmailIDAlertEN(EmailIDAlertLocator) {
        cy.get(EmailIDAlertLocator).should('exist').and('be.visible')
    }
    PasswordAlertDis(PassAlertLocator) {
        cy.get(PassAlertLocator).should('exist').and('not.be.visible')
    }
    EmailIDAlertDis(EmailIDAlertLocator) {
        cy.get(EmailIDAlertLocator).should('exist').and('not.be.visible')
    }
    SuccessfulLogin() {
        cy.url.should('eql', "www.mpdsboard.com/otppage")
    }
    ForgotEmail(ForgotEmailID) {
        cy.get(ForgotEmailID).should('exist').and('not.be.visible')
    }
    ForgotPassword(ForgotPassword) {
        cy.get(ForgotPassword).should('exist').and('not.be.visible')
    }
    VisitWebsite(url) {
        cy.visit(url)
    }
    EnterEmailID(EmailL, EmailID) {
        cy.get(EmailL).type(EmailID)
    }
    EnterPassword(PassLocator, password) {
        cy.get(PassLocator).type(password)
    }
    EnterPasswordAndPressEnter(PassLocator, password) {
        cy.get(PassLocator).type(password).type("{enter}")
    }
    ClickLoginButton(LoginL) {
        cy.get(LoginL).click()
    }
    ShowPasswordUnchecked(ShowPassword) {
        cy.get(ShowPassword).should('exists').should('not.be.checked')
    }
    ShowPasswordchecked(ShowPassword) {
        cy.get(ShowPassword).should('exists').should('be.checked')
    }
    ShowPasswordCheck(ShowPassword) {
        cy.get(ShowPassword).check()
    }
    ShowPasswordUnCheck(ShowPassword) {
        cy.get(ShowPassword).uncheck()
    }
}
