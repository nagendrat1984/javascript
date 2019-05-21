let expect = require('chai').expect;

class Page {

    compare(locator){
        let results = browser.checkElement(locator);
        console.log(results);
        results.forEach((result, idx)=> expect(result.isExactSameImage, 'Image ' + idx + ' isn\'t the same').to.be.true);

    }


    waitUntilExist(locator){

        browser.waitUntil(function() {
            return $(locator).isExisting();
         }, 15000);
    }

}

export default Page;