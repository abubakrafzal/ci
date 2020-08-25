import { Then } from 'cucumber';
import omsOrderPage from 'src/pages/OMS/OMSOrdersPage';
import { When } from 'cucumber'


Then(/^User Select applied Order from the List$/, function() {
    omsOrderPage.clickOrderFromTable();
});
Then(/^User Verify the "([^"]*)" Order Date$/, function(text) {
    omsOrderPage.getOrderDateCreated(text);
});
When(/^User Go to Billing Address Block$/, function() {
    omsOrderPage.clickEditOrderButton();
});
When(/^Verify The Billing "([^"]*)" FirstName$/, function(text) {
    omsOrderPage.getBillingFirstName(text);
});
When(/^Verify The Billing "([^"]*)" LastName$/, function(text) {
    omsOrderPage.getBillingLastName(text);
});
When(/^Verify The Billing "([^"]*)" Address1$/, function(text) {
    omsOrderPage.getBillingAddressLine1(text);
});
When(/^Verify The Billing "([^"]*)" Address2$/, function(text) {
    omsOrderPage.getBillingAddressLine2(text);
});
When(/^Verify The Billing "([^"]*)" Country$/, function(text) {
    omsOrderPage.getBillingCountry(text);
});
When(/^Verify The Billing "([^"]*)" State$/, function(text) {
    omsOrderPage.getBillingCountryState(text);
});
When(/^Verify The Billing "([^"]*)" Email$/, function(text) {
    omsOrderPage.getBillingEmailAddress(text);
});
When(/^Verify The Billing "([^"]*)" City$/, function(text) {
    omsOrderPage.getBillingCity(text);
});
When(/^Verify The Billing "([^"]*)" Postcode$/, function(text) {
    omsOrderPage.getBillingPostalCode(text);
});
When(/^Verify The Billing "([^"]*)" Phone$/, function(text) {
    omsOrderPage.getBillingPhone(text);
});
Then(/^User Go to Shipping Address Block$/, function() {
    omsOrderPage.clickEditShippingButton();
});
When(/^Verify The Shipping "([^"]*)" FirstName$/, function(text) {
    omsOrderPage.getShippingFirstName(text);
});
When(/^Verify The Shipping "([^"]*)" LastName$/, function(text) {
    omsOrderPage.getShippingLastName(text);
});
When(/^Verify The Shipping "([^"]*)" Address1$/, function(text) {
    omsOrderPage.getShippingAddressLine1(text);
});
When(/^Verify The Shipping "([^"]*)" Address2$/, function(text) {
    omsOrderPage.getShippingAddressLine2(text);
});
When(/^Verify The Shipping "([^"]*)" Country$/, function(text) {
    omsOrderPage.getShippingCountry(text);
});
When(/^Verify The Shipping "([^"]*)" State$/, function(text) {
    omsOrderPage.getShippingState(text);
});

When(/^Verify The Shipping "([^"]*)" City$/, function(text) {
    omsOrderPage.getShippingCity(text);
});
When(/^Verify The Shipping "([^"]*)" Postcode$/, function(text) {
    omsOrderPage.getShippingPostalCode(text);
});