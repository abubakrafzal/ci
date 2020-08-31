import { Then } from 'cucumber';
import adminSyncPage from 'src/pages/Woo/AdminSyncPage';
import pages from 'src/pages/Page';
import homepage from 'src/pages/Woo/Homepage';
import oMSDueDatesPage from 'src/pages/OMS/OMSDueDatesPage';
import oMSLinePage from 'src/pages/OMS/OMSLinePage';
import validate = WebAssembly.validate;

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
