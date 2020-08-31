
import { Then } from 'cucumber';
import oMSPartialRefundPage from 'src/pages/OMS/OMSPartialRefundPage';

Then(/^User Save Refund Order ID$/, function() {
    oMSPartialRefundPage.getRushOrderID();
});
Then(/^User go to refund Order ID$/, function() {
    oMSPartialRefundPage.clickOrderFromTable();
});
Then(/^User Go to refund first Line Item against order$/, function() {
    oMSPartialRefundPage.clickSelectLineItemDue();
});
Then(/^User click new refund$/, function() {
    oMSPartialRefundPage.clickNewRefundButton();
});
Then(/^User Enter reason for the refund$/, function() {
    oMSPartialRefundPage.enterReasonRefund();
});
Then(/^User Enter Refunded Amount$/, function() {
    oMSPartialRefundPage.enterAmountRefund();
});
Then(/^User sumbit the amount$/, function() {
    oMSPartialRefundPage.clickCreateRefund()
});
Then(/^User Verify the refund Amount alert$/, function() {
    oMSPartialRefundPage.verifyRequest();
});

Then(/^User go to order Static Refund details$/, function() {
    oMSPartialRefundPage.staticRefundAmount();
});
Then(/^User verify the Refund admin amount$/, function() {
    oMSPartialRefundPage.verifyRefundAdmin();
});
Then(/^User click new refund Item$/, function() {
    oMSPartialRefundPage.clickLineRefundBtn();
});
Then(/^User go to line order details Item$/, function() {
    oMSPartialRefundPage.openWOOAdminStatusChangeOrder();
});
Then(/^Verify OMS partial "([^"]*)" from WooCommerce$/, function(text) {
    oMSPartialRefundPage.getWooItemStatus(text);
});
Then(/^Verify WooAdmin partial "([^"]*)" from WooCommerce$/, function(text) {
    oMSPartialRefundPage.getOmsItemStatus(text);
});