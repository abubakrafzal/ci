import { Given } from 'cucumber';
import { When } from 'cucumber';
import { Then } from 'cucumber';
import adminSyncPage from '../pages/AdminSyncPage';

Given(/^Super User go to Admin Site$/, function() {
    adminSyncPage.syncOMSURL();
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
When(/^User Edit the Billing Data$/, function() {
    adminSyncPage.clickEditBillingButton();
});
Then(/^User get the Values of Shipping and Billing$/, function() {
    adminSyncPage.getBillingFirstName();
});
