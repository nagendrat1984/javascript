const assert = require('assert');
let expect = require('chai').expect;

function compare(results){
    results.forEach((result, idx)=> expect(result.isExactSameImage, 'Image' + idx + 'isn\'t the same').to.be.true);
}
describe('webdriver.io page', () => {
    it('my first test', () => {
        browser.url('/');
        const title = browser.getTitle();
        assert.equal(title, 'XPLAN Today | AMP XPLAN');
        //browser.pause(30000);
        const userid = $('#userid');
        userid.setValue('ntanguturi');
        let report = browser.checkElement('.content');
        console.log(report);

        compare(report);
    });
});