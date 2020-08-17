import Page from 'src/pages/Page';
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
import { expect } from 'chai';

// const image = fs.readFileSync('../Data/Images')
let orderValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/Order.yml', 'utf8')
);

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
        let modal = await $("//div[@class='add_pet_contain']//h5");
        let add_petelem = await $('#new_pets_name');
        await modal.waitForDisplayed();
        let petPlaceholder = await add_petelem.getAttribute('placeholder');
        console.log(petPlaceholder);
        await browser.waitUntil(
            () => petPlaceholder === "Enter Your Pet's Name...",  {
                timeout: 5000,
                timeoutMsg: 'expected text to be different after 5s'
            });
        let pet_name = await orderValue[value]['name'];
        await add_petelem.waitForClickable();
        await add_petelem.addValue(pet_name);

    }

    setPetName(value) {
        let modal = $("//div[@class='add_pet_contain']//h5");
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
        let nxtBtn = await $("//div[contains(text(),'Next Step')]");

        await super.waitAndclick(nxtBtn);
        await browser.pause(50000);
    }

    async setasyncpet(value) {
        let pet_species = await orderValue[value]['species'];
        let pet_breed = await orderValue[value]['breed'];
        let specyelem = await $('#new_pets_species');
        let breedelem = await $('#new_pets_breed');
        await specyelem.selectByVisibleText(pet_species);
        await breedelem.waitForDisplayed();
        await breedelem.selectByVisibleText(pet_breed);
    }

    async selectImageFace() {
        let uploadFaceImage = await $(
            "//body[@class='page-template page-template-template-add_edit-pet_profile page-template-template-add_edit-pet_profile-php page page-id-388 logged-in wp-custom-logo wp-embed-responsive theme-CuddleCloneTheme woocommerce-js has_paypal_express_checkout group-blog elementor-default jdgm--leex-script-loaded']/input[1]"
        );
        await browser.pause(3000);
        let uploadbtn = await $("//div[@class='photo_uploads section']//div[@class='left_side']//label");
        let uploadValue = await uploadbtn.getText();
        await browser.waitUntil(
            () =>
              uploadValue === "Upload Pet's Photos", {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        });
           
        await browser.execute(
            // assign style to elem in the browser
            el => (
                (el.style.top = '100px'),
                (el.style.left = '100px'),
                (el.style.width = '100px'),
                (el.style.height = '100px'),
                (el.style.visibility = 'visible'),
                (el.style.display = 'block')
            ),
            // pass in element so we don't need to query it again in the browser
            uploadFaceImage
        );

        const relativepath = './src/Data/Images/Dog/face.jpeg';
        const filePath = path.join(process.cwd(), relativepath);
        await uploadFaceImage.setValue(filePath);
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
    }
    async selectEarPairs() {
        let leftEar = await $(
            "//div[contains(@class,'ear_positions section')]//div[contains(@class,'left_column')]//div[1]"
        );
        let RightEar = await $(
            "//div[contains(@class,'ear_positions section')]//div[contains(@class,'right_column')]//div[1]"
        );
        await super.waitAndclick(leftEar);
        await super.waitAndclick(RightEar);
    }
    async ageSelect(val) {
        let yamlAge = orderValue[val]['age'];
        let ageElem = await $("//select[@id='age']");
        await ageElem.scrollIntoView();
        await ageElem.selectByVisibleText(yamlAge);
    }
    async clickNextBtn() {
        let nxtElem = await $("//a[contains(@class,'confirm')]");

        await super.staticJsClick(nxtElem);
    }
    async clickProductNav() {
        let productElem = await $(
            "//li[@class='dropdown menu-large nav-item']//a[@class='dropdown-toggle nav-link']"
        );
        await productElem.waitForDisplayed();
        await productElem.click();
    }
    async clickOnItem(value) {
        let itemElem = await $(
            "//li[@class='dropdown-header']/..//li//a[text()=\"" + value + '"]'
        );
        let dropdownShowElem = await $(
            "//ul[@class='dropdown-menu megamenu show']"
        );
        await dropdownShowElem.waitForExist();
        await super.waitAndclick(itemElem);
    }

    async clickOnGetProductBTN() {
        let productBtnElem = await $(
            "//a[@class='get-product-button customize btn-white-arrow']"
        );
        await super.waitAndclick(productBtnElem);
    }
    async selectPet() {
        let headerElem = await $("//div[@class='change_pet']//h5");
        await browser.waitUntil(
            () => headerElem.isDisplayed(),

        );
        let selectPet = await $("(//div[@class='pet_box']//a//b)[1]");
        await super.waitAndclick(selectPet);
    }
    async confirmBtn() {
        let confirmElem = await $("//a[contains(@class,'confirm')]");
        await super.displayAndclick(confirmElem);
    }
    async clickAddCartBtn() {
        console.log("doesnt appear");
        let modalCart = await $(
            "//div[@class='modal-dialog modal-dialog-centered confirm_order_outer_container']"
        );
        await modalCart.waitForExist();
        let addCartelem = await $('div.add_to_cart_button');

        await browser.execute(
            // assign style to elem in the browser
            el => (
                (el.style.width = 'inherit')
            ),
            // pass in element so we don't need to query it again in the browser
            addCartelem
        );
        await this.staticWaitAndclick(addCartelem);
        await browser.waitUntil( () => {
            return !$("//div[@class='confirm_order_outer']").isDisplayed();
        }, );
    }
    async clickFinishCheckoutBTN() {
        let finishCheckoutElem = await $("//div[@class='no_thanks drk-btn']");
        await browser.execute('arguments[0].click();', finishCheckoutElem);
    }
    async verifyCartItem() {
        let verifyCartMessage = await $("//div[@class='cart_count']");
        let cartValue = await verifyCartMessage.getText();
        await expect(cartValue).to.contains('items in your cart.');
    }
    async proceedCheckBtn(){
        let proceedBtnElem= await $("//a[@class='btn btn-primary btn-lg btn-block']//br")
        await super.waitAndclick("//a[@class='btn btn-primary btn-lg btn-block']");

    }
}
export default new OrderPage();
