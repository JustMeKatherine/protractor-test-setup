import { browser, ExpectedConditions } from 'protractor';

import { Urls } from '../../Urls';
import { LoginApp } from '../../PageObjectModels/newLoginPage';
import { UserList } from '../../PageObjectModels/UserList';
// import { UserForm } from '../../PageObjectModels/UserForm';
import { userData } from '../../spec/testData/userData';


const EC = ExpectedConditions;

describe('On the user login page ', () => {

  it('user, before being created, cannot log in', async (): Promise<void> => {
    await Urls.loginPage();
    await LoginApp.logIn('userLogin3', 'manage');

    expect(await LoginApp.accessDenied.getText()).toEqual('Access Denied');
  });

  it('after creating new user, he is able to log in when provide correct credentials', async (): Promise<void> => {
    await Urls.mainPage();
    // await UserForm.createUser(profileData.loginTestUser);
    await browser.wait(EC.textToBePresentInElement(UserList.userNames.first(), 'Barbara Rabarbaren'));
    await Urls.loginPage();
    await LoginApp.logIn('userLogin', 'correctPass');
    const mainPageTitle = await LoginApp.title.getText();

    expect(mainPageTitle).toEqual('Home');
  });

  it('user is not able to log in, when provide incorrect password', async (): Promise<void> => {
    await Urls.loginPage();
    await LoginApp.logIn('userLogin', 'incorrectPass');

    expect(await LoginApp.accessDenied.getText()).toEqual('Access Denied');
  });

  it('user whose account was deactivated can no longer login', async (): Promise<void> => {
    await Urls.mainPage();
    await browser.wait(EC.textToBePresentInElement(UserList.userNames.first(), 'userLogin'));
    // await UserDetails.removeUser('userLogin');
    await Urls.loginPage();
    await LoginApp.logIn('userLogin', 'correctPass');

    expect(await LoginApp.accessDenied.getText()).toEqual('Access Denied');
  });
});
