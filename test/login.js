//const assert = require('assert');
import assert from 'assert';
//let expect = require('chai').expect;
import expect from 'chai'

// Import for custom commands
import actions from '../customcommands/actions.js';
import login_page from '../classes/login_page.js';
import Page from '../classes/base_page.js';
//import LoginPage from './classes/loginPage'

// function compare(results){
//     results.forEach((result, idx)=> expect(result.isExactSameImage, 'Image ' + idx + ' isn\'t the same').to.be.true);
// }



describe('webdriver.io page', () => {

    before(() => {
        browser.url('/');
    });
   
    it('verify the title of the xplan page', () => {
        
        const title = browser.getTitle();
        assert.equal(title, 'XPLAN Today | AMP XPLAN');
        //browser.pause(30000);
        // const userid = $('#userid');
        // userid.setValue('ntanguturi');
        // let report = browser.checkElement('.content');
        // console.log(report);
        // compare(report);
    });

    it('Enter login details', () => {

        //login_page.usernameInput.setValue('ntanguturi');
        //login_page.passwordInput.setValue('~Rishiv12012018');

        login_page.usernameInput.setValue('ipulikot');
        login_page.passwordInput.setValue('Password01');
        login_page.compare('.content');

        //const userid = $('#userid');
        //userid.setValue('ipulikot');
        //userid.setValue('ntanguturi');
        //const password = $('#passwd');
        //password.setValue('Password01')
        //password.setValue('~Rishiv12012018')        
        // let loginreport = browser.checkElement('.content');
        // console.log(loginreport);
        // compare(loginreport);
        
  
    });

    it('Verify login home page', () => {
        
        login_page.loginButton.waitAndClick();
        //login_page.compare('.framemain');

        //const loginButton = $('#btn_login')
        //loginButton.click();
        //loginButton.waitAndClick();
        //let homepagereport = browser.checkElement('.framemain');
        //console.log(homepagereport);
        //compare(homepagereport);         
    });


    it('verify logout', () => {
        
        login_page.logout.waitAndClick();

        // const logout = $('#mfts-logout');
        // logout.click();
        //const logouttext = $('#btn_login').getText();
        //assert.equal(logouttext, 'Login');
        //browser.pause(30000);       
    });



});