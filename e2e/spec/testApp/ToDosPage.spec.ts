import { browser, ExpectedConditions } from 'protractor';

import { ToDosPage } from '../../PageObjectModels/ToDosPage';
import { Urls } from '../../Urls';

const EC = ExpectedConditions;

fdescribe('On the ToDos page ', () => {

  it('I can add a new To Do to the list', async (): Promise<void> => {
    await Urls.mainPage();
    await ToDosPage.goToToDosPage();
    await ToDosPage.addToDo('test');
    await browser.wait(EC.textToBePresentInElement(ToDosPage.toDoItems, 'test'));

    expect(await ToDosPage.toDoItems.getText()).toEqual('test');
  });

});
