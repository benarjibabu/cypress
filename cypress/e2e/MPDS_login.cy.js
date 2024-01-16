import { LoginPage } from './loginpage.js'
import { LoginOTP } from './loginOTPPage.js'

const Login = new LoginPage
const LoginOTPPage = new LoginOTP

const MPDSInfo = require("./MPDS_Website_info.json")
const MPDSData = require("./MPDS_Website_Data.json")
const MPDS_OTP = require("./MPDS_Default_OTP.json")
const MPDS_OTP_info = require("./MPDS_OTPPageInfo.json")

// Product Requirement 1

describe("Login MPDS Website [Product Requirement 1]", () => {
    specify("SPEC_001: Website and Objects Exists and  be Visible", function () {
        CheckLoginPageAttributes()
    })
    it("SPEC_002: Sucessful Login", function () {
        SuccessfulLogin()
    })
    it("SPEC_003: Sucessful Login while Password checked", function () {
        Login.ShowPasswordCheck(MPDSInfo.ShowPassword)
        SuccessfulLogin()
    })
    specify("SPEC_004: Wrong Email Scenario", function () {
        Login.VisitWebsite(MPDSInfo.url)
        Login.EnterEmailID(MPDSInfo.EmailIDAttr, MPDSData.Test_User1.username)
        Login.EnterPassword(MPDSInfo.PasswordAttr, MPDSData.Test_User1.password)
        Login.ClickLoginButton(MPDSInfo.LoginButton)
        Login.EmailIDAlertEn(MPDSInfo.EmailIDAlertAttr)
    })
    it("SPEC_005: Wrong Password Scenario", function () {
        Login.VisitWebsite(MPDSInfo.url)
        Login.EnterEmailID(MPDSInfo.EmailIDAttr, MPDSData.Test_User1.username)
        Login.EnterPassword(MPDSInfo.PasswordAttr, MPDSData.Test_User1.password)
        Login.ClickLoginButton(MPDSInfo.LoginButton)
        Login.PasswordAlertEn(MPDSInfo.PasswordAlertAttr)
    })
    it("SPEC_006: Wrong EmailID and Password Scenario", function () {
        Login.VisitWebsite(MPDSInfo.url)
        Login.EnterEmailID(MPDSInfo.EmailIDAttr, MPDSData.Test_User1.username)
        Login.EnterPassword(MPDSInfo.PasswordAttr, MPDSData.Test_User1.password)
        Login.ClickLoginButton(MPDSInfo.LoginButton)
        Login.EmailIDAlertEn(MPDSInfo.EmailIDAlertAttr)
        Login.PasswordAlertEn(MPDSInfo.PasswordAlertAttr)
    })
    it("SPEC_007: Sucessful Login after entering Password press {enter}", function () {
        SuccessfulLoginWithEnter()
    })
})

// Product Requirement 2

describe(" MPDS Website OTP Cehck [Product Requirement 2]", () => {
    specify("SPEC_001: Website and Objects Exists and  be Visible", function () {
        CheckLoginPageAttributes()
    })
    it("SPEC_021: Sign in Successful with Correct OTP", function () {
        SuccessfulLogin()
        CheckOTPPageAttributes()
        LoginOTPPage.EnterOTP(MPDS_OTP_info.UserInterface, MPDS_OTP.CorrectOTP)
        LoginOTPPage.ClickSignIn(MPDS_OTP_info.VerifyOTPButton)
        LoginOTPPage.CheckRedirect()
    })
    it("SPEC_022: Sign in unSuccessful after entering Correct OTP after 5 minutes ", function () {
        SuccessfulLogin()
        CheckOTPPageAttributes()
        cy.wait(300000)
        LoginOTPPage.EnterOTP(MPDS_OTP_info.UserInterface, MPDS_OTP.CorrectOTP)
        LoginOTPPage.ClickSignIn(MPDS_OTP_info.VerifyOTPButton)
        LoginOTPPage.ResendOTPButtonDis(MPDS_OTP_info.ResendOTPButton)
        LoginOTPPage.ResendOTPButtonEn(MPDS_OTP_info.ResendOTPButton)
    })
    it("SPEC_023: Sign in unSuccessful with WrongOTP", function () {
        SuccessfulLogin()
        CheckOTPPageAttributes()
        LoginOTPPage.EnterOTP(MPDS_OTP_info.UserInterface, MPDS_OTP.WrongOTP)
        LoginOTPPage.ClickSignIn(MPDS_OTP_info.VerifyOTPButton)
        LoginOTPPage.ResendOTPButtonDis(MPDS_OTP_info.ResendOTPButton)
        LoginOTPPage.ResendOTPButtonEn(MPDS_OTP_info.ResendOTPButton)
    })
})


CheckLoginPageAttributes()
{
    Login.VisitWebsite(MPDSInfo.url)
    Login.EmailID(MPDSInfo.EmailIDAttr)
    Login.Password(MPDSInfo.PasswordAttr)
    Login.LoginButton(MPDSInfo.LoginButton)
    Login.PasswordAlertEn(MPDSInfo.PasswordAlertAttr)
    Login.EmailIDAlertEn(MPDSInfo.EmailIDAlertAttr)
    Login.PasswordAlertDis(MPDSInfo.PasswordAlertAttr)
    Login.EmailIDAlertDis(MPDSInfo.EmailIDAlertAttr)
    Login.ShowPasswordUnclicked(MPDSInfo.ShowPassword)
}
SuccessfulLogin()
{
    Login.VisitWebsite(MPDSInfo.url)
    Login.EnterEmailID(MPDSInfo.EmailIDAttr, MPDSData.Test_User1.username)
    Login.EnterPassword(MPDSInfo.PasswordAttr, MPDSData.Test_User1.password)
    Login.ClickLoginButton(MPDSInfo.LoginButton)
    Login.SuccessfulLogin()
}
SuccessfulLoginWithEnter()
{
    Login.VisitWebsite(MPDSInfo.url)
    Login.EnterEmailID(MPDSInfo.EmailIDAttr, MPDSData.Test_User1.username)
    Login.EnterPasswordAndPressEnter(MPDSInfo.PasswordAttr, MPDSData.Test_User1.password)
    Login.SuccessfulLogin()
}

CheckOTPPageAttributes()
{
    LoginOTPPage.UserInterfaceButton(MPDS_OTP_info.UserInterface)
    LoginOTPPage.SignInButton(MPDS_OTP_info.SignIn)
    LoginOTPPage.ResendOTPButtonDis(MPDS_OTP_info.ResendOTPButton)
}