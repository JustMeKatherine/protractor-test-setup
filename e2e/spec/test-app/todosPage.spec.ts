import { browser, ExpectedConditions } from 'protractor';

import { todosPage } from '../../page-objects/todosPage';
import { navigation } from '../../page-objects/navigation';


const EC = ExpectedConditions;

fdescribe('On the ToDos page ', () => {

  it('I can add a new To Do to the list', async (): Promise<void> => {
    await navigation.goToMainPage();
    await todosPage.goToToDosPage();
    await todosPage.addToDo('test');
    await browser.wait(EC.textToBePresentInElement(todosPage.toDoItems, 'test'));

    expect(await todosPage.toDoItems.getText()).toEqual('test');
  });

});
