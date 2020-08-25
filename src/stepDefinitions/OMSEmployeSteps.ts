import { Then } from 'cucumber';
import oMSEmployesPage from 'src/pages/OMS/OMSEmployesPage';

Then(/^User Verify the "([^"]*)" Manager Email with Title$/, function(text) {
    oMSEmployesPage.verifyEmployee(text);
});