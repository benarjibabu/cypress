export class LoginOTP {

    UserInterfaceButton(UserInterface) {
        cy.get(UserInterface).should('exists').should('be.visible')
    }
    SignInButton(SignIn) {
        cy.get(SignIn).should('exists').should('be.visible')
    }
    ResendOTPButtonDis(ResendOTPButton) {
        cy.get(ResendOTPButton).should('not.be.visible')
    }
    ResendOTPButtonEn(ResendOTPButton) {
        cy.get(ResendOTPButton).should('be.visible')
    }
    EnterOTP(UserInterface, DefaultOTP) {
        cy.get(UserInterface).type(DefaultOTP)
    }
    ClickSignIn(SignIn) {
        cy.get(SignIn).click()
    }
    CheckRedirect() {
        cy.title().should('eq', 'Welcome to MPDS Board')
        cy.url().should('eq', 'www.mpdsboard.com/welcome')
    }

}
