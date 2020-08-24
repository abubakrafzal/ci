import Page from './Page';
import { assert,  should } from 'chai';
// import { ElementHomePage } from 'src/pages/elements/Elements';

class Homepage extends Page {
    /**
     * define elements
     */
    get searchButton() {
        return $('input.gNO89b');
    }
    get resultsList() {
        return $('#resultStats');
    }
    get searchInput() {
        return $("//div[@class='a4bIc']//input[@name='q']");
    }
    get addPetBTN() {
        return $("//div[@class='add_pet_sidebar_button']");
    }

    /**
     * define or overwrite page methods
     */



    async checkHomeTitle() {
        let actualTitle: string = await browser.getTitle();
        let expectedTitle =
            'Custom Stuffed Animals of Pets - 100% Premium Quality | Cuddle Clones';
        await expect(actualTitle).toEqual(expectedTitle);
        browser.maximizeWindow();
        let val = await browser.getWindowSize();
         console.log(val);
    }
    async gotoMyAccount() {
        let expectedUrl = 'https://qa.cuddleclones.com/my-account/';
        await browser.url(expectedUrl);
        let currentUrl = await browser.getUrl();
        await expect(currentUrl).toEqual(
            expectedUrl);
    }

    addNewBtn() {
        this.addPetBTN.waitForExist();
        this.addPetBTN.scrollIntoView();
        browser.execute('arguments[0].click();', this.addPetBTN);
    }
    async addNewBtnasync() {
        let addpet= await $("//div[@class='add_pet_sidebar_button']");
        await addpet.waitForExist();
        await addpet.scrollIntoView();
        await browser.execute('arguments[0].click();',addpet)
        // this.addPetBTN.waitForExist(4000);
        // this.addPetBTN.scrollIntoView();
        // browser.execute('arguments[0].click();', this.addPetBTN);
    }
 

    async closeLastOpenedWindow(obsolete: string) {
        const lastWindowHandle = await browser.getWindowHandles().slice(-1)[0];

        await browser.closeWindow();
        await browser.switchToWindow(lastWindowHandle);
    }
    goToBaseURL(){
        try {
            super.syncFirstWindowHandle();

        }
        catch (e) {
                console.log(e);
        }
    }

}

export default new Homepage();
