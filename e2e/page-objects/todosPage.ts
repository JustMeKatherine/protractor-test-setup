import { element, by, browser, ExpectedConditions, Key } from 'protractor';
import { helpers } from '../helpers/helpers';


const EC = ExpectedConditions;

export const todosPage = {
    title: element(by.tagName('h1')),
    toDoInput: element(by.id('new-todo')),
    toDoCheckbox: element(by.className('toggle')),
    toDoItems: element(by.css('label[class="ng-binding"]')),

    goToToDosPage: async () => {
        await browser.wait(EC.presenceOf(todosPage.title));
    },

    addToDo: async (todo: string) => {
        await browser.wait(EC.presenceOf(todosPage.toDoInput));
        await todosPage.toDoInput.sendKeys(todo);
        await todosPage.toDoInput.sendKeys(Key.ENTER);
    }
};
