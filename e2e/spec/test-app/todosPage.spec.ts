import { browser, ExpectedConditions, element } from 'protractor';

import { todosPage } from '../../page-objects/todosPage';
import { navigation } from '../../page-objects/navigation';


const EC = ExpectedConditions;

fdescribe('On the ToDos page ', () => {

  it('I can add a new To Do to the list', async (): Promise<void> => {
    await navigation.goToMainPage();
    await todosPage.waitForTodosPageToLoad();
    await todosPage.addToDo('test');
    await browser.wait(EC.textToBePresentInElement(todosPage.toDoItems, 'test'));

    expect(await todosPage.toDoItems.getText()).toEqual('test');
  });

  it('I can check todo and it is displayed as done', async (): Promise<void> => {
    await navigation.goToMainPage();
    await todosPage.waitForTodosPageToLoad();
    await todosPage.checkTodos('test');
    //await browser.wait(EC.presenceOf(todosPage.doneItems));

    expect(await browser.wait(EC.visibilityOf(todosPage.doneItems))).toBeTruthy();
  });
});
