import { element, by, browser } from 'protractor';
import { navigation } from '../page-objects/navigation';
import { helpers } from '../helpers/helpers';


export const userList = {

    addNewButton: element.all(by.css('.cdl-button')).first(),
    listRows: element.all(by.css('.mat-row')),
    userNames: element.all(by.css('.mat-cell.cdk-column-name')),
};
