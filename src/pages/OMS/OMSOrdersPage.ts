import Page from 'src/pages/Page';

const yaml = require('js-yaml');
const fs = require('fs');
import {
    ElementOMSOrder,
} from 'src/pages/elements/Elements';
import { FilePath } from 'src/pages/elements/FilePath';

let omsUpdateValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/OMSUpdateData.yml', 'utf8')
);
let jsonOrderPath = FilePath.ApiJson;

class OMSOrdersPage extends Page {
     // omsValue = super.syncJsonRead(jsonOrderPath);

    clickOrderFromTable(value) {
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlValue2 = omsValue[value]['id'];
            console.log("checkkkkkk-========",yamlValue2);
            let orderElem = $("//a[contains(text(),'" + yamlValue2 + "')]");
            super.syncWaitExistAndClick(orderElem);

    }
    //todo

    clickEditOrderButton() {
        let billingEditIconElem = $(ElementOMSOrder.billingBarElem);
        super.syncWaitExistAndClick(billingEditIconElem);

    }

    getOrderDateCreated(value) {
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlExpected = omsValue[value]['date_created'];
        let extract = yamlExpected.substring(0, 10);
        console.log(extract);
        let orderDateElem = $(ElementOMSOrder.orderDateElem);
        let actualValue = orderDateElem.getAttribute('value');
        super.syncVerifyContainElem(orderDateElem,actualValue,extract);
    }
    getBillingFirstName(value) {
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlExpected = omsValue[value]['billing']['first_name'];
        console.log(yamlExpected)
        let billingFirstNameElem = $(ElementOMSOrder.billingfirstNameElem);
        let actualValue = billingFirstNameElem.getAttribute('value');
        super.syncVerifyContainElem(billingFirstNameElem,actualValue,yamlExpected);

    }
    getBillingLastName(value) {
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlExpected = omsValue[value]['billing']['last_name'];

        let billingLastNameElem = $(ElementOMSOrder.billinglastNameElem);
        let actualValue = billingLastNameElem.getAttribute('value');
        super.syncVerifyContainElem(billingLastNameElem,actualValue,yamlExpected);


    }

    getBillingAddressLine1(value) {
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlExpected = omsValue[value]['billing']['address_1'];;

        let elem = $(ElementOMSOrder.billingAddress1Elem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);


    }
    getBillingCity(value) {
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlExpected = omsValue[value]['billing']['city'];

        let elem = $(ElementOMSOrder.billingcityElem);

        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }
    getBillingAddressLine2(value) {
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlExpected = omsValue[value]['billing']['address_2'];

        let elem = $(ElementOMSOrder.billingAddress2Elem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }

    getBillingPostalCode(value) {
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlExpected = omsValue[value]['billing']['postcode'];

        let elem = $(ElementOMSOrder.billingpostcodeElem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }
    getBillingCountry(value) {
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlExpected = omsValue[value]['billing']['country'];
        let elem = $(ElementOMSOrder.billingcountryElem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);



    }
    getBillingCountryState(value) {
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlExpected = omsValue[value]['billing']['state'];
        let elem = $(ElementOMSOrder.billingstateElem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }
    getBillingEmailAddress(value) {
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlExpected = omsValue[value]['billing']['email'];

        let elem = $(ElementOMSOrder.billingemailElem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }
    getBillingPhone(value) {
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlExpected = omsValue[value]['billing']['phone'];

        let elem = $(ElementOMSOrder.billingphoneElem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }
    getBillingPayment(value) {
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlExpected = omsValue[value]['payment_method'];

        let elem = $(ElementOMSOrder.paymentViaElem);
        let actualValue = elem.getAttribute('value');
        // super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }

    clickEditShippingButton() {
        let shippingEditIconElem = $(ElementOMSOrder.shippingBarElem);
        super.syncWaitExistAndClick(shippingEditIconElem);
    }

    getShippingFirstName(value) {
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlExpected = omsValue[value]['shipping']['first_name'];

        let shippingFirstNameElem = $(ElementOMSOrder.shippingfirstNameElem);
        let actualValue = shippingFirstNameElem.getAttribute('value');
        super.syncVerifyContainElem(shippingFirstNameElem,actualValue,yamlExpected);

    }
    getShippingLastName(value) {
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlExpected = omsValue[value]['shipping']['last_name'];

        let shippingLastNameElem = $(ElementOMSOrder.shippinglastNameElem);
        let actualValue = shippingLastNameElem.getAttribute('value');
        super.syncVerifyContainElem(shippingLastNameElem,actualValue,yamlExpected);

    }
    getShippingAddressLine1(value) {
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlExpected = omsValue[value]['shipping']['address_1'];

        let elem = $(ElementOMSOrder.shippingaddress1Elem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }
    getShippingCity(value) {
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlExpected = omsValue[value]['shipping']['city'];

        let elem = $(ElementOMSOrder.shippingcityElem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }
    getShippingAddressLine2(value) {
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlExpected = omsValue[value]['shipping']['address_2'];

        let elem = $(ElementOMSOrder.shippingaddress2Elem);;
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }

    getShippingPostalCode(value) {
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlExpected = omsValue[value]['shipping']['postcode'];

        let elem = $(ElementOMSOrder.shippingpostcodeElem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);
        browser.pause(5000);

    }
    getShippingCountry(value) {
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlExpected = omsValue[value]['shipping']['country'];

        let elem = $(ElementOMSOrder.shippingcountryElem);
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);

    }
    getShippingState(value) {
        let omsValue = super.syncJsonRead(jsonOrderPath);

        let yamlExpected = omsValue[value]['shipping']['state'];
        let yamlExpectedSlice = yamlExpected.match(/^.|.$/g).join('').toUpperCase();


        let elem = $(ElementOMSOrder.shippingstateElem);
        let actualValue = elem.getAttribute('value');
        // super.syncVerifyContainElem(elem,actualValue,yamlExpectedSlice);

    }
    //todo setters

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
        super.syncWaitExistAndEnter(billingLastNameElem,yamlExpected);

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
        let enterValue = yamlExpectedSlice[1];
        let elem = $(ElementOMSOrder.billingcountryElem);
        elem.clearValue();
        browser.pause(3000);
        super.syncWaitExistAndEnter(elem,enterValue);

        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,enterValue);

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

        let elem = $(ElementOMSOrder.shippingcountryElem);
        elem.clearValue();
        browser.pause(3000);

        super.syncWaitExistAndEnter(elem,yamlExpected);
        // browser.debug();
        let actualValue = elem.getAttribute('value');
        super.syncVerifyContainElem(elem,actualValue,yamlExpected);
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
