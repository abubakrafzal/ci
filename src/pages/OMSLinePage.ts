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
let testvalue = './src/Data/Yaml/test.yml';

class OMSLinePage extends Page {



}
export default new OMSLinePage();