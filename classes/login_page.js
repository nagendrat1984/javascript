
import Page from './base_page'
//import actions from '../customcommands/actions.js'

const baseUrl = 'https://amptest.xplan.iress.com.au'

class LoginPage extends Page {

get usernameInput() {return $('#userid')};
get passwordInput() {return $('#passwd')};
get loginButton() {return $('#btn_login')};
//get logout() {return $('#mfts-logout')};
get logout() {return $('a=Logout')};


login(username, password) {
    this.usernameInput.inputText(username);
    this.passwordInput.inputText(password);
    this.loginButton.waitAndClick();
    //browser.pause(5000);
    
    browser.waitUntil(function() {
        return (
          (browser.getUrl()) == `${baseUrl}/dashboard/mainhtml` ||
          (browser.getText('#mf-contentinner > div > h2')) ===
            'Duplicated Login'
        );
      }, 5000);
  
  //  If login error, re-enter password and click login
      if ((browser.getUrl()) != `${baseUrl}/dashboard/mainhtml`) {
        this.passwordInput.inputText(password);
        this.loginButton.waitAndClick();
        browser.waitUntil(function() {
          return (browser.getUrl()) == `${baseUrl}/dashboard/mainhtml`;
        }, 5000);
      }
      
     return this;
}

xplanlogout() {
    
    browser.waitUntil(function() {
        return $('a=Logout').isExisting();
     }, 15000, 'Logout button did not exist');

    //this.logout.waitUntilExist('a=Logout');
    
    this.logout.waitAndClick();
      
}

}

export default new LoginPage();