import { Then } from 'cucumber';
import omsHomePage from 'src/pages/OMS/OMSHomePage';
import { Given } from 'cucumber'
import { When } from 'cucumber'

Given(/^User is on Login Page of OMS$/, function() {
    omsHomePage.newWindowOMS()
});
When(/^User Login With "([^"]*)" Username and Password$/, function(text) {
    omsHomePage.loginToOMS(text);
});
Then(/^User Go to OMS Order from Panel$/, function() {
    omsHomePage.clickOrderFromPanel();
});
Then(/^User Go to OMS "([^"]*)" from Panel$/, function(text) {
    omsHomePage.clickGenericFromPanel(text);
    omsHomePage.verifyStatus(text);
});
