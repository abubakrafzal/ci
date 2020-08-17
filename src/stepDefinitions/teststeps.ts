// import { assert } from 'chai';

// import { binding, given, when, then } from 'cucumber-tsflow';


// @binding()
// export class HomeSteps {
//     @given(/^I am on the search page$/)
//     public async givenOnHomepage() {
//         await homepage.open();
//         const title = await browser.getTitle();
//
//
//         // await assert.equal(title, 'Google');
//     }
//
//     @when(/^I enter "([^"]*)" into the search box$/)
//     public async whenIEnterSearchText(arg1) {
//        // await homepage.enterText(arg1);
//     }
//
//     @when(/^I click the search button$/,)
//     public whenSearchClicked() {
//         homepage.search();
//     }
//
//     @then(/^I should see a list of search results$/)
//     public resultsShouldShow() {
//         assert.isTrue(homepage.isSearched());
//     }
//     @when(/^i enter "([^"]*)"$/)
//     public async hello(vale){
//
//         // await homepage.enterText(vale);
//     }
// }