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

//todo setter
When(/^Update The Billing "([^"]*)" FirstName$/, function(text) {
    omsOrderPage.setBillingFirstName(text);
});
When(/^Update The Billing "([^"]*)" LastName$/, function(text) {
    omsOrderPage.setBillingLastName(text);
});
When(/^Update The Billing "([^"]*)" Address1$/, function(text) {
    omsOrderPage.setBillingAddressLine1(text);
});
When(/^Update The Billing "([^"]*)" Address2$/, function(text) {
    omsOrderPage.setBillingAddressLine2(text);
});
When(/^Update The Billing "([^"]*)" Country$/, function(text) {
    omsOrderPage.setBillingCountry(text);
});
When(/^Update The Billing "([^"]*)" State$/, function(text) {
    omsOrderPage.setBillingCountryState(text);
});
When(/^Update The Billing "([^"]*)" Email$/, function(text) {
    omsOrderPage.setBillingEmailAddress(text);
});
When(/^Update The Billing "([^"]*)" City$/, function(text) {
    omsOrderPage.setBillingCity(text);
});
When(/^Update The Billing "([^"]*)" Postcode$/, function(text) {
    omsOrderPage.setBillingPostalCode(text);
});
When(/^Update The Billing "([^"]*)" Phone$/, function(text) {
    omsOrderPage.setBillingPhone(text);
});
// Then(/^User Go to Shipping Address Block$/, function() {
//     omsOrderPage.clickEditShippingButton();
// });

When(/^Update The Shipping "([^"]*)" FirstName$/, function(text) {
    omsOrderPage.setShippingFirstName(text);
});
When(/^Update The Shipping "([^"]*)" LastName$/, function(text) {
    omsOrderPage.setShippingLastName(text);
});
When(/^Update The Shipping "([^"]*)" Address1$/, function(text) {
    omsOrderPage.setShippingAddressLine1(text);
});
When(/^Update The Shipping "([^"]*)" Address2$/, function(text) {
    omsOrderPage.setShippingAddressLine2(text);
});
When(/^Update The Shipping "([^"]*)" Country$/, function(text) {
    omsOrderPage.setShippingCountry(text);
});
When(/^Update The Shipping "([^"]*)" State$/, function(text) {
    omsOrderPage.setShippingState(text);
});

When(/^Update The Shipping "([^"]*)" City$/, function(text) {
    omsOrderPage.setShippingCity(text);
});
When(/^Update The Shipping "([^"]*)" Postcode$/, function(text) {
    omsOrderPage.setShippingPostalCode(text);
});
When(/^Verify order alert Success$/, function() {
    omsOrderPage.orderSuccessFullMessage();

});