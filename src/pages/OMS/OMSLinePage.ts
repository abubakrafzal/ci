import Page from 'src/pages/Page';
import { ElementOMSLineItem } from 'src/pages/elements/Elements';
import { FilePath } from 'src/pages/elements/FilePath';

const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

// const image = fs.readFileSync('../Data/Images')
let omsValue = yaml.safeLoad(
    fs.readFileSync(FilePath.OmsYaml, 'utf8')
);
let rolesValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/Roles.yml', 'utf8')
);
let OmsRoles ="./src/Data/Json/OmsRoles.json";

class OMSLinePage extends Page {
    clickSelectLineItem(value) {
        let yamlValue = omsValue[value]['line_item'];
        let lineElem = $("//a[contains(text(),'" + yamlValue + "')]");
        super.syncWaitExistAndClick(lineElem);
    }
    getLineStatus(value) {
        let itemStatusElem = $(ElementOMSLineItem.lineItemStatusElem);
        itemStatusElem.waitForExist();
        itemStatusElem.click();
        let yamlValue = rolesValue[value]['item_status'];

        let selectItemElem = $("//li[contains(text(),'" + yamlValue + "')]");
        super.syncWaitExistAndClick(selectItemElem);
    }
    clickUpdateLineItem() {
        let elem = $(ElementOMSLineItem.lineupdateElem);
        super.syncWaitExistAndClick(elem);
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




}
export default new OMSLinePage();
