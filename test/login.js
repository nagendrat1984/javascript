import assert from 'assert';
import expect from 'chai';

// Import for custom commands
import actions from '../customcommands/actions.js';
//Import Pages
import login_page from '../classes/login_page.js';
import Page from '../classes/base_page.js';

describe('webdriver.io page', () => {

    before(() => {
        browser.url('/');
    });
   
    it('verify the title of the xplan page', () => {
        const title = browser.getTitle();
        assert.equal(title, 'XPLAN Today | AMP XPLAN');
    });

    it('Enter login details', () => {

        //login_page.usernameInput.setValue('ntanguturi');
        //login_page.passwordInput.setValue('~Rishiv12012018');

        login_page.usernameInput.setValue('ipulikot');
        login_page.passwordInput.setValue('Password01');
        //login_page.compare('.content');
        
    });

    it('Verify login home page', () => {        
        login_page.loginButton.waitAndClick();
        //login_page.compare('.framemain');           
    });


    it('verify logout', () => {
        login_page.logout.waitAndClick();    
    });

});