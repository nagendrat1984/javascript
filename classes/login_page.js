
import Page from './base_page'

class LoginPage extends Page {

get usernameInput() {return $('#userid')};
get passwordInput() {return $('#passwd')};
get loginButton() {return $('#btn_login')};
get logout() {return $('#mfts-logout')};


}

export default new LoginPage();