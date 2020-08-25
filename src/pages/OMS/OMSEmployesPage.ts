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
let OmsRoles ="./src/Data/Json/OmsRoles.json";
let rolesValue = yaml.safeLoad(
    fs.readFileSync('./src/Data/Yaml/Roles.yml', 'utf8')
);
class OMSEmployesPage extends Page {
    verifyEmployee(value){
        let response = super.syncJsonRead(OmsRoles);
        let val = response[value];
        let firstName = val.split(/ (.+)/)[0];
        let lastName = val.split(/ (.+)/)[1];
        let yamlValue = rolesValue[value]['assignment_group'];
        let titleEmployeeElem = $("//td[@class='col col-first_name'][contains(text(),'"+firstName+"')]//following-sibling::td[contains(text(),'"+lastName+"')]//following-sibling::td[@class='col col-title']");
        let actual= titleEmployeeElem.getText();
        super.syncVerifyContainElem(titleEmployeeElem,actual,yamlValue);


    }


}
export default new OMSEmployesPage();