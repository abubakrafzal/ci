import Page from 'src/pages/Page';
import { ElementOMSLineItem } from 'src/pages/elements/Elements';
import { FilePath } from 'src/pages/elements/FilePath';


const yaml = require('js-yaml');
const fs = require('fs');

let rolesValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/Roles.yml', 'utf8')
);
let OmsRoles ="./src/Data/Json/OmsRoles.json";
let credentials ="./src/Data/Json/credentials.json";
let jsonOrderPath = FilePath.ApiJson;

class OMSLinePage extends Page {
    omsValue = super.syncJsonRead(jsonOrderPath);

    clickSelectLineItem(value) {
        let yamlValue = this.omsValue[value]['line_items'][0]['id'];
        let lineElem = $("//a[contains(text(),'" + yamlValue + "')]");
        super.syncWaitExistAndClick(lineElem);
    }
    getLineStatus(value) {
        switch (value) {
            case "Ship from china to hq expected": {

                console.log("No status");
                break;
            }
            case "Ship from hq to customer expected": {

                console.log("No status");

                break;


            }
            default:{
                let itemStatusElem = $(ElementOMSLineItem.lineItemStatusElem);
                itemStatusElem.waitForExist();
                itemStatusElem.click();
                let yamlValue = rolesValue[value]['item_status'];

                let inputLineItem = $(ElementOMSLineItem.lineItemStatusInputElem);
                browser.pause(3000);
                console.log(yamlValue);
                super.syncWaitExistAndEnter(inputLineItem , yamlValue);

                let selectItemElem = $("//li[contains(text(),'" + yamlValue + "')]");
                selectItemElem.scrollIntoView();
                super.syncWaitExistAndClick(selectItemElem);
                break;



            }


        }}
    clickUpdateLineItem() {
        let elem = $(ElementOMSLineItem.lineupdateElem);
        super.syncWaitExistAndClick(elem);
        browser.pause(2000);

    }

    getLineAssignmentGroup(value) {
        let yamlValue = rolesValue[value]['assignment_group'];
        let assignGroupElem = $(ElementOMSLineItem.lineAssignmentGroupElem);
        let assignGroupText = super.syncWaitExistAndText(assignGroupElem);



        super.syncVerifyContainElem(
            assignGroupElem,
            assignGroupText,
            yamlValue
        );

    }

    setAssignUser(value) {
        let itemStatusElem = $(ElementOMSLineItem.lineassigendUserElem);
        itemStatusElem.waitForExist();
        itemStatusElem.click();
        let yamlValue = rolesValue[value]['assigned_user'];

        try {
            let selectItemElem = $("//li[contains(text(),'" + yamlValue + "')]");
            selectItemElem.waitForExist();
            selectItemElem.scrollIntoView();
            let assignedUserValue =selectItemElem.getText();
            selectItemElem.click();

            let obj = {

            };
            obj[value] = assignedUserValue;
            super.syncJSonUpdate(OmsRoles,obj)

        }
        catch(e) {
           let lineAssignedStaticUser =  $(ElementOMSLineItem.lineassigendStaticUserElem);
            let assignedUserValue =lineAssignedStaticUser.getText();

            super.syncWaitExistAndClick(lineAssignedStaticUser);
            let obj = {

            };
            obj[value] = assignedUserValue;
            super.syncJSonUpdate(OmsRoles,obj)

        }
    }
    saveTheOrderID(){
        let elem = $(ElementOMSLineItem.lineGetOrderElem);
        let elemText = elem.getText();
        let obj = {order_num:elemText};
        super.syncJSonUpdate(credentials,obj);

    }

    openWOOAdminStatusChangeOrder(value) {
        let jsonOrder = super.syncJsonRead(credentials);
        let yamlOrder = this.omsValue[value]["line_items"][0]['id'];
        let selectOrderElem = $(
            "//strong[contains(text(),'" + yamlOrder + "')]"
        );
        selectOrderElem.waitForClickable();
        selectOrderElem.click();
    }
    SuccessAlert(){
        let elem = $(ElementOMSLineItem.SuccessAlert);
        let elemText = elem.getText();
        let expected ="successfully updated"
        super.syncVerifyContainElem(elem,elemText,expected);

    }



}
export default new OMSLinePage();
