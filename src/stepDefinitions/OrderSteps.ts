import { Given } from 'cucumber';
import { When } from 'cucumber';
import { Then } from 'cucumber';
import homepage from '../pages/Woo/Homepage';
import orderPage from '../pages/Woo/OrderPage';
import orderSyncPage from '../pages/Woo/OrderSyncPage';

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
Then(/^User upload face image$/,  () => {
     orderPage.selectImageFace();
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
When(/^User proceed to checkout$/, async () => {
    await orderPage.proceedCheckBtn();
});
Then(/^User is able to view Order Summary$/, async function() {
    await orderPage.orderTitle();
});
Then(/^User use a Debit new method for payment$/, async function() {
    await orderPage.clickUseNewMethod();
});
Then(/^User Enter "([^"]*)" Card Number$/, async function(text) {
    await orderPage.EnterValueCard(text);
});
Then(/^User Enter "([^"]*)" Expiry Date$/, async function(text) {
    await orderPage.EnterValueExpire(text);
});
Then(/^User Enter "([^"]*)" CVC$/, async function(text) {
    await orderPage.EnterValueCVC(text);
});
When(/^User accept Discrete packaging$/, function() {
    orderSyncPage.clickDiscretePacging();
});
When(/^User Place the Order$/, function() {
    orderSyncPage.clickPlaceOrder();
});
Then(/^User Verify the successful message of Order$/, function() {
    orderSyncPage.verifyOrderPlaced();
});
Then(/^User Close the Order After Verification$/, function() {
    orderSyncPage.closeTheOrderMessage();
});
Then(/^User select size of "([^"]*)" slipper$/, function(text) {
    orderSyncPage.selectSlipperSize(text);
});
Then(/^User get the Order ID$/, function() {
    orderSyncPage.getOrderID();
});
Then(/^User Save the Order ID$/, function() {
    orderSyncPage.saveOrderToJson();
});