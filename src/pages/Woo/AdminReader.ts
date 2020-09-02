import Page from 'src/pages/Page';

const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
import { ElementOrder, ElementCheckout, ElementAdmin } from 'src/pages/elements/Elements';
import { FilePath } from 'src/pages/elements/FilePath';
let jsonOrderPath = './src/Data/Json/updateAdminData.json';
let omsValue = yaml.safeLoad(
    fs.readFileSync(FilePath.OmsYaml, 'utf8')
);

class AdminReader extends Page {
    public globalKey:string = "update";
    saveSecondOrderAdminJson(){
        let jsonRead = super.syncJsonRead(jsonOrderPath);
        let orderValue= jsonRead['order_num'];
        let orderStatic = $("//strong[contains(text(),'"+orderValue+"')]");
        let orderStaticValue= orderStatic.getText();
        let value = this.SplitNumbers(orderStaticValue);
        let data = {order_num:value};
        super.syncJSonUpdate(jsonOrderPath,data);

        super.syncWaitExistAndClick(orderStatic);
        browser.pause(2000);

    }
    getOrderID(){

        let orderElem = $("//tr[2]//td[2]//a[1]");
        let orderElemText = orderElem.getText();
        super.syncWaitExistAndClick(orderElem);
        super.syncJSonUpdate(jsonOrderPath,{order_num: orderElemText});

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


    //todo shipping

    verifyBillingFirstName(value){
        let yamlExpected = omsValue[value]['billing_firstName'];

        let billingFirstNameElem = $(ElementAdmin.billingfirstNameElem);
        let billingFirstNameText = billingFirstNameElem.getAttribute("value");
        super.syncVerifyContainElem(billingFirstNameElem,billingFirstNameText,yamlExpected);

    }
    verifyBillingLastName(value){

        let yamlExpected = omsValue[value]['billing_lastname'];

        let billingLastNameElem = $(ElementAdmin.billingLastNameElem);
        let billingLastNameElemText = billingLastNameElem.getAttribute("value");

        super.syncVerifyContainElem(billingLastNameElem,billingLastNameElemText,yamlExpected);

    }
// verifyBillingCompany(value){
//   let billingLastNameElem = $(ElementAdmin.billingCompanyElem);
//   let billingLastNameText = billingLastNameElem.getAttribute("value");
//   super.syncJSonUpdate(jsonOrderPath,{billing_company: billingLastNameText});

// }
    verifyBillingAddressLine1(value){
        let yamlExpected = omsValue[value]['billing_address_line1'];

        let elem = $(ElementAdmin.billingAddressLine1Elem);
        let elemText = elem.getAttribute("value");
        super.syncVerifyContainElem(elem,elemText,yamlExpected);

    }
    verifyBillingCity(value){
        let yamlExpected = omsValue[value]['billing_city'];

        let elem = $(ElementAdmin.billingCityElem);
        let elemText = elem.getAttribute("value");
        super.syncVerifyContainElem(elem,elemText,yamlExpected);

    }
    verifyBillingAddressLine2(value){
        let yamlExpected = omsValue[value]['billing_address_line2'];

        let elem = $(ElementAdmin.billingAddressLine2Elem);
        let elemText = elem.getAttribute("value");
        super.syncVerifyContainElem(elem,elemText,yamlExpected);

    }

    verifyBillingPostalCode(value){
        let yamlExpected = omsValue[value]['billing_postal_code'];
        let elem = $(ElementAdmin.billingPostcodeZIPElem);
        let elemText = elem.getAttribute("value");
        super.syncVerifyContainElem(elem,elemText,yamlExpected);

    }
    verifyBillingCountry(value){
        let yamlExpected = omsValue[value]['billing_country'];
        let regExp = /\(([^)]+)\)/;
        let yamlExpectedSlice = regExp.exec(yamlExpected);
        let elem = $(ElementAdmin.billingSelectCountryElem);
        let elemText = elem.getText();
        super.syncVerifyContainElem(elem,elemText,yamlExpectedSlice[1]);

    }
// verifyBillingCountryState(value){
//   let yamlExpected = omsValue[value]['billing_state'];
//   let elem = $(ElementAdmin.billingStateCountryElem);
//   let elemText = elem.getText();
//   let global = "key" ;
//   let obj:{}={
//   }
//   super.syncJSonUpdate(jsonOrderPath,{billing_state: elemText});

// }

    verifyBillingEmailAddress(value){
        let yamlExpected = omsValue[value]['billing_email'];

        let elem = $(ElementAdmin.billingEmailAddressElem);
        let elemText = elem.getAttribute("value");
        super.syncVerifyContainElem(elem,elemText,yamlExpected);

    }
    verifyBillingPhone(value){
        let yamlExpected = omsValue[value]['billing_phone'];

        let elem = $(ElementAdmin.billingPhoneElem);
        let elemText = elem.getAttribute("value");
        super.syncVerifyContainElem(elem,elemText,yamlExpected);

    }







    verifyShippingFirstName(value){
        let yamlExpected = omsValue[value]['shipping_firstName'];

        let shippingFirstNameElem = $(ElementAdmin.shippingFirstNameElem);
        let shippingFirstNameText = shippingFirstNameElem.getAttribute("value");
        super.syncVerifyContainElem(shippingFirstNameElem,shippingFirstNameText,yamlExpected);

    }
    verifyShippingLastName(value){
        let yamlExpected = omsValue[value]['shipping_lastname'];

        let shippingLastNameElem = $(ElementAdmin.shippingLastNameElem);
        let shippingLastNameText = shippingLastNameElem.getAttribute("value");
        super.syncVerifyContainElem(shippingLastNameElem,shippingLastNameText,yamlExpected);


    }
    verifyShippingAddressLine1(value){
        let yamlExpected = omsValue[value]['shipping_address_line1'];

        let elem = $(ElementAdmin.shippingAddressLine1Elem);
        let elemText = elem.getAttribute("value");
        super.syncVerifyContainElem(elem,elemText,yamlExpected);

    }

    verifyShippingCity(value){
        let yamlExpected = omsValue[value]['shipping_city'];

        let elem = $(ElementAdmin.shippingCityElem);
        let elemText = elem.getAttribute("value");
        super.syncVerifyContainElem(elem,elemText,yamlExpected);

    }
    verifyShippingAddressLine2(value){
        let yamlExpected = omsValue[value]['billing_address_line2'];

        let elem = $(ElementAdmin.billingAddressLine2Elem);
        let elemText = elem.getAttribute("value");
        super.syncVerifyContainElem(elem,elemText,yamlExpected);

    }

    verifyShippingPostalCode(value){
        let yamlExpected = omsValue[value]['shipping_postal_code'];

        let elem = $(ElementAdmin.shippingPostcodeZIPElem);
        let elemText = elem.getAttribute("value");
        super.syncVerifyContainElem(elem,elemText,yamlExpected);

    }
    verifyShippingCountry(value){
        let yamlExpected = omsValue[value]['shipping_country'];
        console.log("shippingValue",yamlExpected);
        let regExp = /\(([^)]+)\)/;
        let yamlExpectedSlice = regExp.exec(yamlExpected);
        let elem = $(ElementAdmin.shippingSelectCountryElem);
        let elemText = elem.getText();
        console.log("shippingValue")
        // super.syncVerifyContainElem(elem,elemText,yamlExpectedSlice[1]);

    }




}
export default new AdminReader();