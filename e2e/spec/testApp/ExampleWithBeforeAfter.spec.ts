import { browser, protractor, ExpectedConditions } from 'protractor';

import { Urls } from '../../Urls';
import { UserList } from '../../PageObjectModels/UserList';
// import { UserForm } from '../../PageObjectModels/UserForm';
import { Common } from '../../PageObjectModels/CommonMethods';
import { userData } from '../../spec/testData/userData';


const EC = ExpectedConditions;

describe('On the user page ', function () {

    beforeEach(async () => {
        await Urls.mainPage();
        await browser.wait(EC.presenceOf(UserList.addNewButton));
    });

    it('there is a list of users displayed', async (): Promise<void> => {
        // expect(await UserForm.userFormHeader.getText()).toEqual('Add new user');
    });

    it('there is user\'s profile info displayed', async (): Promise<void> => {
        // const profileInfo = await UserDetails.userProfileInfo;
        // for (let i = 0; i < profileInfo.length; i++) {
          // const headerText = await profileInfo[i].getText();
          // expect(headerText).toContain(profileData.userProfileInfo[i]);
        // };
      });

        afterAll(async () => {
            // do sth if needed
    });
});
