import { Then } from 'cucumber';
import adminSyncPage from 'src/pages/Woo/AdminSyncPage';
import pages from 'src/pages/Page';
import homepage from 'src/pages/Woo/Homepage';
import helper from 'src/pages/Helper'

Then(/^Dump all the data to the YamlFile$/, async function() {
    await adminSyncPage.readOrderJSONAndYAMLWrite();
});
Then(/^Close All the tabs except Base$/, function() {
    homepage.goToBaseURL();
});
Then(/^Dump all the data to the Static YamlFile$/, async function() {
    await adminSyncPage.readOrderJSONAndYAMLWriteStatic();
});
Then(/^Dump all the data to the "([^"]*)" YamlFile$/, async function(text) {
    await adminSyncPage.readJSONAndYAMLWrite(text);
});
Then(/^User Post "([^"]*)" data$/, async function(text) {
    await helper.PostOrder(text);
});
Then(/^User go to Order ID "([^"]*)"$/, function(text) {
    helper.openAppliedOrder(text);
});