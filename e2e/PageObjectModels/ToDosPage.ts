import { element, by, browser, ExpectedConditions, Key } from 'protractor';
import { Common } from '../PageObjectModels/CommonMethods';


const EC = ExpectedConditions;

export const ToDosPage = {
    title: element(by.tagName('h1')),
    toDoInput: element(by.id('new-todo')),
    toDoCheckbox: element(by.className('toggle')),
    toDoItems: element(by.css('label[class="ng-binding"]')),

    goToToDosPage: async () => {
        await browser.wait(EC.presenceOf(ToDosPage.title));
    },

    addToDo: async (todo: string) => {
        await browser.wait(EC.presenceOf(ToDosPage.toDoInput));
        await ToDosPage.toDoInput.sendKeys(todo);
        await ToDosPage.toDoInput.sendKeys(Key.ENTER);
    }
};
