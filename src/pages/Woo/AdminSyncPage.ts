import Page from 'src/pages/Page';
import { ElementAdmin } from 'src/pages/elements/Elements';
import { FilePath } from 'src/pages/elements/FilePath';

const yaml = require('js-yaml');
const YAML = require('js-yaml');
const fs = require('fs');
const fsextra= require('fs-extra');
const path = require('path');

// const image = fs.readFileSync('../Data/Images')
let orderValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/Order.yml', 'utf8')
);
let rolesValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/Roles.yml', 'utf8')
);
let testValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/OMSData.yml', 'utf8')
);
let paymentValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/Payment.yml', 'utf8')
);
let pathValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/paths.yml', 'utf8')
);
let jsonOrderPath = FilePath.ApiJson;

let OmsData = './src/Data/Json/OmsData.json';

let testYmlPath = './src/Data/Yaml/OMSData.yml';
let staticYmlPath = './src/Data/Yaml/StaticOms.yml';

class AdminSyncPage extends Page {
    // jsonReader = super.syncJsonRead(jsonOrderPath);

    syncWooAdminURL() {
        try {

            browser.newWindow('/wp-admin');
            let actual = super.getTitleURL();
            super.syncDisplayTill(ElementAdmin.dashboardElem);
            expect(actual.title).toContain(ElementAdmin.title);
            expect(actual.url).toContain(ElementAdmin.url);

        } catch (e) {
            console.log("Wooadmin syncWooAdminURL" + e);
        }
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
        expect(ordersLiElem).toBeVisible({ wait: 10000 });
        ordersLiElem.click();
    }
    openAppliedOrder(value) {
        try{
        let jsonOrder = super.syncJsonRead(jsonOrderPath);
        let yamlOrder = jsonOrder[value]['order_num'];
        let selectOrderElem = $(
            "//strong[contains(text(),'" + yamlOrder + "')]"
        );
        selectOrderElem.waitForClickable();
        selectOrderElem.click();
        }
        catch (e){
            console.log("orderApplied");
            let order = this.staticOrderIDGlobal;
            let selectOrderElem = $(
                "//strong[contains(text(),'" + order + "')]"
            );
            selectOrderElem.waitForClickable();
            selectOrderElem.click();

        }
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
    getOrderDateCreated(){
        let orderDateElem = $(ElementAdmin.orderDateElem);
        let orderDateText = orderDateElem.getAttribute("value");
        super.syncJSonUpdate(jsonOrderPath,{order_created_date: orderDateText});

    }
    getBillingFirstName(){
        let billingFirstNameElem = $(ElementAdmin.billingfirstNameElem);
        let billingFirstNameText = billingFirstNameElem.getAttribute("value");
        super.syncJSonUpdate(jsonOrderPath,{billing_firstName: billingFirstNameText});

    }
    getBillingLastName(){
        let billingLastNameElem = $(ElementAdmin.billingLastNameElem);
        let billingLastNameText = billingLastNameElem.getAttribute("value");
        super.syncJSonUpdate(jsonOrderPath,{billing_lastname: billingLastNameText});

    }
    getBillingCompany(){
        let billingLastNameElem = $(ElementAdmin.billingCompanyElem);
        let billingLastNameText = billingLastNameElem.getAttribute("value");
        super.syncJSonUpdate(jsonOrderPath,{billing_company: billingLastNameText});

    }
    getBillingAddressLine1(){
        let elem = $(ElementAdmin.billingAddressLine1Elem);
        let elemText = elem.getAttribute("value");
        super.syncJSonUpdate(jsonOrderPath,{billing_address_line1: elemText});

    }
    getBillingCity(){
        let elem = $(ElementAdmin.billingCityElem);
        let elemText = elem.getAttribute("value");
        super.syncJSonUpdate(jsonOrderPath,{billing_city: elemText});

    }
    getBillingAddressLine2(){
        let elem = $(ElementAdmin.billingAddressLine2Elem);
        let elemText = elem.getAttribute("value");
        super.syncJSonUpdate(jsonOrderPath,{billing_address_line2: elemText});

    }

    getBillingPostalCode(){
        let elem = $(ElementAdmin.billingPostcodeZIPElem);
        let elemText = elem.getAttribute("value");
        super.syncJSonUpdate(jsonOrderPath,{billing_postal_code: elemText});

    }
    getBillingCountry(){
        let elem = $(ElementAdmin.billingSelectCountryElem);
        let elemText = elem.getText();
        super.syncJSonUpdate(jsonOrderPath,{billing_country: elemText});

    }
    getBillingCountryState(){
        let elem = $(ElementAdmin.billingStateCountryElem);
        let elemText = elem.getText();
        let global = "key" ;
        let obj:{}={
        }
        super.syncJSonUpdate(jsonOrderPath,{billing_state: elemText});

    }
    getBillingEmailAddress(){
        let elem = $(ElementAdmin.billingEmailAddressElem);
        let elemText = elem.getAttribute("value");
        super.syncJSonUpdate(jsonOrderPath,{billing_email: elemText});

    }
    getBillingPhone(){
        let elem = $(ElementAdmin.billingPhoneElem);
        let elemText = elem.getAttribute("value");
        super.syncJSonUpdate(jsonOrderPath,{billing_phone: elemText});

    }
    getBillingPayment(){
        let elem = $(ElementAdmin.billingDebitCreditAffirElem);
        let elemText = elem.getAttribute("value");
        super.syncJSonUpdate(jsonOrderPath,{billing_payment_method: elemText});

    }
    getBillingTransaction(){
        let elem = $(ElementAdmin.billingTransactionIDElem);
        let elemText = elem.getAttribute("value");
        super.syncJSonUpdate(jsonOrderPath,{billing_transaction: elemText});

    }


    clickEditShippingButton(){
        let shippingEditIconElem = $(ElementAdmin.shippingEditIconElem);
        super.syncWaitExistAndClick(shippingEditIconElem);
    }


    getShippingFirstName(){
        let shippingFirstNameElem = $(ElementAdmin.shippingFirstNameElem);
        let shippingFirstNameText = shippingFirstNameElem.getAttribute("value");
        super.syncJSonUpdate(jsonOrderPath,{shipping_firstName: shippingFirstNameText});

    }
    getShippingLastName(){
        let shippingLastNameElem = $(ElementAdmin.shippingLastNameElem);
        let shippingLastNameText = shippingLastNameElem.getAttribute("value");
        super.syncJSonUpdate(jsonOrderPath,{shipping_lastname: shippingLastNameText});

    }
    getShippingAddressLine1(){
        let elem = $(ElementAdmin.shippingAddressLine1Elem);
        let elemText = elem.getAttribute("value");
        super.syncJSonUpdate(jsonOrderPath,{shipping_address_line1: elemText});

    }
    getShippingCity(){
        let elem = $(ElementAdmin.shippingCityElem);
        let elemText = elem.getAttribute("value");
        super.syncJSonUpdate(jsonOrderPath,{shipping_city: elemText});

    }
    getShippingAddressLine2(){
        let elem = $(ElementAdmin.billingAddressLine2Elem);
        let elemText = elem.getAttribute("value");
        super.syncJSonUpdate(jsonOrderPath,{billing_address_line2: elemText});

    }

    getShippingPostalCode(){
        let elem = $(ElementAdmin.shippingPostcodeZIPElem);
        let elemText = elem.getAttribute("value");
        super.syncJSonUpdate(jsonOrderPath,{shipping_postal_code: elemText});

    }
    getShippingCountry(){
        let elem = $(ElementAdmin.shippingSelectCountryElem);
        let elemText = elem.getText();
        super.syncJSonUpdate(jsonOrderPath,{shipping_country: elemText});

    }
    getShippingState(){
        let elem = $(ElementAdmin.shippingStateCountyElem);
        let elemText = elem.getText();
        super.syncJSonUpdate(jsonOrderPath,{shipping_state: elemText});
    }
    getLineItemValue(){
        let elem = $(ElementAdmin.lineItemFirstElem);
        let elemText = elem.getText();

        let LineItemValue = super.SplitNumbers(elemText);
        super.syncJSonUpdate(jsonOrderPath,{line_item: LineItemValue});
    }

    getOmsItemStatus(value){
        let yamlValue = rolesValue[value]['oms_status'];

        let elem = $(ElementAdmin.orderOMSItemStatus);
        let elemText = elem.getText();

        super.syncVerifyContainElem(elem,elemText,yamlValue);

    }

    getWooItemStatus(value){
        let yamlValue = rolesValue[value]['woo_status'];

        let elem = $(ElementAdmin.orderWooItemStatus);
        let elemText = elem.getText();
        super.syncVerifyContainElem(elem,elemText,yamlValue);

    }

    omsOrderItem(value){
       let jsonReader = super.syncJsonRead(jsonOrderPath);

        let orderValue  = jsonReader[value]['id'];

        let orderStatic = $("//a[contains(text(),'"+orderValue+"')]");
        orderStatic.waitForExist();
        orderStatic.scrollIntoView();
        orderStatic.waitForClickable();
        browser.pause(2000);
        orderStatic.click();

    }



    saveOrderAdminJson(){
       let orderStatic = $("//tr[1]//td[1]//a[2]//strong[1]");
       orderStatic.waitForExist();
        orderStatic.scrollIntoView();
        orderStatic.waitForClickable();
       browser.pause(2000);
       let orderStaticValue= orderStatic.getText();
        orderStatic.click();

        this.staticOrderIDGlobal = this.SplitNumbers(orderStaticValue);
         console.log("staticOD",this.staticOrderIDGlobal)
        super.syncJSonUpdate(jsonOrderPath,{order_num:this.staticOrderIDGlobal});
    }

    saveOrderAdminJson2(text){
        let yamlValue = pathValue[text]['id'];
        let orderStatic = $("//tr['"+yamlValue+"']//td[1]//a[2]//strong[1]");
        orderStatic.waitForExist();
        orderStatic.scrollIntoView();
        orderStatic.waitForClickable();
        browser.pause(2000);
        let orderStaticValue= orderStatic.getText();
        orderStatic.click();

        let value = this.SplitNumbers(orderStaticValue);
        let data = {order_num:value};
        let yamlValuepath = pathValue[text]['jsonFile'];

        super.syncJSonUpdate(yamlValuepath,data);
    }

    async readOrderJSONAndYAMLWrite(){
        let parsed = await super.syncJsonRead(jsonOrderPath)
        let obj = {OrderData:parsed}
        await super.syncWriteYaml(testYmlPath, obj);
    }
    async readOrderJSONAndYAMLWriteStatic(){
        let parsed = await super.syncJsonRead(jsonOrderPath)
        let obj = {OrderData:parsed}
        await super.syncWriteYaml(staticYmlPath, obj);
    }

    async readJSONAndYAMLWrite(text){
        let yamlValuePath = pathValue[text]['jsonFile'];

        let yamlValue = pathValue[text]['yamlFile'];
        super.syncJSonUpdate(yamlValuePath,{test:"Update"});
        let parsed = await super.syncJsonRead(yamlValuePath)
        let obj = {OrderData:parsed}
        await super.syncWriteYaml(yamlValue, obj);
    }


}
export default new AdminSyncPage();
