import { Then, When } from 'cucumber';
import adminSyncPage from 'src/pages/Woo/AdminReader';


Then(/^User get new the Values of Billing$/, function() {
    adminSyncPage.getOrderDateCreated();
    adminSyncPage.getBillingFirstName();
    adminSyncPage.getBillingLastName();
    adminSyncPage.getBillingAddressLine1();
    adminSyncPage.getBillingAddressLine2();
    adminSyncPage.getBillingCity();
    adminSyncPage.getBillingCountry();
    adminSyncPage.getBillingCountryState();
    adminSyncPage.getBillingCompany();
    adminSyncPage.getBillingPostalCode();
    adminSyncPage.getBillingEmailAddress();
    adminSyncPage.getBillingPhone();
    adminSyncPage.getBillingTransaction();
});

Then(/^User get new the Values of Shipping$/, function() {
    adminSyncPage.getShippingFirstName();
    adminSyncPage.getShippingLastName();
    adminSyncPage.getShippingAddressLine1();
    adminSyncPage.getShippingAddressLine2();
    adminSyncPage.getShippingCity();
    adminSyncPage.getShippingCountry();
    adminSyncPage.getShippingState();
    adminSyncPage.getShippingPostalCode();
});
Then(/^User get new the values of Item$/, function() {
    adminSyncPage.getLineItemValue();
});
Then(/^User Verify the Billing "([^"]*)" from WooAdmin$/, function(text) {
    adminSyncPage.verifyBillingFirstName(text);
    adminSyncPage.verifyBillingLastName(text);
    adminSyncPage.verifyBillingAddressLine1(text);
    adminSyncPage.verifyBillingAddressLine2(text);
    adminSyncPage.verifyBillingCity(text);
    adminSyncPage.verifyBillingCountry(text);
    adminSyncPage.verifyBillingEmailAddress(text);
    adminSyncPage.verifyShippingPostalCode(text);
});
Then(/^User Verify the Shipping "([^"]*)" from WooAdmin$/, function(text) {

    adminSyncPage.verifyShippingFirstName(text);
    adminSyncPage.verifyShippingLastName(text);
    adminSyncPage.verifyShippingAddressLine1(text);
    adminSyncPage.verifyShippingAddressLine2(text);
    adminSyncPage.verifyShippingCity(text);
    adminSyncPage.verifyShippingCountry(text);

});
Then(/^User Select applied static Order from the List$/, function() {
    adminSyncPage.getOrderID();
});
Then(/^User go to second order Static details$/, function() {
    adminSyncPage.saveSecondOrderAdminJson();
});