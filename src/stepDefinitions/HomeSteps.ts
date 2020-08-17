
import homepage from '../pages/Homepage';
import { Given, When } from 'cucumber';
import { Then } from 'cucumber'


Given(/^User is on HomePage$/, async function() {
    await homepage.checkHomeTitle();
});
When(/^User go to pet link$/, ()=> {
    homepage.addNewBtn();
});
When(/^User click the search$/, () => {
    // homepage.search();
});
Then(/^User click on my account$/, async function() {
    await homepage.gotoMyAccount();
});
