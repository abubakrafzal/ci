import Page from 'src/pages/Page';

const yaml = require('js-yaml');
const fs = require('fs');
import { ElementOrder, ElementCheckout } from 'src/pages/elements/Elements';
import Api from 'src/support/api';
import { data } from 'src/support/Data';
import { FilePath } from 'src/pages/elements/FilePath';

let orderValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/Order.yml', 'utf8')
);

let jsonOrderPath = FilePath.ApiJson;

class Helper extends Page {

    async PostOrder(key) {
        await Api.apiPostOrder(data,key,jsonOrderPath);
    }

    async getOrder(key){
        await Api.getOrder(key);
    }
    openAppliedOrder(value) {
        try{
            let jsonOrder = super.syncJsonRead(jsonOrderPath);
            let yamlOrder = jsonOrder[value]['id'];

            console.log("yamllll",yamlOrder);

            let selectOrderElem = $(
                "//strong[contains(text(),'" + yamlOrder + "')]"
            );
            selectOrderElem.waitForClickable();
            selectOrderElem.click();
        }
        catch (e){
            console.log(e);
            // let order = this.staticOrderIDGlobal;
            // let selectOrderElem = $(
            //     "//strong[contains(text(),'" + order + "')]"
            // );
            // selectOrderElem.waitForClickable();
            // selectOrderElem.click();

        }
    }

}
export default new Helper;