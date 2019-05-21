let expect = require('chai').expect;

class Page {

    compare(locator){
        let results = browser.checkElement(locator);
        console.log(results);
        results.forEach((result, idx)=> expect(result.isExactSameImage, 'Image ' + idx + ' isn\'t the same').to.be.true);

    }


    

}

export default Page;