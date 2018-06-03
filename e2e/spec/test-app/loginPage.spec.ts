import { browser, ExpectedConditions } from 'protractor';

import { navigation } from '../..//page-objects/navigation';
import { loginPage } from '../../page-objects/newLoginPage';
import { userList } from '../../page-objects/userList';
// import { userForm } from '../../page-objects/userForm';
import { userData } from '../../spec/test-data/userData';


const EC = ExpectedConditions;

describe('On the user login page ', () => {

  it('user, before being created, cannot log in', async (): Promise<void> => {
    await navigation.goToLoginPage();
    await loginPage.logIn('userLogin3', 'manage');

    expect(await loginPage.accessDenied.getText()).toEqual('Access Denied');
  });

  it('after creating new user, he is able to log in when provide correct credentials', async (): Promise<void> => {
    await navigation.goToMainPage();
    // await userForm.createUser(profileData.loginTestUser);
    await browser.wait(EC.textToBePresentInElement(userList.userNames.first(), 'Barbara Rabarbaren'));
    await navigation.goToLoginPage();
    await loginPage.logIn('userLogin', 'correctPass');
    const mainPageTitle = await loginPage.title.getText();

    expect(mainPageTitle).toEqual('Home');
  });

  it('user is not able to log in, when provide incorrect password', async (): Promise<void> => {
    await navigation.goToLoginPage();
    await loginPage.logIn('userLogin', 'incorrectPass');

    expect(await loginPage.accessDenied.getText()).toEqual('Access Denied');
  });

  it('user whose account was deactivated can no longer login', async (): Promise<void> => {
    await navigation.goToMainPage();
    await browser.wait(EC.textToBePresentInElement(userList.userNames.first(), 'userLogin'));
    // await UserDetails.removeUser('userLogin');
    await navigation.goToLoginPage();
    await loginPage.logIn('userLogin', 'correctPass');

    expect(await loginPage.accessDenied.getText()).toEqual('Access Denied');
  });
});
