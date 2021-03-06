import { Then } from 'cucumber'
import OMSOrdersPage from 'src/pages/OMS/OMSOrdersPage';
import oMSLinePage from 'src/pages/OMS/OMSLinePage';
import { When } from 'cucumber'


Then(/^User Go to  Line Item "([^"]*)" details$/, function(text) {
    oMSLinePage.clickSelectLineItem(text);
});
Then(/^User Verify Item "([^"]*)" Status$/, function(text) {
    oMSLinePage.getLineStatus(text);

});
Then(/^Assignment Manager Should be "([^"]*)"$/, function(text) {
    oMSLinePage.getLineAssignmentGroup(text);
    oMSLinePage.setAssignUser(text);
});

When(/^User hit the OMS Update Button$/, function() {
    oMSLinePage.clickUpdateLineItem();
});
Then(/^User copy the order number$/, function() {
    oMSLinePage.saveTheOrderID();
});
Then(/^User go to line order "([^"]*)" details$/, function(text) {
    oMSLinePage.openWOOAdminStatusChangeOrder(text);
});
Then(/^User wait for the Line Item Successful Alert$/, function() {
    oMSLinePage.SuccessAlert();
});