import Page from 'src/pages/Page';

const yaml = require('js-yaml');
const YAML = require('js-yaml');
const fs = require('fs');
const fsextra= require('fs-extra');
const path = require('path');
import {
    ElementOrder,
    ElementCheckout,
    ElementAdmin,
} from 'src/pages/elements/Elements';

// const image = fs.readFileSync('../Data/Images')
let orderValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/Order.yml', 'utf8')
);
let testValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/test.yml', 'utf8')
);
let paymentValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/Payment.yml', 'utf8')
);
let jsonOrderPath = './src/Data/Json/OrderData.json';
let testYmlPath = './src/Data/Yaml/test.yml';
class AdminSyncPage extends Page {
    syncOMSURL() {
        browser.url('/wp-admin');
        let actual = super.getTitleURL();
        super.syncDisplayTill(ElementAdmin.dashboardElem);
        expect(actual.title).toContain(ElementAdmin.title);
        expect(actual.url).toContain(ElementAdmin.url);
    }

    clickWooCommerceMenu() {
        let woocommerceElem = $(ElementAdmin.wooCommerceElem);
        woocommerceElem.scrollIntoView();
        expect(woocommerceElem).toBeVisible({ wait: 5000 });
        woocommerceElem.waitForClickable();
        woocommerceElem.click();
    }
    clickOrderMenu() {
        let ordersLiElem = $(ElementAdmin.ordersLiElem);
        expect(ordersLiElem).toBeVisible({ wait: 5000 });
        ordersLiElem.click();
    }
    openAppliedOrder(value) {
        let jsonOrder = super.syncJsonRead(jsonOrderPath);
        let yamlOrder = jsonOrder['order_num'];
        let selectOrderElem = $(
            "//strong[contains(text(),'" + yamlOrder + "')]"
        );
        selectOrderElem.waitForClickable();
        selectOrderElem.click();
    }

    clickUpdateButton() {
        let updateButtonElem = $(ElementAdmin.updateButtonElem);
        updateButtonElem.waitForExist();
        updateButtonElem.scrollIntoView();
        updateButtonElem.waitForClickable();
        updateButtonElem.click();
    }
    clickEditBillingButton(){
        let billingEditIconElem = $(ElementAdmin.billingEditIconElem);
        super.syncWaitExistAndClick(billingEditIconElem);

    }
    clickEditShippingButton(){
        let shippingEditIconElem = $(ElementAdmin.shippingEditIconElem);
        super.syncWaitExistAndClick(shippingEditIconElem);
    }
    getBillingFirstName(){
        let billingFirstNameElem = $(ElementAdmin.billingfirstNameElem);
        let billingFirstNameText = billingFirstNameElem.getAttribute("value");
        super.syncJSonUpdate(jsonOrderPath,{billing_firstName: billingFirstNameText});

    }
    async readOrderJSONAndYAMLWrite(){
        let parsed = await super.syncJsonRead(jsonOrderPath)
        let obj = {Orderdata:parsed}
        await super.syncWriteYaml(testYmlPath, obj);
        let reader = testValue['Orderdata']['first_name'];
        console.log("reader"+reader);
    }

}
export default new AdminSyncPage();
