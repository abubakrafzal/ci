//
//

const yaml = require('js-yaml');
const fs = require('fs');


let cred = yaml.safeLoad(fs.readFileSync("./src/Data/Yaml/users.yml", 'utf8'));

module.exports.add=() => {
        try {
            if (process.env.NODE_ENV === 'QA') {
                browser.pause(3000);
                let closeTab = $("//div[@class='cf-cta-close']");
                closeTab.waitForDisplayed();
                closeTab.click();

            } else if(process.env.NODE_ENV === 'PROD') {
                console.log("*********************");
                console.log("Before scenario in Else")
                console.log("*********************");
            }
            else {

            }
        }
        catch (e){
        console.log("catch")
         e.message
        }

}
module.exports.KeyHome=() =>{
    try {
        browser.url('/my-account/?autologin_code=uI6j6U2RFjH4ECF466UtWHvNSfQIzZKq');
    }
    catch (e) {
        console.log("KEY HOME Catch")
    }

}
module.exports.loginVerify=() => {
    let account = $("//a[@class='nav-link'][contains(text(),'Account')]");
    account.waitForExist();
    account.click();
    try {
    let login_modal = $("//div[@class='create_login']");
    login_modal.waitForDisplayed();
    if (login_modal.isDisplayed()) {
        let loginbtn = $("//div[@class='login']");
        loginbtn.click();
        if (process.env.NODE_ENV === 'QA') {
            let user_value = cred['admin']['username'];
            let password_value = cred['admin']['password'];
            let username = $("#user_login");
            let password = $("#user_pass");
            let rememberMe = $('#rememberme');
            let loginBtn =$('#wp-submit');

            username.waitForDisplayed();
            username.setValue(user_value);
            // username.setValue(process.env.QA_UserName);
            password.waitForDisplayed();
            password.setValue(password_value);
            rememberMe.waitForExist();
            rememberMe.click();
            loginBtn.waitForExist();
            loginBtn.click();

        }
        else if(process.env.NODE_ENV === 'PROD') {
            let username = $("#user_login");
            username.waitForDisplayed();
            username.setValue(process.env.PROD_UserName);
        }

    } else {
        console.log("*********************");
        console.log("No User is present");

    }
    }
    catch (e) {

        browser.url('/');

        console.log("*********************");
        console.log("Already Login");
    }
}


//
//
//  }
