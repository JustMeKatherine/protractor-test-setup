import { browser, ExpectedConditions } from 'protractor';

import { Common } from './PageObjectModels/CommonMethods';
import { LoginApp } from './PageObjectModels/newLoginPage';
import { ToDosPage } from './PageObjectModels/ToDosPage';

const EC = ExpectedConditions;

export const Urls = {

    loginPage: async () => {
        await browser.manage().deleteAllCookies();
        await browser.waitForAngularEnabled(false);
        await browser.get('');
        await Common.acceptAlertIfPresent();
        await browser.wait(EC.visibilityOf(LoginApp.title));
    },

    mainPage: async () => {
        await browser.get('http://todomvc.com/examples/angularjs/#/');
        await Common.acceptAlertIfPresent();
        await browser.wait(EC.visibilityOf(ToDosPage.title));
    },
};
