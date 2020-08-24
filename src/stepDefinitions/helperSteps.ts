import { Then } from 'cucumber';
import adminSyncPage from 'src/pages/AdminSyncPage';
import pages from 'src/pages/Page';
import homepage from 'src/pages/Homepage';



Then(/^Dump all the data to the YamlFile$/, async function() {
    await adminSyncPage.readOrderJSONAndYAMLWrite();
});
Then(/^Close All the tabs except Base$/, function() {
    homepage.goToBaseURL();
});