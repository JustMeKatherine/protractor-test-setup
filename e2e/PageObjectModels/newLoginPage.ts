
import { element, by, browser, ExpectedConditions } from 'protractor';
import { Common } from '../PageObjectModels/CommonMethods';


const EC = ExpectedConditions;

export const LoginApp = {
    loginButton: element(by.id('btLogin')),
    username: element(by.id('txtLogin')),
    password: element(by.id('txtPassword')),
    title: element(by.tagName('h2')),
    accessDenied: element(by.id('accessDenied')),

    logIn: async (login: string, pass: string) => {
        await browser.wait(EC.presenceOf(LoginApp.username));
        await LoginApp.username.sendKeys(login);
        await LoginApp.password.sendKeys(pass);
        await LoginApp.loginButton.click();
    }
};
