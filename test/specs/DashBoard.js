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

    it("Create New Dashboard",  function(){
        this.timeout(300000); // 5 minutes
        RocksPage.AccountLogin(access.GmailAccount.Email, access.GmailAccount.Password);
        RocksPage.createDashBoard()  
    });


    it("Update the New Dashboard",  function(){
        this.timeout(300000); // 5 minutes
        RocksPage.AccountLogin(access.GmailAccount.Email, access.GmailAccount.Password);
        RocksPage.createDashBoard() 
        RocksPage.editDashboard()
        

    });

    it("Deleting the New Dashboard",  function(){
        this.timeout(300000); // 5 minutes
        RocksPage.AccountLogin(access.GmailAccount.Email, access.GmailAccount.Password);
        RocksPage.createDashBoard() 
        RocksPage.deleteDashboard()

    });

    it("Copy as New Dashboard",  function(){
        this.timeout(300000); // 5 minutes
        RocksPage.AccountLogin(access.GmailAccount.Email, access.GmailAccount.Password);
        RocksPage.createDashBoard()
        RocksPage.copyAsNewDashboard()
        

    });

    it("Set as Default Dashboard",  function(){
        this.timeout(300000); // 5 minutes
        RocksPage.AccountLogin(access.GmailAccount.Email, access.GmailAccount.Password);
        RocksPage.createDashBoard()
        RocksPage.setDefaultDashboard()

        

        

    });



    afterEach(function() {
        // runs after all tests in this file
        browser.closeWindow()
        browser.reloadSession()
    });
});
