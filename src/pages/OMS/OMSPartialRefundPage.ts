import Page from 'src/pages/Page';
import { ElementAdmin, ElementOMSLineItem, ElementOrder } from 'src/pages/elements/Elements';
import { FilePath } from 'src/pages/elements/FilePath';

const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

// const image = fs.readFileSync('../Data/Images')
let orderValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/Order.yml', 'utf8')
);
let rolesValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/Roles.yml', 'utf8')
);
let refund = './src/Data/Json/refundData.json';
let jsonOrderPath = FilePath.ApiJson;
class OMSPartialRefundPage extends Page {

    getRushOrderID() {
        let orderIdElem = $(ElementOrder.orderIdElem);
        super.syncDisplayTill(orderIdElem);
        let orderIdElemText = orderIdElem.getText();
        let orderText = super.SplitNumbers(orderIdElemText);
        super.syncJSonUpdate(refund, { order_num: orderText });
    }

    clickOrderFromTable() {
        let jsonOrder = super.syncJsonRead(refund);
        let yamlOrder = jsonOrder['order_num'];
        let orderElem = $("//a[contains(text(),'" + yamlOrder + "')]");
        super.syncWaitExistAndClick(orderElem);
        let orderCreatedDate = $("//input[@id='order_date_created']");
        let orderCreatedDateText = super.syncWaitExistAndText(orderCreatedDate);
        let x = orderCreatedDateText.split(' ');
        console.log(x[0]);

        let lineItemelem = $("//tr[@class='odd']//td[@class='col col-item_number']//a");
        let lineItemelem2 = $("//tr[@class='even']//td[@class='col col-item_number']//a");
        let lineItemText = lineItemelem.getText();
        let lineItem2Text= lineItemelem2.getText();
        super.syncJSonUpdate(refund, { line_item: lineItemText });
        super.syncJSonUpdate(refund, { line_item2: lineItem2Text });
        super.syncJSonUpdate(refund, { order_created_date: x[0] });
    }

    clickSelectLineItemDue() {
        // let jsonOrder = super.syncJsonRead(refund);
        // let omsValue = super.syncJsonRead(jsonOrderPath);
        // let lineID = omsValue[value]['line_items'][0]['id'];
        //
        // let yamlItem = jsonOrder['line_item'];
        // globalLineItem =yamlItem;
        // let lineElem = $("//a[contains(text(),'" + yamlItem + "')]");
        // super.syncWaitExistAndClick(lineElem);
    }
    clickSelect2ndLineITemDue(){
        let jsonOrder = super.syncJsonRead(refund);
        let yamlItem = jsonOrder['line_item2'];
        let lineElem = $("//a[contains(text(),'" + yamlItem + "')]");
        super.syncWaitExistAndClick(lineElem);

    }

    verifyRefundAmount(){
            let elem = $("//td[@class='col col-amount'][contains(text(),'111')]")

    }
    // lineRefundOrderElem: "//a[contains(text(),'New Refund')]",
    // lineReasonOrderElem: "//input[@id='refund_reason']",
    // lineAmountOrderElem: "//input[@id='refund_amount']",
    // lineCreateRefundBtn: "//input[@name='commit']",
    // lineRefundTotalAmount: "//p[@class='inline-hints']",
    clickNewRefundButton(){
        let elem = $(ElementOMSLineItem.lineRefundOrderElem);
        super.syncWaitExistAndClick(elem);

    }
    enterReasonRefund(){
        let elem = $(ElementOMSLineItem.lineReasonOrderElem);
        let text = "automated verify refund ";
        super.syncWaitExistAndEnter(elem,text)
    }

    enterAmountRefund(){
        let elem =$(ElementOMSLineItem.lineRefundTotalAmount);
        let elemText=elem.getText();
        let splitter = elemText
            .match(/\d+/g)
            .map(Number)
            .join();
        let parsed = parseInt(splitter);
        let totalAmount = Math.floor(parsed);
        let valueParsed = totalAmount / 2;
        super.syncJSonUpdate(refund,{refund_amount:valueParsed});
        let amountElem = $(ElementOMSLineItem.lineAmountOrderElem);
        super.syncWaitExistAndEnter(amountElem,valueParsed);

    }
    clickCreateRefund(){
        let elem = $(ElementOMSLineItem.lineCreateRefundBtn);
        super.syncWaitExistAndClick(elem);

    }
    verifyRequest(){
        let elem = $("//div[@class='flash flash_notice']");
        let elemText = elem.getText();
        let expected = "A refund request has been successfully sent"
        super.syncVerifyContainElem(elem,elemText ,expected);
        let updateBtn = $("//a[@class='nav-form-submit']");
        super.syncWaitExistAndClick(updateBtn);
    }

    staticRefundAmount(){
        let jsonOrder = super.syncJsonRead(refund);
        let yamlOrder = jsonOrder['order_num'];
            let orderStatic = $("//strong[contains(text(),'"+yamlOrder+"')]");
            orderStatic.waitForExist();
            orderStatic.scrollIntoView();
            orderStatic.waitForClickable();
            browser.pause(2000);
            orderStatic.click();

    }
    verifyRefundAdmin(){
        let jsonOrder = super.syncJsonRead(refund);
        let yamlValue = jsonOrder['refund_amount'];
        let add = parseInt(yamlValue);
        let yamlParse = add -2;
        let refundAmountStatic = $(ElementAdmin.refundAmount);
        let refundAmountText = super.syncWaitExistAndText(refundAmountStatic);
        let splitter = refundAmountText
            .match(/\d+/g)
            .map(Number)
            .join();
        let refundParse = parseFloat(splitter);

        try {
            super.syncVerifyContainElem(refundAmountStatic,refundParse,yamlValue);
        }
        catch (e){
            console.log("Refund Parse",refundParse);
            expect(refundParse).toBeGreaterThan(yamlParse);
        }
    }

    clickLineRefundBtn(){
    let elem = $(ElementOMSLineItem.lineRefundNavBtn);
    super.syncWaitExistAndClick(elem);
    }
    openWOOAdminStatusChangeOrder() {
        let jsonOrder = super.syncJsonRead(refund);
        let yamlOrder = jsonOrder['order_num'];
        let selectOrderElem = $(
            "//strong[contains(text(),'" + yamlOrder + "')]"
        );
        selectOrderElem.waitForClickable();
        selectOrderElem.click();
    }

    getOmsItemStatus(key,value){
        let yamlValue = rolesValue[value]['oms_status'];
        let omsValue = super.syncJsonRead(jsonOrderPath);
        let lineID = omsValue[key]['line_items'][0]['id'];

        let elem = $("//tbody[@id='order_line_items']/tr[@data-order_item_id ='"+lineID+"']//table[@class='display_meta']//th[.='Item Status (OMS):']//following-sibling::td");
        let elemText = elem.getText();

        super.syncVerifyContainElem(elem,elemText,yamlValue);

    }

    getWooItemStatus(key,value){
        let omsValue = super.syncJsonRead(jsonOrderPath);
        let lineID = omsValue[key]['line_items'][0]['id'];

        let yamlValue = rolesValue[value]['woo_status'];

        let elem = $("//tbody[@id='order_line_items']/tr[@data-order_item_id ='"+lineID+"']//table[@class='display_meta']//th[.='Item Status (Woocommerce):']//following-sibling::td");
        let elemText = elem.getText();
        super.syncVerifyContainElem(elem,elemText,yamlValue);

    }


    //tbody[@id='order_line_items']/tr[@data-order_item_id ="456272"]//table[@class='display_meta']//th[.='Item Status (Woocommerce):']//following-sibling::td








}
export default new OMSPartialRefundPage();