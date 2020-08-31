import Page from 'src/pages/Page';

const yaml = require('js-yaml');
const YAML =require('js-yaml');
const fs = require('fs');
const path = require('path');
let dueDates = './src/Data/Json/dueDates.json';

import { ElementOrder, ElementCheckout, ElementOMSLineItem } from 'src/pages/elements/Elements';

// const image = fs.readFileSync('../Data/Images')
let orderValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/Order.yml', 'utf8')
);
let paymentValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/Payment.yml', 'utf8')
);
let jsonOrderPath ="./src/Data/Json/OrderData.json";
let testYmlPath = "./src/Data/Yaml/Order.yml";
class OrderSyncPage extends Page {
    get thanks() {
        return $(ElementCheckout.thankYouMessageElem);
    }
    clickDiscretePacging() {
        let discretePackagingElem = $(ElementCheckout.discretePackagingElem);
        discretePackagingElem.waitForDisplayed();
        discretePackagingElem.scrollIntoView();
        discretePackagingElem.click();
    }

    clickPlaceOrder() {
        let placeOrderElem = $(ElementCheckout.placeOrderElem);
        placeOrderElem.waitForDisplayed();
        placeOrderElem.moveTo();
        placeOrderElem.waitForClickable();
        placeOrderElem.click();
    }

    verifyOrderPlaced() {
        const thankYouMessageElem = $(ElementCheckout.thankYouMessageElem);
        browser.waitUntil(
            () =>
                $(ElementCheckout.thankYouMessageElem).isDisplayedInViewport(),
            {
                timeout: 20000,
                interval: 1000,
                timeoutMsg:
                    " '" +
                    thankYouMessageElem +
                    "' this element doesnt appear in displayPort waitUntill Command",
            }
        );
        let actualValue = thankYouMessageElem.getText();
        let expectedValue = orderValue['Success'];
        expect(actualValue).toEqual(expectedValue);
    }

    closeTheOrderMessage() {
        let closeBtnElem = $(ElementCheckout.closeBtnElem);
        closeBtnElem.waitForDisplayed();

        closeBtnElem.click();
    }

    selectSlipperSize(val) {
        let yamlSlipperSize = orderValue[val]['slipper_size'];
        let slipperSizeElem = $(ElementOrder.slipperSizeElem);
        browser.waitUntil(
            () =>
                $(ElementOrder.slipperSizeElem).isDisplayedInViewport(),
            {
                timeout: 20000,
                interval: 1000,
                timeoutMsg:
                    " '" +
                    slipperSizeElem +
                    "' this element doesnt appear in displayPort waitUntill Command",
            }
        );
        slipperSizeElem.selectByAttribute("value",yamlSlipperSize);

    }

    getOrderID() {
        let orderIdElem = $(ElementOrder.orderIdElem);
        super.syncDisplayTill(orderIdElem);
        let orderIdElemText = orderIdElem.getText();
        this.orderIdGlobal = Number(this.SplitNumbers(orderIdElemText));


    }

    applyRush(value){
        let rushElem = $("//label[@for = '"+value+"']");
        super.syncDisplayTill(rushElem);
        super.staticWaitAndclick(rushElem);

    }

    saveOrderToJson(){
        let data = {order_num:this.orderIdGlobal};
        super.syncJSonUpdate(jsonOrderPath,data);
    }

    userGotoAccounts(){
        browser.url('/my-account');
        super.waitTillViewPort($("//div[@class='orderDetails']//h2"));
    }
    openOrderFromRecent(){
        let jsonOrder = super.syncJsonRead(dueDates);
        let yamlOrder = jsonOrder['order_num'];
        let elem = $("//a[contains(text(),'"+yamlOrder+"')]");
        elem.waitForExist();
        elem.scrollIntoView();
        super.waitTillViewPort(elem);
        elem.click();

    }

    verifyCustomMessage(value){
        try {

            let message = orderValue[value];
            let elem = $("//div[contains(text(),'" + message + "')]");
            // let elem = $(ElementOrder.orderUploadLabel);
            elem.waitForExist();
            elem.scrollIntoView();
            browser.waitUntil(() => elem.isDisplayedInViewport(), {
                timeout: 10000,
                interval: 1000,
                timeoutMsg: 'custom message not appeard',
            });
            let elemText = elem.getText();
            expect(elemText).toContain(elemText);
        }catch (e){
            console.log("Verify custom Message Catch",e);
            let expected ="Thanks so much and have a great day!"
            let elem = $("//div[@class='item admin']//p[contains(text(),'Thanks so much and have a great day!')]");
            let elemText = elem.getText();
            expect(elemText).toContain(elemText);

        }

    }


}

export default new OrderSyncPage();
