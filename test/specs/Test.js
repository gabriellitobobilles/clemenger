var RocksPage = require('../../PageObjects/cif.page');
const access= require('../../testdata/testdata.js')
var elem = require('../../PageObjects/elementDefinitions')
const assert = require("assert");
var Page = require('../../PageObjects/page')

describe("Demo",  function() {


    beforeEach(function() {
        // runs before all tests in this file regardless where this line is defined.
        RocksPage.open();

    });



    it("Delete Purchase Order",  function(){
        this.timeout(300000); // 5 minutes
        RocksPage.AccountLogin(access.GmailAccount.Email, access.GmailAccount.Password);
        RocksPage.createDashBoard()
        RocksPage.purchaseOrder()
        RocksPage.deletePurchaseOrder()

    });


    afterEach(function() {
        // runs after all tests in this file
        browser.closeWindow()
        browser.reloadSession()
    });
});
