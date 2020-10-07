import Page from 'src/pages/Page';
import {
    ElementOMSLineItem,
    ElementOMSOrder,
    ElementOrder,
} from 'src/pages/elements/Elements';
import { FilePath } from 'src/pages/elements/FilePath';

const yaml = require('js-yaml');
const fs = require('fs');
const moment = require('moment-business-days');

// const image = fs.readFileSync('../Data/Images')
let orderValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/Order.yml', 'utf8')
);
let rolesValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/Roles.yml', 'utf8')
);
let calendarValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/chineseholidays.yml', 'utf8')
);

let dueDates = './src/Data/Json/dueDates.json';
let jsonOrderPath = FilePath.ApiJson;

let globalRush;
let orderDate;
class OMSDueDatesPage extends Page {
    getRushOrderID() {
        let orderIdElem = $(ElementOrder.orderIdElem);
        super.syncDisplayTill(orderIdElem);
        let orderIdElemText = orderIdElem.getText();
        let orderText = super.SplitNumbers(orderIdElemText);
    }
    clickOrderFromTable() {
        let jsonOrder = super.syncJsonRead(dueDates);
        let yamlOrder = jsonOrder['order_num'];
        let orderElem = $("//a[contains(text(),'" + yamlOrder + "')]");
        super.syncWaitExistAndClick(orderElem);
        let orderCreatedDate = $("//input[@id='order_date_created']");
        let orderCreatedDateText = super.syncWaitExistAndText(orderCreatedDate);
        let x = orderCreatedDateText.split(' ');
        console.log(x[0]);

        let lineItemelem = $("//td[@class='col col-item_number']//a");
        // let lineItemText = lineItemelem.getText();

        // super.syncJSonUpdate(dueDates, { line_item: lineItemText });
        // super.syncJSonUpdate(dueDates, { order_created_date: x[0] });
    }
    clickSelectLineItemDue() {
        let jsonOrder = super.syncJsonRead(dueDates);
        let yamlItem = jsonOrder['line_item'];
        let lineElem = $("//a[contains(text(),'" + yamlItem + "')]");
        super.syncWaitExistAndClick(lineElem);
    }
    getRushSelectItem(value) {
        let rushValue = ''+value+' Weeks';

        let selectOrder = $(ElementOMSOrder.rushSelectOrderElem);
        selectOrder.waitForExist();
        selectOrder.selectByVisibleText(rushValue);

    }

    getRushWeeks() {
        let elem = $(ElementOMSLineItem.lineRushWeeks);
        elem.waitForExist();
        console.log(elem.getText());
        if (elem.getText().includes('None')) {
            globalRush = 'no_rush';
        } else {
            globalRush = elem.getText();
        }
    }

    clickFullfilmentDates() {
        let elem = $(ElementOMSLineItem.lineFulfillmentDates);
        super.syncWaitExistAndClick(elem);
    }
    chineseHolidays(value) {
        // let yamlDate = jsonOrder['order_created_date'];
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlDate = omsValue['OrderDate']['date_created'];
        let substract = value - 1;

        let chinese_holidays = calendarValue['calendar2020'];
        console.log(chinese_holidays);
        moment.updateLocale('us', {
            holidays: chinese_holidays,
            holidayFormat: 'DDMMM',
            // nextBusinessDayLimit: 31
        });
        return moment(yamlDate, 'YYYY-MM-DD')
            .businessAdd(value)
            .format('YYYY-MM-DD');
    }

    addDates(value) {
        // let jsonOrder = super.syncJsonRead(dueDates);
        // let yamlDate: number = jsonOrder['order_created_date'];
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlDate = omsValue['OrderDate']['date_created'];
        let substract = value - 1;
        return moment(yamlDate, 'YYYY-MM-DD')
            .add('days', substract)
            .format('YYYY-MM-DD');
    }
    verificationofDates(value, rush) {
        let yamlValue = rolesValue[value]['item_status'];
        let daysValue = rolesValue[value]['days'];
        let rushValues = rolesValue[value][rush];
        console.log('yAmlValue', daysValue);
        console.log('rush', rushValues);

        switch (yamlValue) {
            case 'Patterns Assigned': {
                let dates = this.chineseHolidays(daysValue);
                let elem = $(
                    ElementOMSLineItem.linewhiteCloneCompletedexpectedElem
                );
                let elemText = super.syncWaitExistAndText(elem);
                super.syncVerifyContainElem(elem, elemText, dates);
                break;
            }
            case 'Airbrushing Assigned': {
                let dates = moment().get('date');
                let elem = $(
                    ElementOMSLineItem.linewhiteCloneCompletedactualElem
                );
                let elemText = super.syncWaitExistAndText(elem);
                super.syncVerifyContainElem(elem, elemText, dates);
                break;
            }
            case 'Shipped': {
                let dates = moment().get('date');
                let elem = $(
                    ElementOMSLineItem.lineshipFromHqToCustomeractulElem
                );
                let elemText = super.syncWaitExistAndText(elem);
                super.syncVerifyContainElem(elem, elemText, dates);
                break;
            }
            case 'Approved': {
                let dates = moment().get('date');
                let elem = $(
                    ElementOMSLineItem.linepassQualityInspectionactualElem
                );
                let elemText = super.syncWaitExistAndText(elem);
                super.syncVerifyContainElem(elem, elemText, dates);
                break;
            }
            case 'Approved with Changes': {
                let dates = moment().get('date');
                let elem = $(
                    ElementOMSLineItem.linepassQualityInspectionactualElem
                );
                let elemText = super.syncWaitExistAndText(elem);
                super.syncVerifyContainElem(elem, elemText, dates);
                break;
            }
            case 'Ship from china to hq expected': {
                let dates = this.addDates(rushValues);
                let elem = $(
                    ElementOMSLineItem.lineshipFromChinaToHqexpectedElem
                );
                let elemText = super.syncWaitExistAndText(elem);
                console.log(elemText, 'is Actual');
                console.log(dates, 'is get dates');

                super.syncVerifyContainElem(elem, elemText, dates);
                break;
            }
            case 'Ship from hq to customer expected': {
                let dates = this.addDates(rushValues);
                let elem = $(
                    ElementOMSLineItem.lineshipFromHqToCustomerexpectedElem
                );
                let elemText = super.syncWaitExistAndText(elem);
                super.syncVerifyContainElem(elem, elemText, dates);
                break;
            }
            default: {
                console.log('No Dates');
                break;
            }
        }
    }

    clickOnRequestBuilder(){
        let elem = $(ElementOMSLineItem.lineRequestBuilder);
        super.syncWaitExistAndClick(elem);
        expect(elem).toBeVisible();
    }
    clickOnNewRequestButton(){
        let elem = $(ElementOMSLineItem.newRequestElem);
        super.syncWaitExistAndClick(elem);
        expect(elem).toBeVisible();
    }
    clickOnCustomMessage(){
        let elem = $(ElementOMSLineItem.customMessageElem);
        super.syncWaitExistAndClick(elem);

    }
    enterTextMessage(value){
        let message = orderValue[value];
        let elem = $(ElementOMSLineItem.textElem);
        super.syncWaitExistAndEnter(elem,message);
    }
    clickConfirmBtn(){
        let elem = $(ElementOMSLineItem.createBtnElem);
        super.syncWaitExistAndClick(elem);
    }

    clickSendEmail(){
        let elem = $(ElementOMSLineItem.sendEmailElem);
        super.syncWaitExistAndClick(elem);
    }
    verifySuccessEmailSentMessage(){
        let elem = $(ElementOMSLineItem.requestBuilderSuccessfulElem);
        let expected = "Request Successfully"
        browser.waitUntil(() => elem.getText().includes(expected) , {
            timeout: 10000,
            interval: 1000,
            timeoutMsg: 'expected text to be different after 5s',
        });
        let elemText = super.syncWaitExistAndText(elem);
        super.syncVerifyContainElem(elem,elemText,expected);

    }
    verifySuccessRequestAlert(){
        let elem = $(ElementOMSLineItem.requestBuilderSuccessfulElem);
        let expected = "successfully created."

        browser.waitUntil(() => elem.getText().includes(expected) , {
            timeout: 10000,
            interval: 1000,
            timeoutMsg: 'expected text to be different after 5s',
        });
        let elemText = super.syncWaitExistAndText(elem);

        super.syncVerifyContainElem(elem,elemText,expected);

    }


}
export default new OMSDueDatesPage();
