import { browser, protractor, ExpectedConditions } from 'protractor';

import { navigation } from '../..//page-objects/navigation';
import { userList } from '../../page-objects/userList';
// import { userForm } from '../../page-objects/userForm';
import { userData } from '../../spec/test-data/userData';


const EC = ExpectedConditions;

describe('On the user page ', () : void => {

    beforeEach(async () : Promise<void> => {
        await navigation.goToMainPage();
        await browser.wait(EC.presenceOf(userList.addNewButton));
    });

    it('there is a list of users displayed', async (): Promise<void> => {
        // expect(await UserForm.userFormHeader.getText()).toEqual('Add new user');
    });

    it('there is user\'s profile info displayed', async (): Promise<void> => {
        // const profileInfo = await userDetails.userProfileInfo;
        // for (let i = 0; i < profileInfo.length; i++) {
          // const headerText = await profileInfo[i].getText();
          // expect(headerText).toContain(profileData.userProfileInfo[i]);
        // };
      });

        afterAll(async () => {
            // do sth if needed
    });
});
