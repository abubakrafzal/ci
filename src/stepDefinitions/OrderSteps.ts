// import homepage from '../pages/Homepage';
import OrderPage from '../pages/OrderPage';
import { Given } from 'cucumber';
import { When } from 'cucumber';
import { Then } from 'cucumber';
import homepage from '../pages/Homepage';
import orderPage from '../pages/OrderPage';



Then(/^User click on add pet$/, async () => {
    await homepage.addNewBtnasync();
});

Then(/^User enter "([^"]*)" name$/, async text => {
    await orderPage.setPetNameasync(text);
});

Then(/^User select "([^"]*)" Specy and breed$/, text => {
    orderPage.setPetType(text);
});
When(/^Then User go to next step$/, async () => {
    await orderPage.clickNext();
});
Then(/^User upload face image$/, async () => {
    await orderPage.selectImageFace();
});
Then(/^User select "([^"]*)" of both eyes$/, async text => {
    await orderPage.selectEyeColour(text);
});
Then(/^User select Left and Right ear positions$/, async () => {
    await orderPage.selectEarPairs();
});
Then(/^User select "([^"]*)" Age$/, async text => {
    await orderPage.ageSelect(text);
});
Then(/^User click on next button$/, async () => {
    await orderPage.confirmBtn();
});
When(/^User go to product$/, async () => {
    await orderPage.clickProductNav();
});
When(/^User click on "([^"]*)" item category$/, async text => {
    await orderPage.clickOnItem(text);
});
Then(/^User click on get your product button$/, async () => {
    await orderPage.clickOnGetProductBTN();
});
Then(/^User select pet from the modal$/, async () => {
    await orderPage.selectPet();
});
When(/^User confirm order of product$/, async () => {
    await orderPage.confirmBtn();
});
When(/^User click add to cart$/, async () => {
    await orderPage.clickAddCartBtn();
});
When(/^User click on finish checkout$/, async () => {
    await orderPage.clickFinishCheckoutBTN();
});
Then(/^User verify the item in cart$/, async () => {
    await orderPage.verifyCartItem();
});
When(/^User proceed to checkout$/, function() {

});