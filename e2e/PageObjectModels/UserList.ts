import { element, by, browser } from 'protractor';
import { Urls } from '../Urls';
import { Common } from '../PageObjectModels/CommonMethods';


export const UserList = {

    usersListLink: element(by.partialLinkText('USERS')),
    addNewButton: element.all(by.css('.cdl-button')).first(),
    listRows: element.all(by.css('.mat-row')),
    userNames: element.all(by.css('.mat-cell.cdk-column-name')),
    userlogins: element.all(by.css('.mat-cell.mat-column-userName')),
    userEmails: element.all(by.css('.mat-cell.mat-column-email')),
};
