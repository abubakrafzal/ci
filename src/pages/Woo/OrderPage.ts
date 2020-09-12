import Page from 'src/pages/Page';

const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
import { ElementOrder, ElementCheckout } from 'src/pages/elements/Elements';

// const image = fs.readFileSync('../Data/Images')
let orderValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/Order.yml', 'utf8')
);
let paymentValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/Payment.yml', 'utf8')
);
let testvalue = './src/Data/Yaml/OMSData.yml';

class OrderPage extends Page {
    get petNameElem() {
        return $('#new_pets_name');
    }

    get petSpeciesElem() {
        return $('#new_pets_species');
    }

    get petBreedElem() {
        return $('#new_pets_breed');
    }

    get nxtStepBtnElem() {
        return $("//div[contains(text(),'Next Step')]");
    }

    async setPetNameasync(value) {
        let modal = await $(ElementOrder.modal);
        let add_petelem = await $(ElementOrder.add_pet);
        await modal.waitForDisplayed();
        let petPlaceholder = await add_petelem.getAttribute('placeholder');
        console.log(petPlaceholder);
        await browser.waitUntil(
            () => petPlaceholder === "Enter Your Pet's Name...",
            {
                timeout: 5000,
                timeoutMsg: 'expected text to be different after 5s',
            }
        );
        let pet_name = await orderValue[value]['name'];
        await add_petelem.waitForClickable();
        await browser.pause(3000);
        await add_petelem.addValue(pet_name);
    }

    setPetName(value) {
        let modal = $(ElementOrder.modal);
        modal.waitForExist();
        let valuemodal = modal.getText();
        console.log(valuemodal);
        let pet_name = orderValue[value]['name'];
        this.petNameElem.waitForDisplayed();
        this.petNameElem.click();
        this.petNameElem.setValue(pet_name);
    }

    setPetType(value) {
        let pet_species = orderValue[value]['species'];
        let pet_breed = orderValue[value]['breed'];
        this.petSpeciesElem.selectByVisibleText(pet_species);
        this.petBreedElem.waitForDisplayed();
        this.petBreedElem.selectByVisibleText(pet_breed);
    }

    async clickNext() {
        let nxtBtn = await $(ElementOrder.nxtBtn);

        await super.waitAndclick(nxtBtn);
    }

    async setasyncpet(value) {
        let pet_species = await orderValue[value]['species'];
        let pet_breed = await orderValue[value]['breed'];
        let specyelem = await $(ElementOrder.specyelem);
        let breedelem = await $(ElementOrder.breedelem);
        await specyelem.selectByVisibleText(pet_species);
        await breedelem.waitForDisplayed();
        await breedelem.selectByVisibleText(pet_breed);
    }

     selectImageFace() {
        let uploadFaceImage =  $('//body/input[1]');

        let elemShow =  $(
            "//div[@class='photo_uploads section']//div[@class='left_side']//label"
        );
         elemShow.isDisplayedInViewport();
        let text =  elemShow.getText();
        console.log(text);
         let getTitle =  browser.getUrl();
         let splitter = getTitle.match(/\d+/g).map(Number).join();
         console.log(splitter);
         this.petIdGlobal = Number(splitter);
         browser.waitUntil(() => text === "Upload Pet's Photos", {
            timeout: 50000,
            timeoutMsg: 'expected text to be different after 5s',
        });
         expect(text).toContain("Upload Pet");
         browser.pause(3000);

        // await browser.execute(
        //     // assign style to elem in the browser
        //     (el)=> (
        //         (el.style.visibility = 'visible'),
        //         (el.style.position = 'absolute'),
        //         (el.style.top = '100px'),
        //         (el.style.left = '0px')
        //     ),
        //     // pass in element so we don't need to query it again in the browser
        //     $("//body/input[1]")
        // );
         browser.execute(
            // assign style to elem in the browser
            el => (
                (el.style.top = '100px'),
                (el.style.position = 'absolute'),
                (el.style.width = '100px'),
                (el.style.height = '100px'),
                (el.style.visibility = 'visible'),
                (el.style.display = 'block')
            ),

            // pass in element so we don't need to query it again in the browser
             $('//body/input[1]')
        );

         uploadFaceImage.waitForDisplayed();

        const relativepath = './src/Data/Images/Dog/face.jpeg';
        const filePath = path.join(process.cwd(), relativepath);
         browser.pause(1500);
        const val = browser.uploadFile(filePath);
        uploadFaceImage.setValue(val);
         browser.pause(1500);

     }

    /*----------------------------------------------------------------

     */
    async selectEyeColour(value) {
        let yamlColor = await orderValue[value]['color'];
        let elementEyeColour = await $(
            "//div[@class='left_column right_eye_container']//span[contains(text(),'" +
                yamlColor +
                "')]"
        );
        await elementEyeColour.scrollIntoView();
        await super.waitAndclick(elementEyeColour);
        console.log("eyeee");
    }
    async selectEarPairs() {
        let leftEar = await $(ElementOrder.leftEar);
        let RightEar = await $(ElementOrder.RightEar);
        await browser.pause(5000);
        await console.log("left ear ");
        await leftEar.scrollIntoView();
        await leftEar.waitForExist();
        await leftEar.click();
        await RightEar.scrollIntoView();
        await RightEar.waitForExist();
        await RightEar.click();
        // await super.waitAndclick(leftEar);
        // await super.waitAndclick(RightEar);
    }
    async ageSelect(val) {
        let yamlAge = orderValue[val]['age'];
        let ageElem = await $(ElementOrder.ageElem);
        await ageElem.scrollIntoView();
        await ageElem.selectByVisibleText(yamlAge);
    }
    async clickNextBtn() {
        let nxtElem = await $(ElementOrder.confirmElem);

        await super.staticJsClick(nxtElem);
    }
    async clickProductNav() {
        let productElem = await $(ElementOrder.productElem);
        await productElem.waitForDisplayed();
        await productElem.click();
    }
    async clickOnItem(value) {
        let itemElem = await $(
            "//li[@class='dropdown-header']/..//li//a[text()=\"" + value + '"]'
        );
        let dropdownShowElem = await $(ElementOrder.dropdownShowElem);
        await dropdownShowElem.waitForExist();
        await super.waitAndclick(itemElem);
    }

    async clickOnGetProductBTN() {
        let productBtnElem = await $(ElementOrder.productBtnElem);
        await super.waitAndclick(productBtnElem);
    }
    async selectPet() {
        // let selectPet = await $(ElementOrder.selectPet);
        try {
            let petId = await orderValue["pet_id"];

            let selectPet = await $("//div[@id='pet_"+petId+"']//a//b")
            await browser.pause(4000);
            await selectPet.scrollIntoView();
            await super.waitTillViewPort(selectPet);
            await selectPet.waitForClickable();
            await selectPet.click();


        }
        catch (e){
            let selectpet = await $("//div[@class='change_pet']//div[1]//a[1]//b[1]");
            await browser.pause(4000);
            await selectpet.scrollIntoView();
            await super.waitTillViewPort(selectpet);
            await selectpet.waitForClickable();
            await selectpet.click();

        }
     }
    async confirmBtn() {
        let confirmElem = await $(ElementOrder.confirmElem);

        await super.waitAndclick(confirmElem);
    }
    async clickAddCartBtn() {
        let addCartelem = await $(ElementOrder.addCartelem);

        const result = await browser.execute(
            // assign style to elem in the browser
            el => (el.style.width = 'inherit'),
            // pass in element so we don't need to query it again in the browser
            addCartelem
        );
        await addCartelem.scrollIntoView();
        await browser.pause(2000);
        await browser.execute('arguments[0].click();', addCartelem);

        // await this.displayAndclick(addCartelem);
        // await browser.waitUntil( () => {
        //     return !$("//div[@class='confirm_order_outer']").isDisplayed();
        // }, );
    }
    async clickFinishCheckoutBTN() {
        let finishCheckoutElem = await $(ElementOrder.finishCheckoutElem);
        await browser.pause(2000);
        finishCheckoutElem.isDisplayedInViewport();
        await browser.execute('arguments[0].click();', finishCheckoutElem);
    }
    async clickContinueShoppingBTN() {
        let continueShoppingElem = await $(ElementOrder.continueShoppingElem);
        await browser.pause(2000);
        continueShoppingElem.isDisplayedInViewport();
        await browser.execute('arguments[0].click();', continueShoppingElem);
    }
    async verifyCartItem() {
        let verifyCartMessage = await $(ElementOrder.verifyCartMessage);
        await verifyCartMessage.waitForDisplayed({ timeout: 20000 });
        let cartValue = await verifyCartMessage.getText();
        await expect(cartValue).toContain('in your cart.');
    }
    async proceedCheckBtn() {
        let proceedBtnElem = await $(ElementOrder.proceedBtnElem);
        await super.waitAndclick(proceedBtnElem);
    }
    async orderTitle() {
        let orderSummary = await $(ElementCheckout.orderSummary);
        await this.waitTillViewPort(orderSummary);
        let orderSummaryText = await orderSummary.getText();
        await expect(orderSummaryText).toContain('Order Summary');
    }
    async clickUseNewMethod() {
        let useNewMethodElem = await $(ElementCheckout.useNewPaymentMethod);
        await super.displayAndclick(useNewMethodElem);
    }

    async EnterValueCard(value) {
        await browser.pause(8000);
        let iframe = await $("//iframe[@id='card_number']");
        iframe.waitForExist();
        await browser.switchToFrame(iframe);

        let cardNum = await $(ElementCheckout.cardElem);
        await cardNum.waitForExist();
        let yamlCardNumber = await paymentValue[value]['cardnum'];
        for (let index = 0; index <= 3; index++) {
            await browser.pause(1000);
            await cardNum.addValue(yamlCardNumber);
            await browser.pause(1500);
            await cardNum.addValue(yamlCardNumber);
        }
        await browser.switchToParentFrame();
    }
    async EnterValueExpire(value) {
        let iframeElem = await $("//iframe[@name='__privateStripeFrame7']");
        await browser.switchToFrame(iframeElem);
        let expireDateElem = await $(ElementCheckout.expireDateElem);
        let yamlCardMonth = await paymentValue[value]['month'];
        let yamlCardYear = await paymentValue[value]['year'];
        await expireDateElem.setValue(yamlCardMonth);
        await browser.pause(1000);
        await expireDateElem.setValue(yamlCardYear);
        await browser.switchToParentFrame();
    }
    async EnterValueCVC(value) {
        await browser.pause(1000);
        let iframeElem = await $("//iframe[@name='__privateStripeFrame8']");
        await browser.switchToFrame(iframeElem);
        let cvvNum = await $(ElementCheckout.cvcElem);
        let yamlCardNumber = await paymentValue[value]['cvc'];
        await cvvNum.setValue(yamlCardNumber);

        await browser.switchToParentFrame();
    }


}
export default new OrderPage();
