import { Then } from 'cucumber';
import oMSDueDates from 'src/pages/OMS/OMSEmployesPage';
import { When } from 'cucumber'
import oMSDueDatesPage from 'src/pages/OMS/OMSDueDatesPage';


Then(/^User Save Rush Order ID$/, function() {
    oMSDueDatesPage.getRushOrderID();
});
// Then(/^Verify Dates for the "([^"]*)"$/, function(text) {
//     oMSDueDatesPage.verificationofDates(text);
// });
Then(/^User get the rush Weeks$/, function() {
    oMSDueDatesPage.getRushWeeks();
});
Then(/^User Go To Fulfillment Dates$/, function() {
    oMSDueDatesPage.clickFullfilmentDates();
});
Then(/^User Go to  Line Item against order$/, function() {
    oMSDueDatesPage.clickSelectLineItemDue();
});
Then(/^User go to selected Order ID$/, function() {
    oMSDueDatesPage.clickOrderFromTable();

    // oMSDueDatesPage.
});
Then(/^User Select "([^"]*)" for the order$/, function(text) {
    oMSDueDatesPage.getRushSelectItem(text);
});
Then(/^Verify Dates for the "([^"]*)" or "([^"]*)"$/, function(text,rush) {
    oMSDueDatesPage.verificationofDates(text,rush);

});

When(/^User click on request builder tab$/, function() {
    oMSDueDatesPage.clickOnRequestBuilder();
});
Then(/^User go to new request$/, function() {
    oMSDueDatesPage.clickOnNewRequestButton();
});
Then(/^User check mark Custom message$/, function() {
    oMSDueDatesPage.clickOnCustomMessage();
});
Then(/^User is able to Enter Custom "([^"]*)"$/, function(text) {
    oMSDueDatesPage.enterTextMessage(text)
});
When(/^User Hit the Confirm Button$/, function() {
    oMSDueDatesPage.clickConfirmBtn();
});
Then(/^Verify Request Builder request alert$/, function() {
    oMSDueDatesPage.verifySuccessRequestAlert();
});
Then(/^User hit the send email button$/, function() {
    oMSDueDatesPage.clickSendEmail();
});
Then(/^User verify success sent alert$/, function() {
    oMSDueDatesPage.verifySuccessEmailSentMessage();
});