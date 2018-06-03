import { browser, ExpectedConditions } from 'protractor';

import { helpers } from '../helpers/helpers';
import { loginPage } from '../page-objects/newLoginPage';
import { todosPage } from '../page-objects/todosPage';

const EC = ExpectedConditions;

export const navigation = {

    goToLoginPage: async () => {
        await browser.manage().deleteAllCookies();
        await browser.waitForAngularEnabled(false);
        await browser.get('');
        await helpers.acceptAlertIfPresent();
        await browser.wait(EC.visibilityOf(loginPage.title));
    },

    goToMainPage: async () => {
        await browser.get('http://todomvc.com/examples/angularjs/#/');
        await helpers.acceptAlertIfPresent();
        await browser.wait(EC.visibilityOf(todosPage.title));
    },
};
