const fetch = require('node-fetch');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const yaml = require('js-yaml');
const YAML = require('js-yaml');

const fs = require('fs');
const fsextra = require('fs-extra');
export default class Page {
    public orderIdGlobal: number;
    public petIdGlobal: number;

    public async clearInputField(selector) {
        let element = await selector;
        await element.clearValue();
    }
    public async setInputField(method: 'add' | 'set', value: string, selector) {
        const command = (await method) === 'add' ? 'addValue' : 'setValue';
        const element = await selector;

        await element[command](value || '');
    }
    async waitAndclick(selector) {
        try {
            await selector.scrollIntoView();
            await selector.waitForClickable();
            await selector.click();
        } catch (err) {
            console.log(err);
        }
    }
    async displayAndclick(selector) {
        try {
            await selector.scrollIntoView();
            await selector.waitForDisplayed();

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
            await browser.execute('arguments[0].click();', selector);
        } catch (e) {
            e.message();
        }
    }
    async waitTillViewPort(selector) {
        await browser.waitUntil(() => selector.isDisplayedInViewport(), {
            timeout: 10000,
            timeoutMsg:
                " '" +
                selector +
                "' this element doesnt appear in displayPort waitUntill Command",
        });
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

    /** todo Sync
     *
     *
     *
     *
     *
     */
    syncDisplayTill(selector) {
        browser.waitUntil(() => $(selector).isDisplayedInViewport(), {
            timeout: 20000,
            interval: 1500,
            timeoutMsg:
                " '" +
                selector +
                "' this element doesnt appear in displayPort waitUntill Command",
        });
    }

    syncWaitExistAndClick(selector) {
        try {
            selector.waitForExist();
            selector.scrollIntoView();
            selector.waitForClickable();
            selector.click();
        } catch (e) {
            console.log(e);
            console.log('Catch syncWaitExistAndClick JS executor ');
            browser.execute('arguments[0].click();', selector);
        }
    }
    syncWaitExistAndEnter(selector, value) {
        try {
            selector.waitForExist();
            selector.scrollIntoView();
            selector.waitForClickable();
            selector.setValue(value);
        } catch (e) {
            console.log(e);
            console.log('Catch syncWaitExistAndClick JS executor ');
            browser.execute(
                "arguments[0].setAttribute('value','" + value + "')",
                selector
            );
        }
    }
    syncVerifyContainElem(selector, actualValue, expectedValue) {
        selector.waitForExist();
        selector.scrollIntoView();
        selector.waitForDisplayed();
        console.log('$ Selector'+selector+'Actual value' +actualValue+'Expected value'+expectedValue);
        expect(actualValue).toContain(expectedValue);
    }

    syncFirstWindowHandle() {
        const windowHandles = browser.getWindowHandles();

        // Close all tabs but the first one
        windowHandles.reverse();
        windowHandles.forEach((handle, index) => {
            browser.switchToWindow(handle);
            if (index < windowHandles.length - 1) {
                browser.closeWindow();
            }
        });
    }

    //TODO JSON

    syncJSonUpdate(jsonFile, object) {
        let response = fs.readFileSync(jsonFile, 'utf8');
        let parsed = JSON.parse(response); //now it an object

        parsed = { ...parsed, ...object };
        let json = JSON.stringify(parsed); //convert it back to json
        fs.writeFileSync(jsonFile, json); // write it back
        console.log(json);
    }
    syncJsonRead(jsonFile) {
        let response = fs.readFileSync(jsonFile, 'utf8');
        //now it an object
        return JSON.parse(response);
    }
    async asyncJsonRead(jsonFile) {
        try {
            const packageObj = await fsextra.readJson(jsonFile);
            console.log(packageObj); // => 0.1.3
            return packageObj;
        } catch (err) {
            console.error(err);
        }
    }

    async syncWriteYaml(testYmlPath, object) {
        const raw = fs.readFileSync(testYmlPath);
        const data = YAML.safeLoad(raw);
        // Show the YAML

        // Modify the YAML
        // let getYamlvalue =  path.Order_data.order_id;  // Dorothy
        // Saved the YAML
        const yaml = YAML.safeDump(object, {
            styles: {
                '!!omap': 'canonical', // dump null as ~
            },
            sortKeys: true, // sort object keys
        });
        console.log(data);
        await fs.writeFileSync(testYmlPath, yaml);
    }
    async syncWriteYaml2(testYmlPath, object) {
        const raw = fs.readFileSync(testYmlPath);
        const data = YAML.safeLoad(raw);
        // Show the YAML

        // Modify the YAML
        // let getYamlvalue =  path.Order_data.order_id;  // Dorothy
        // Saved the YAML
        const yaml = YAML.safeDump(object);
        console.log(data);
        await fs.appendFileSync(testYmlPath, yaml);
    }

    //READER HELPER
    getTitleURL() {
        return {
            url: browser.getUrl(),
            title: browser.getTitle(),
        };
    }
    SplitNumbers(value): number {
        let splitter: number = value
            .match(/\d+/g)
            .map(Number)
            .join();
        console.log(splitter);
        return splitter;
    }
}
