module.exports = (function() {

    browser.addCommand('waitAndClick', function() {
        this.waitForVisible();
        this.waitForExist();
        this.click();
    });

    browser.addCommand('inputText', function(text) {
        this.waitForVisible();
        this.setValue(text);
    });

    // browser.addCommand('waitUntilExist', function(locator) {
    //     browser.waitUntil(function() {
    //         return $(locator).isExisting();
    //      }, 15000);
    // });

 })();