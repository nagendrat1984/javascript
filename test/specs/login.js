//const assert = require('assert');
import assert from 'assert';
let expect = require('chai').expect;

function compare(results){
    results.forEach((result, idx)=> expect(result.isExactSameImage, 'Image ' + idx + ' isn\'t the same').to.be.true);
}



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
        const userid = $('#userid');
        //userid.setValue('ipulikot');
        userid.setValue('ntanguturi');
        const password = $('#passwd');
        //password.setValue('Password01')
        password.setValue('~Rishiv12012018')


        let loginreport = browser.checkElement('.content');
        console.log(loginreport);
        compare(loginreport);
  
    });

    it('Verify login home page', () => {
        const login = $('#btn_login')
        login.click()
        let homepagereport = browser.checkElement('.framemain');
        console.log(homepagereport);
        compare(homepagereport); 
    });


    it('verify logout', () => {
        const logout = $('#mfts-logout');
        logout.click();

        //const logouttext = $('#btn_login').getText();
        //assert.equal(logouttext, 'Login');
        //browser.pause(30000);       
    });



});