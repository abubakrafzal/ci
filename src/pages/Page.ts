
const fetch = require('node-fetch');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

export default class Page {

    
    public async clearInputField(selector) {
        let element = await selector;
        await element.clearValue();
    }
    public async setInputField(method: 'add' | 'set', value: string, selector) {
        const command = (await method) === 'add' ? 'addValue' : 'setValue';
        const element = await selector;

        await element[command](value || '');
    }
     waitAndclick(selector) {
        try {
             selector.waitForClickable();
             selector.scrollIntoView();
             selector.click();
        } catch (Error) {
            console.log(Error);
        }
    }
   async displayAndclick(selector) {
        try {
            await selector.waitForClickable();
           await selector.scrollIntoView();
           await selector.click();
        } catch (Error) {
            throw new Error('Could not click on selector: ' + selector);
        }
    }
    async staticWaitAndclick(selector) {
        try {
            await browser.pause(3000);
            await selector.scrollIntoView();
            await selector.click();
        } catch (Error) {
            throw new Error('Could not click on selector: ' + selector);
        }
    }
    async staticJsClick(selector) {
        try { 
            await browser.pause(3000);
            await selector.scrollIntoView();
            await browser.execute('arguments[0].click();',selector)

        }
        catch(e){}
    }
    async closeAllButFirstTab(obsolete: string) {
        const windowHandles = await browser.getWindowHandles();

        // Close all tabs but the first one
        await windowHandles.reverse();

        for (const handle of windowHandles) {
            let index = windowHandles.indexOf(handle);
            await browser.switchToWindow(handle);
            if (index < windowHandles.length - 1) {
                await browser.closeWindow();
            }
        }
    }
}
