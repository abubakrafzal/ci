import Page from 'src/pages/Page';

const yaml = require('js-yaml');
const fs = require('fs');
import {
    ElementOMSOrder,
} from 'src/pages/elements/Elements';
import { FilePath } from 'src/pages/elements/FilePath';
let omsValue = yaml.safeLoad(
    fs.readFileSync(FilePath.OmsYaml, 'utf8')
);
let omsUpdateValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/OMSUpdateData.yml', 'utf8')
);
let jsonOrderPath = './src/Data/Json/OrderData.json';


class OMSOrdersPage extends Page {
    clickOrderFromTable() {
        let yamlValue = omsValue['OrderData']['order_num'];
        let jsonReader = super.syncJsonRead(jsonOrderPath);
        let yamlValue2 = jsonReader['order_num'];
        console.log("YamlValue ",yamlValue2);
        try {
            let orderElem = $("//a[contains(text(),'" + yamlValue + "')]");
            super.syncWaitExistAndClick(orderElem);
        }
        catch (e){
            let orderElem = $("//a[contains(text(),'" + yamlValue2 + "')]");
            super.syncWaitExistAndClick(orderElem);
        }

    }
    //todo

    clickEditOrderButton() {
        let billingEditIconElem = $(ElementOMSOrder.billingBarElem);
        super.syncWaitExistAndClick(billingEditIconElem);

    }

    getOrderDateCreated(value) {
        let yamlExpected = omsValue[value]['order_created_date'];
        let orderDateElem = $(ElementOMSOrder.orderDateElem);
        let actualValue = orderDateElem.getAttribute('value');
        super.syncVerifyContainElem(orderDateElem,actualValue,yamlExpected);
    }
    getBillingFirstName(value) {
        let yamlExpected = omsValue[value]['billing_firstName'];

        let billingFirstNameElem = $(ElementOMSOrder.billingfirstNameElem);
        let actualValue = billingFirstNameElem.getAttribute('value');
        super.syncVerifyContainElem(billingFirstNameElem,actualValue,yamlExpected);

    }
    getBillingLastName(value) {
        let yamlExpected = omsValue[value]['billing_lastname'];

        let billingLastNameElem = $(ElementOMSOrder.billinglastNameElem);
        let actualValue = billingLastNameElem.getAttribute('value');
        super.syncVerifyContainElem(billingLastNameElem,actualValue,yamlExpected);


    }

    getBillingAddressLine1(value) {
        let yamlExpected = omsValue[value]['billing_address_line1'];

        let elem = $(ElementOMSOrder.billingAddress1Elem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);


    }
    getBillingCity(value) {
        let yamlExpected = omsValue[value]['billing_city'];

        let elem = $(ElementOMSOrder.billingcityElem);

        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }
    getBillingAddressLine2(value) {
        let yamlExpected = omsValue[value]['billing_address_line2'];

        let elem = $(ElementOMSOrder.billingAddress2Elem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }

    getBillingPostalCode(value) {
        let yamlExpected = omsValue[value]['billing_postal_code'];

        let elem = $(ElementOMSOrder.billingpostcodeElem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }
    getBillingCountry(value) {
        let yamlExpected = omsValue[value]['billing_country'];
        let regExp = /\(([^)]+)\)/;
        let elem = $(ElementOMSOrder.billingcountryElem);
        let actualValue = elem.getAttribute('value');

        try {
            let yamlExpectedSlice = regExp.exec(yamlExpected);
            super.syncVerifyContainElem(elem,actualValue,yamlExpectedSlice[1]);
        }
        catch (e){
            let yamlExpectedSlice = yamlExpected.charAt(0);
            super.syncVerifyContainElem(elem,actualValue,yamlExpectedSlice);
        }


    }
    getBillingCountryState(value) {
        let yamlExpected = omsValue[value]['billing_state'];
        let yamlExpectedSlice = yamlExpected.match(/^.|.$/g).join('').toUpperCase();
        let elem = $(ElementOMSOrder.billingstateElem);
        let actualValue = elem.getAttribute('value');
        // super.syncVerifyContainElem(elem,actualValue,yamlExpectedSlice);

    }
    getBillingEmailAddress(value) {
        let yamlExpected = omsValue[value]['billing_email'];

        let elem = $(ElementOMSOrder.billingemailElem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }
    getBillingPhone(value) {
        let yamlExpected = omsValue[value]['billing_phone'];

        let elem = $(ElementOMSOrder.billingphoneElem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }
    getBillingPayment(value) {
        let yamlExpected = omsValue[value]['billing_payment_method'];

        let elem = $(ElementOMSOrder.paymentViaElem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }

    clickEditShippingButton() {
        let shippingEditIconElem = $(ElementOMSOrder.shippingBarElem);
        super.syncWaitExistAndClick(shippingEditIconElem);
    }

    getShippingFirstName(value) {
        let yamlExpected = omsValue[value]['shipping_firstName'];

        let shippingFirstNameElem = $(ElementOMSOrder.shippingfirstNameElem);
        let actualValue = shippingFirstNameElem.getAttribute('value');
        super.syncVerifyContainElem(shippingFirstNameElem,actualValue,yamlExpected);

    }
    getShippingLastName(value) {
        let yamlExpected = omsValue[value]['shipping_lastname'];

        let shippingLastNameElem = $(ElementOMSOrder.shippinglastNameElem);
        let actualValue = shippingLastNameElem.getAttribute('value');
        super.syncVerifyContainElem(shippingLastNameElem,actualValue,yamlExpected);

    }
    getShippingAddressLine1(value) {
        let yamlExpected = omsValue[value]['shipping_address_line1'];

        let elem = $(ElementOMSOrder.shippingaddress1Elem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }
    getShippingCity(value) {
        let yamlExpected = omsValue[value]['shipping_city'];

        let elem = $(ElementOMSOrder.shippingcityElem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }
    getShippingAddressLine2(value) {
        let yamlExpected = omsValue[value]['billing_address_line2'];

        let elem = $(ElementOMSOrder.shippingaddress2Elem);;
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }

    getShippingPostalCode(value) {
        let yamlExpected = omsValue[value]['shipping_postal_code'];

        let elem = $(ElementOMSOrder.shippingpostcodeElem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);
        browser.pause(5000);

    }
    getShippingCountry(value) {
        let yamlExpected = omsValue[value]['shipping_country'];
        let regExp = /\(([^)]+)\)/;
        let yamlExpectedSlice = regExp.exec(yamlExpected);
        let elem = $(ElementOMSOrder.shippingcountryElem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpectedSlice[1]);

    }
    getShippingState(value) {
        let yamlExpected = omsValue[value]['shipping_state'];
        let yamlExpectedSlice = yamlExpected.match(/^.|.$/g).join('').toUpperCase();


        let elem = $(ElementOMSOrder.shippingstateElem);
        let actualValue = elem.getAttribute('value');
        // super.syncVerifyContainElem(elem,actualValue,yamlExpectedSlice);

    }
    //todo stters

    setOrderDateCreated(value) {
        let yamlExpected = omsUpdateValue[value]['order_created_date'];
        let orderDateElem = $(ElementOMSOrder.orderDateElem);
        super.syncWaitExistAndEnter(orderDateElem,yamlExpected);

        let actualValue = orderDateElem.getAttribute('value');

        super.syncVerifyContainElem(orderDateElem,actualValue,yamlExpected);
    }
    setBillingFirstName(value) {
        let yamlExpected = omsUpdateValue[value]['billing_firstName'];

        let billingFirstNameElem = $(ElementOMSOrder.billingfirstNameElem);
        super.syncWaitExistAndEnter(billingFirstNameElem,yamlExpected);

        let actualValue = billingFirstNameElem.getAttribute('value');
        super.syncVerifyContainElem(billingFirstNameElem,actualValue,yamlExpected);

    }
    setBillingLastName(value) {
        let yamlExpected = omsUpdateValue[value]['billing_lastname'];

        let billingLastNameElem = $(ElementOMSOrder.billinglastNameElem);

        let actualValue = billingLastNameElem.getAttribute('value');
        super.syncVerifyContainElem(billingLastNameElem,actualValue,yamlExpected);


    }

    setBillingAddressLine1(value) {
        let yamlExpected = omsUpdateValue[value]['billing_address_line1'];

        let elem = $(ElementOMSOrder.billingAddress1Elem);
        super.syncWaitExistAndEnter(elem,yamlExpected);

        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);


    }
    setBillingCity(value) {
        let yamlExpected = omsUpdateValue[value]['billing_city'];

        let elem = $(ElementOMSOrder.billingcityElem);
        super.syncWaitExistAndEnter(elem,yamlExpected);

        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }
    setBillingAddressLine2(value) {
        let yamlExpected = omsUpdateValue[value]['billing_address_line2'];

        let elem = $(ElementOMSOrder.billingAddress2Elem);
        super.syncWaitExistAndEnter(elem,yamlExpected);

        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }

    setBillingPostalCode(value) {
        let yamlExpected = omsUpdateValue[value]['billing_postal_code'];

        let elem = $(ElementOMSOrder.billingpostcodeElem);
        super.syncWaitExistAndEnter(elem,yamlExpected);

        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }
    setBillingCountry(value) {
        let yamlExpected = omsUpdateValue[value]['billing_country'];
        let regExp = /\(([^)]+)\)/;
        let yamlExpectedSlice = regExp.exec(yamlExpected);
        let elem = $(ElementOMSOrder.billingcountryElem);
        elem.clearValue();
        browser.pause(3000);
        super.syncWaitExistAndEnter(elem,"US");

        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpectedSlice[1]);

    }
    setBillingCountryState(value) {
        let yamlExpected = omsUpdateValue[value]['billing_state'];
        let yamlExpectedSlice = yamlExpected.match(/^.|.$/g).join('').toUpperCase();
        let elem = $(ElementOMSOrder.billingstateElem);
        super.syncWaitExistAndEnter(elem,yamlExpected);

        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }
    setBillingEmailAddress(value) {
        let yamlExpected = omsUpdateValue[value]['billing_email'];

        let elem = $(ElementOMSOrder.billingemailElem);
        super.syncWaitExistAndEnter(elem,yamlExpected);

        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }
    setBillingPhone(value) {
        let yamlExpected = omsUpdateValue[value]['billing_phone'];

        let elem = $(ElementOMSOrder.billingphoneElem);
        super.syncWaitExistAndEnter(elem,yamlExpected);

        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }
    setBillingPayment(value) {
        let yamlExpected = omsUpdateValue[value]['billing_payment_method'];

        let elem = $(ElementOMSOrder.paymentViaElem);
        super.syncWaitExistAndEnter(elem,yamlExpected);

        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }


    setShippingFirstName(value) {
        let yamlExpected = omsUpdateValue[value]['shipping_firstName'];

        let shippingFirstNameElem = $(ElementOMSOrder.shippingfirstNameElem);
        super.syncWaitExistAndEnter(shippingFirstNameElem,yamlExpected);

        let actualValue = shippingFirstNameElem.getAttribute('value');
        super.syncVerifyContainElem(shippingFirstNameElem,actualValue,yamlExpected);

    }
    setShippingLastName(value) {
        let yamlExpected = omsUpdateValue[value]['shipping_lastname'];

        let shippingLastNameElem = $(ElementOMSOrder.shippinglastNameElem);
        super.syncWaitExistAndEnter(shippingLastNameElem,yamlExpected);

        let actualValue = shippingLastNameElem.getAttribute('value');
        super.syncVerifyContainElem(shippingLastNameElem,actualValue,yamlExpected);

    }
    setShippingAddressLine1(value) {
        let yamlExpected = omsUpdateValue[value]['shipping_address_line1'];

        let elem = $(ElementOMSOrder.shippingaddress1Elem);
        super.syncWaitExistAndEnter(elem,yamlExpected);

        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }
    setShippingCity(value) {
        let yamlExpected = omsUpdateValue[value]['shipping_city'];

        let elem = $(ElementOMSOrder.shippingcityElem);
        super.syncWaitExistAndEnter(elem,yamlExpected);

        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }
    setShippingAddressLine2(value) {
        let yamlExpected = omsUpdateValue[value]['billing_address_line2'];

        let elem = $(ElementOMSOrder.shippingaddress2Elem);
        super.syncWaitExistAndEnter(elem,yamlExpected);

        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }

    setShippingPostalCode(value) {
        let yamlExpected = omsUpdateValue[value]['shipping_postal_code'];

        let elem = $(ElementOMSOrder.shippingpostcodeElem);
        super.syncWaitExistAndEnter(elem,yamlExpected);

        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);
        browser.pause(10000);

    }
    setShippingCountry(value) {
        let yamlExpected = omsUpdateValue[value]['shipping_country'];
        let regExp = /\(([^)]+)\)/;
        let yamlExpectedSlice = regExp.exec(yamlExpected);

        let elem = $(ElementOMSOrder.shippingcountryElem);
        elem.clearValue();
        browser.pause(3000);

        super.syncWaitExistAndEnter(elem,"UK");

        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpectedSlice[1]);

    }
    setShippingState(value) {
        let yamlExpected = omsUpdateValue[value]['shipping_state'];
        let yamlExpectedSlice = yamlExpected.match(/^.|.$/g).join('').toUpperCase();


        let elem = $(ElementOMSOrder.shippingstateElem);
        super.syncWaitExistAndEnter(elem,yamlExpected);

        let actualValue = elem.getAttribute('value');
        // super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }
    orderSuccessFullMessage(){
        let elem = $(ElementOMSOrder.orderSuccessAlertElem);
        let elemText = super.syncWaitExistAndText(elem);
        let expectedValue = ElementOMSOrder.orderSuccessMessageExpected;
        super.syncVerifyContainElem(elem,elemText,expectedValue);
        browser.pause(3000);
    }

}
export default new OMSOrdersPage();
