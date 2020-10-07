import Page from 'src/pages/Page';

const yaml = require('js-yaml');
const fs = require('fs');
import { ElementOMSHome } from 'src/pages/elements/Elements';

let credentials = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/users.yml', 'utf8')
);

class OMSHomePage extends Page {
    newWindowOMS() {
        let OMS_URL;
        if (process.env.NODE_ENV === 'QA') {
            OMS_URL = process.env.QA_OMS;
        } else {
            OMS_URL = process.env.QA_NO;
        }
        browser.newWindow(OMS_URL);
        expect(OMS_URL).toContain(browser.getUrl());
    }

    loginToOMS(value) {
        try {

            let username = credentials[value]['username'];
            let password = credentials[value]['password'];
            let usernameElem = $(ElementOMSHome.usernameElem);
            let passwordElem = $(ElementOMSHome.passwordElem);

            super.syncWaitExistAndEnter(usernameElem, username);
            super.syncWaitExistAndEnter(passwordElem, password);
            let submitValue = super.syncWaitExistAndClick(
                $(ElementOMSHome.submitElem)
            );
        } catch (e) {
            console.log('User Already logged in');
        }
    }
    loginCheckOMS(value) {
        let loggedSuccess = $(ElementOMSHome.loggedInMsg);
        let alreadyLogged = $(ElementOMSHome.alreadyLoggedInMsg);
        browser.pause(3000);
        if (!alreadyLogged.isExisting()){
            this.loginToOMS(value)

        }
        else {
            console.log('User already logged in');
        }

    }
    clickGenericFromPanel(value) {
        let elem = $("//a[contains(text(),'" + value + "')]");
        elem.waitForExist();
        elem.waitForClickable();
        elem.click();
        browser.pause(5000);
        // super.syncWaitExistAndClick(elem);

    }
    verifyStatus(value) {
        let pageTitleELem = $(ElementOMSHome.pageTitleElem);
        browser.waitUntil(() => pageTitleELem.getText() === value, {
            timeout: 10000,
            interval: 3000,
            timeoutMsg: 'expected text to be different ',
        });
        let pageTitleElemText = pageTitleELem.getText().toUpperCase();

        expect(pageTitleElemText).toEqual(value.toUpperCase());
    }
    clickDashboardFromPanel() {
        let elem = $(ElementOMSHome.dashboardElem);
        super.syncWaitExistAndClick(elem);
        let pageTitleELem = $(ElementOMSHome.pageTitleElem);
        let expected = 'Dashboard';
        expect(pageTitleELem.getText()).toEqual(expected);
    }

    clickEmployeesFromPanel() {
        let elem = $(ElementOMSHome.employeesElem);
        super.syncWaitExistAndClick(elem);
        let pageTitleELem = $(ElementOMSHome.pageTitleElem);
        let expected = 'Employees';
        expect(pageTitleELem.getText()).toEqual(expected);
    }
    clickHolidaysFromPanel() {
        let elem = $(ElementOMSHome.holidaysElem);
        super.syncWaitExistAndClick(elem);
        let pageTitleELem = $(ElementOMSHome.pageTitleElem);
        let expected = 'Holidays';
        expect(pageTitleELem.getText()).toEqual(expected);
    }
    clickImportProductFromPanel() {
        let elem = $(ElementOMSHome.importProductsElem);
        super.syncWaitExistAndClick(elem);
        let pageTitleELem = $(ElementOMSHome.pageTitleElem);
        let expected = 'Import Products';
        expect(pageTitleELem.getText()).toEqual(expected);
    }
    clickLineItemFromPanel() {
        let elem = $(ElementOMSHome.lineItemsElem);
        super.syncWaitExistAndClick(elem);
        let pageTitleELem = $(ElementOMSHome.pageTitleElem);
        let expected = 'Line Items';
        expect(pageTitleELem.getText()).toEqual(expected);
    }
    clickOrderFromPanel() {
        let orderPanelElem = $(ElementOMSHome.orderPanelElem);
        super.syncWaitExistAndClick(orderPanelElem);
        let pageTitleELem = $(ElementOMSHome.pageTitleElem);
        let expected = 'Orders';
        browser.waitUntil(() => pageTitleELem.getText() === expected, {
            timeout: 10000,
            interval: 1000,
            timeoutMsg: 'expected text to be different after 5s',
        });
        expect(pageTitleELem.getText()).toEqual(expected);
    }

    clickProductsFromPanel() {
        let elem = $(ElementOMSHome.productsElem);
        super.syncWaitExistAndClick(elem);
        let pageTitleELem = $(ElementOMSHome.pageTitleElem);
        let expected = 'Products';
        expect(pageTitleELem.getText()).toEqual(expected);
    }
    clickShipStationFromPanel() {
        let elem = $(ElementOMSHome.shipStationOrdersElem);
        super.syncWaitExistAndClick(elem);
        let pageTitleELem = $(ElementOMSHome.pageTitleElem);
        let expected = 'Shipstation Orders';
        expect(pageTitleELem.getText()).toEqual(expected);
    }
    clickStatusMapFromPanel() {
        let elem = $(ElementOMSHome.statusMappingsElem);
        super.syncWaitExistAndClick(elem);
        let pageTitleELem = $(ElementOMSHome.pageTitleElem);
        let expected = 'Status Mappings';
        expect(pageTitleELem.getText()).toEqual(expected);

    }


}
export default new OMSHomePage();
