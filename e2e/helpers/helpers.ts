import { browser, element, ElementFinder, ExpectedConditions, by, Key, promise } from 'protractor';


export const helpers = {

    insertText: async (element: ElementFinder, text: string) : Promise<void> => {
        await element.clear();
        await element.sendKeys(text);
    },

    acceptAlertIfPresent: () => {
        return browser.driver.switchTo().alert()
            .then(function (alert) {
                alert.accept();
                return true;
            }, function (err) {
                return false;
            });
    },

    scrollTo: (scrollToElement: ElementFinder) : promise.Promise<ElementFinder> => {
        return scrollToElement.getLocation().then(function (loc) {
            return browser.executeScript('window.scrollTo(0,arguments[0]);', loc.y);
        });
    },

    deleteCookies: async () : Promise<void> =>  {
        await browser.manage().deleteAllCookies();
    },

    fillForm: async (userData: string[]): Promise<void> => {
        for (const key in userData) {
            if (userData.hasOwnProperty(key)) {
                const textField = this.getTextField(key);
                const value = userData[key];
                await helpers.insertText(textField, value);
            }
        }
    },

    getTextField: (fieldName: string) : ElementFinder =>  {
        return element(by.css(`[name="${fieldName}"]`));
    },

    optionText: (value: string) : ElementFinder => {
        return element(by.xpath(`//cdl-option[text()="${value}"]`));
    },

    selectValueFromDropdown: async (dropdownField: ElementFinder, chosenValue: string) => {
        await dropdownField.click();
        return this.optionText(chosenValue).click();
    },

    selectEscapeKey: () : void => {
        browser.actions().sendKeys(Key.ESCAPE).perform();
    },  
};
