
import { element, by, browser, ElementArrayFinder, ElementFinder, ExpectedConditions } from 'protractor';
import { helpers } from '../helpers/helpers';


const EC = ExpectedConditions;

export const loginPage = {
    loginButton: element(by.id('btLogin')),
    username: element(by.id('txtLogin')),
    password: element(by.id('txtPassword')),
    title: element(by.tagName('h2')),
    accessDenied: element(by.id('accessDenied')),

    logIn: async (login: string, pass: string) : Promise<void> => {
        await browser.wait(EC.presenceOf(loginPage.username));
        await loginPage.username.sendKeys(login);
        await loginPage.password.sendKeys(pass);
        await loginPage.loginButton.click();
    }
};
