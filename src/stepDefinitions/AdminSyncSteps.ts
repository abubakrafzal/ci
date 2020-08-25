import { Given } from 'cucumber';
import { When } from 'cucumber';
import { Then } from 'cucumber';
import adminSyncPage from '../pages/Woo/AdminSyncPage';

Given(/^Super User go to Admin Site$/, function() {
    adminSyncPage.syncWooAdminURL();
});

When(/^User click On Wocommerce from side panel$/, function() {
    adminSyncPage.clickWooCommerceMenu();
});
When(/^User go to orders list$/, function() {
    adminSyncPage.clickOrderMenu();
});
Then(/^User go to order "([^"]*)" details$/, function(text) {
    adminSyncPage.openAppliedOrder(text);
});
Then(/^User hit the Update Button$/, function() {
    adminSyncPage.clickUpdateButton();
});
When(/^User go to Edit the Billing Data$/, function() {
    adminSyncPage.clickEditBillingButton();
});
Then(/^User get the Values of Billing$/, function() {
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
When(/^User go to Edit the Shipping Data$/, function() {
    adminSyncPage.clickEditShippingButton();
});
Then(/^User get the Values of Shipping$/, function() {
    adminSyncPage.getShippingFirstName();
    adminSyncPage.getShippingLastName();
    adminSyncPage.getShippingAddressLine1();
    adminSyncPage.getShippingAddressLine2();
    adminSyncPage.getShippingCity();
    adminSyncPage.getShippingCountry();
    adminSyncPage.getShippingState();
    adminSyncPage.getShippingPostalCode();
});
Then(/^User get the values of Item$/, function() {
    adminSyncPage.getLineItemValue();
});
Then(/^User go to order Static details$/, function() {
    adminSyncPage.saveOrderAdminJson()
});