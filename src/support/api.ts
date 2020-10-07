import * as fs from 'fs';

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;


 class Api {

    conf(){
        let ApiUrl;
        let key;
        let secret;
        if (process.env.NODE_ENV === 'QA') {
            ApiUrl = process.env.QA_WooURL;
            key =process.env.QA_Key;
            secret = process.env.QA_Secret
        } else {
            key =process.env.QA_Key;
            secret = process.env.QA_Secret
            ApiUrl = process.env.QA_NO;
        }

        return new WooCommerceRestApi({
            url: ApiUrl,
            consumerKey: key,
            consumerSecret: secret,

            version: "wc/v3"
        });
    }



    async apiPostOrder(data,key,file) {

        const res = await this.conf().post("orders", data);
        let obj ={};
        obj[key] = await res.data;

        console.log(obj);
        let  newData;
        let response2 = fs.readFileSync(file, 'utf8');
        let parsed = JSON.parse(response2); //now it an object
        if (!parsed[key]) {
            console.log('-----if bracked');
            // console.log(!parsed[key])
            // console.log(...parsed)
            newData ={...parsed, ...obj}

        }
        else if (parsed[key]) {
            console.log("else ",[key]);
            newData = { ...parsed, ...obj };


            // newData = { ...parsed[key], ...obj };


        }
        else {
            console.log('----else')
            let data = { ...parsed[key], ...obj[key] };
            // console.log(data)
            newData = { [key]:{...data} };

        }


        let json = JSON.stringify(newData); //convert it back to json
        fs.writeFileSync(file, json); // write it back

    }
    async getOrder(key){
        return await this.conf().get("orders/" + key + "");
    }



}
export default new Api();
