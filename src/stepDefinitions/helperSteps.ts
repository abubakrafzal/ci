import { Then } from 'cucumber';
import adminSyncPage from 'src/pages/AdminSyncPage';


Then(/^Dump all the data to the YamlFile$/, async function() {
    await adminSyncPage.readOrderJSONAndYAMLWrite();
});