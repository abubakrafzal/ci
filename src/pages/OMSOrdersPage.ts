import Page from 'src/pages/Page';

const yaml = require('js-yaml');
const fs = require('fs');
import {
    ElementOMSOrder,
} from 'src/pages/elements/Elements';

// const image = fs.readFileSync('../Data/Images')
// let orderValue = yaml.safeLoad(
//     fs.readFileSync('./src/Data/Yaml/Order.yml', 'utf8')
// );
// let paymentValue = yaml.safeLoad(
//     fs.readFileSync('./src/Data/Yaml/Payment.yml', 'utf8')
// );
// let testvalue = './src/Data/Yaml/OMSData.yml';
let omsValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/OMSData.yml', 'utf8')
);

class OMSOrdersPage extends Page {
    clickOrderFromTable() {
        let yamlValue = omsValue['OrderData']['order_num'];
        let orderElem = $("//a[contains(text(),'" + yamlValue + "')]");
        super.syncWaitExistAndClick(orderElem);
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
        let yamlExpectedSlice = regExp.exec(yamlExpected);
        let elem = $(ElementOMSOrder.billingcountryElem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpectedSlice[1]);

    }
    getBillingCountryState(value) {
        let yamlExpected = omsValue[value]['billing_state'];
        let yamlExpectedSlice = yamlExpected.match(/^.|.$/g).join('').toUpperCase();
        let elem = $(ElementOMSOrder.billingstateElem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpectedSlice);

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
        browser.pause(10000);

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
        super.syncVerifyContainElem(elem,actualValue,yamlExpectedSlice);

    }
}
export default new OMSOrdersPage();
