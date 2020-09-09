var Page = require('./page')
var Name = require('./name')
var elem = require('./elementDefinitions')
const access= require('../testdata/testdata')
const assert = require("assert");
const { lstat } = require('fs');

// var codeBoard = '';
// var boardName = '';
// var newBoarName = '';
// var CopyCodeBoard = '';
var codeBoard, boardName, newBoarName, purchaseOrderNum, CopyCodeBoard = "";

var LoginPage = Object.create(Page,{


    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, '');
        elem.wholePage;
    } },
    


    AccountLogin: { value: function(Username , Password){
        elem.signInText.waitForDisplayed({ timeout: 270000 });
        elem.signInText.click();
        elem.username.waitForDisplayed({ timeout: 270000 });
        elem.username.click();
        browser.pause(1000);
        elem.username.setValue(Username);
        browser.pause(1000);
        elem.password.click();
        browser.pause(1000);
        elem.password.setValue(Password);
        browser.pause(1000);
        elem.ENTER;
        elem.dashboard.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(elem.dashboard.isExisting(), true)
        elem.dashboard.click()
        
        
    }},

    createDashBoard: { value: function(){
        
        browser.pause(2000);
        elem.dashboard.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(elem.dashboard.isExisting(), true)
        elem.dashboard.click()
        elem.createDashBoardbtn.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(elem.createDashBoardbtn.isExisting(), true)
        elem.createDashBoardbtn.click()
        browser.pause(1000);
        assert.strictEqual(elem.firstNextBtn.isEnabled(), false);
        // assert.strictEqual(elem.firstNextBtn.getAttribute('ng-reflect-disabled'), `true`);
        elem.boardCode.click();
        browser.pause(1000);
        elem.boardCode.setValue(Page.dashBoardCode());
        browser.pause(1000);
        codeBoard = elem.boardCode.getValue();
        elem.boardName.click();
        elem.boardName.setValue(Page.dashBoardName())
        browser.pause(1000);
        boardName = elem.boardName.getValue();
        elem.OrgTypeOption.click()
        browser.pause(1000);
        $('span=Forwarder').click();
        elem.profileOption.waitForDisplayed({ timeout: 270000 });
        elem.profileOption.click()
        browser.pause(1000);
        $('span=Buyer Ops').click();
        elem.iconOption.click()
        browser.pause(1000);
        $('span=Building').click();
        elem.contractOption.waitForDisplayed({ timeout: 270000 });
        elem.contractOption.click()
        browser.pause(1000);
        $('span=Simplot Australia').click();
        elem.orgGroupOption.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(elem.orgGroupOption.isExisting(), true)
        elem.orgGroupOption.click()
        browser.pause(1000);
        $('span=Global forwarding').click();
        browser.pause(1000);
        // $(`span=Next`).click();
        elem.firstNextBtn.click();


        //** Adding widgets to the DashBoard */
        browser.pause(1000);
        elem.addWidgets.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(elem.addWidgets.isExisting(), true)
        elem.addWidgets.click()
        browser.pause(1000);
        // assert.strictEqual(elem.secondNextBtn.getAttribute('ng-reflect-disabled'), `true`);
        assert.strictEqual(elem.secondNextBtn.isEnabled(), false);

        elem.WidgetComponent.click()
        browser.pause(1000);
        $(`span=Traffic Lights`).click()
        browser.pause(500);
        elem.WidgetSize.click()
        browser.pause(1000);
        $(`span=Full Width`).click();
        const widgets = access.widgetArray();

        for (i = 1; i <= widgets.length - 1; i++) {
            browser.pause(1000);
            elem.addWidgets.click()
            browser.pause(1000);
            assert.strictEqual(elem.secondNextBtn.isEnabled(), false);
            $(`[id="component-${i}"]`).click()
            browser.pause(1000);
            $(`span=${widgets[i]}`).click()
            browser.pause(1000);
            $(`[id="colSize-${i}"]`).click()
            browser.pause(1000);
            browser.pause(500);
            $('//mat-option[2]/span').click();
            browser.pause(1000);
        }
        browser.pause(1000)
        elem.secondNextBtn.click();
        browser.pause(2000)
        elem.savebtn.click()
        elem.updateDashBoardBtn.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(elem.dashboardName.getText(), boardName);

    }},

    editDashboard: { value: function(){

        this._filter(codeBoard)
        $(`a=${codeBoard}`).click();
        assert.strictEqual(elem.dashboardName.getText(), boardName);
        browser.pause(1000);
        elem.updateDashBoardBtn.click()
        browser.pause(1000);
        elem.firstNextBtn.waitForDisplayed({ timeout: 270000 });
        elem.boardName.waitForDisplayed({ timeout: 270000 });
        elem.boardName.clearValue()
        browser.pause(1000);
        elem.boardName.setValue(Page.dashBoardName())
        browser.pause(2000)
        newBoarName = elem.boardName.getValue();
        browser.pause(1000)
        elem.firstNextBtn.click();
        browser.pause(1000)
        const widgets = access.widgetArray();
        const widgetTitles = access.widgetTitles();
        for (i = 0; i <= widgets.length-1; i++) {
            browser.pause(1000);
            assert.strictEqual(elem.secondNextBtn.isEnabled(), true);
            $(`[id="title-${i}"]`).click()
            browser.pause(1000);
            $(`[id="title-${i}"]`).setValue(widgetTitles[i])
            browser.pause(1000);
        }
        elem.secondNextBtn.click();
        elem.savebtn.waitForDisplayed({ timeout: 270000 });
        browser.pause(2000)
        elem.savebtn.click()
        elem.deleteDashBoardBtn.waitForDisplayed({ timeout: 270000 });

        for (i = 1; i <= widgets.length-1; i++) {
            browser.pause(1000);
            let widgetCheck = widgetTitles[i].toLowerCase().replace(` `, `-`)
            assert.strictEqual($(`[id="card-text-${widgetCheck}"]`).isExisting(), true);
        }

        

        
    }},

    deleteDashboard: { value: function(){

        this._filter(codeBoard)
        $(`a=${codeBoard}`).click();
        browser.pause(2000);
        assert.strictEqual(elem.dashboardName.getText(), boardName);
        browser.pause(1000);
        elem.deleteDashBoardBtn.waitForDisplayed({ timeout: 270000 });
        elem.deleteDashBoardBtn.click();
        browser.pause(2000);
        assert.strictEqual(browser.isAlertOpen(), true);
        browser.acceptAlert()
        $(`a=Home`).click()
        browser.pause(1000);
        elem.dashboard.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(elem.dashboard.isExisting(), true)
        elem.dashboardLink.click();
        $(`.mat-input-element`).waitForDisplayed({ timeout: 270000 });
        $(`.mat-input-element`).click();
        $(`.mat-input-element`).setValue(codeBoard)
        elem.ENTER;
        browser.pause(1000);
        assert.strictEqual($(`a=${codeBoard}`).isExisting(), false);
        
    }},


    copyAsNewDashboard: { value: function(){

        this._filter(codeBoard)
        $(`a=${codeBoard}`).click();
        browser.pause(2000);
        assert.strictEqual(elem.dashboardName.getText(), boardName);
        browser.pause(1000);
        elem.copyAsNewDashBoardBtn.waitForDisplayed({ timeout: 270000 });
        elem.copyAsNewDashBoardBtn.click();
        browser.pause(2000);
        elem.boardCode.click();
        elem.boardCode.setValue(Page.dashBoardCode());
        browser.pause(1000);
        CopyCodeBoard = elem.boardCode.getValue();
        browser.pause(1000);
        elem.firstNextBtn.waitForDisplayed({ timeout: 270000 });
        elem.firstNextBtn.click();
        browser.pause(1000)
        elem.secondNextBtn.waitForDisplayed({ timeout: 270000 });
        elem.secondNextBtn.click();
        elem.savebtn.waitForDisplayed({ timeout: 270000 });
        browser.pause(2000)
        elem.savebtn.click()
        elem.deleteDashBoardBtn.waitForDisplayed({ timeout: 270000 });
        this._filter(CopyCodeBoard)
        assert.strictEqual($(`a=${CopyCodeBoard}`).isExisting(), true);
        
    }},


    setDefaultDashboard: { value: function(){

        this._filter(codeBoard)
        $(`a=${codeBoard}`).click();
        browser.pause(2000);
        assert.strictEqual(elem.dashboardName.getText(), boardName);
        browser.pause(1000);
        elem.setDefaultDashBoardBtn.waitForDisplayed({ timeout: 270000 });
        elem.setDefaultDashBoardBtn.click();
        browser.pause(2000);
        this._signout()
        this._signIn(access.GmailAccount.Email, access.GmailAccount.Password)
        elem.setDefaultDashBoardBtn.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(elem.dashboardName.getText(), boardName);
        browser.pause(2000);
        
    }},


    purchaseOrder: { value: function(){

        elem.createNewPurchaseOrder.waitForDisplayed({ timeout: 270000 });
        elem.createNewPurchaseOrder.click();
        //** Step 1 */
        assert.strictEqual(elem.purchaseOrderNxt1Btn.isEnabled(), false);
        elem.purchaseOrderDeliveryAddress.click()
        elem.purchaseOrderDeliveryAddress.setValue(`AU`)
        browser.pause(1000);
        $('span=SIMPLOT AUSTRALIA PTY LTD 3 BRADFORD STREET BATHURST NSW 2795 Australia').click();
        elem.purchaseOrderDestinationPort.click()
        elem.purchaseOrderDestinationPort.setValue(`AU`)
        browser.pause(1000);
        $('span=AUABP - Abbot Point').click();
        browser.pause(1000);
        elem.purchaseOrderAgent.click()
        $('span=DACHSER SHENZHEN CO., LTD.CHENGDU BRANCH').click();
        elem.purchaseOrderNumber.click()
        elem.purchaseOrderNumber.setValue(Page.purchaseNumber())
        purchaseOrderNum = elem.purchaseOrderNumber.getValue()
        assert.strictEqual(elem.purchaseOrderNxt1Btn.isEnabled(), true);
        elem.purchaseOrderSupplier.click()
        $('span=QINGDAO OCEAN GARDEN IMP & EXP CO').click();
        browser.pause(1000);
        elem.purchaseOrderNxt1Btn.waitForDisplayed({ timeout: 270000 });
        elem.purchaseOrderNxt1Btn.scrollIntoView()
        elem.purchaseOrderNxt1Btn.click()
         //** Step 2 */
        elem.addOrderLineBtn.waitForDisplayed({ timeout: 270000 });
        elem.addOrderLineBtn.click()
        elem.purchaseOrderLine.waitForDisplayed({ timeout: 270000 });
        // elem.purchaseOrderLine.clearValue()
        elem.purchaseOrderLine.click()
        elem.purchaseOrderLine.setValue(Page.purchaseNumber())
        assert.strictEqual(elem.purchaseOrderNxt2Btn.isEnabled(), false);
        elem.purchaseProduct.click()
        browser.pause(1000);
        elem.purchaseProduct.setValue(Page.dashBoardCode())
        browser.pause(1000);
        elem.createNewPurchaseProduct.waitForDisplayed({ timeout: 270000 });
        elem.createNewPurchaseProduct.click()
        elem.purchaseUnitQuantity.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual($(`[id="updateButton"]`).isEnabled(), false)
        $$(`//*[starts-with(@id,'mat-input-')]`)[2].click()
        $$(`//*[starts-with(@id,'mat-input-')]`)[2].setValue(Page.dashBoardName())
        $$(`//*[starts-with(@id,'mat-input-')]`)[2].getValue();
        elem.purchaseUnitQuantity.click()
        browser.pause(1000);
        $('span=Bundle').click();
        browser.pause(1000);
        elem.updateButtonEnable.click()
        browser.pause(1000);
        // $(`[id="autocomplete-form-Product"]`).click()
        browser.pause(1000);
        $(`[id="item-0"]`).waitForDisplayed({ timeout: 270000 });
        browser.pause(1000);
        $(`[id="item-0"]`).moveTo()
        browser.pause(1000);
        $(`[id*='item-0']:not(:disabled)`).click();
        // $(`[id="item-0"]`).click()
        browser.pause(1000);
        elem.orderQuantity.click()
        elem.orderQuantity.setValue(`40`)
        browser.waitUntil(() => elem.purchaseOrderNxt2Btn.isEnabled() === true, { timeout: 270000 })
        assert.strictEqual(elem.purchaseOrderNxt2Btn.isEnabled(), true);
        elem.purchaseOrderNxt2Btn.click()
        elem.saveAndFinalisePurchaseOrder.waitForDisplayed({ timeout: 270000 });
        elem.saveAndFinalisePurchaseOrder.click()
        elem.deletePurchaseOrder.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual($(`[class="mat-card-title"]`).getText(), `Purchase Order `+purchaseOrderNum);
        
        
    }},

    updatePurchaseOrder: { value: function(){

        this._purchaseOrderfilter(purchaseOrderNum)
        $(`a=${purchaseOrderNum}`).click();
        elem.updateOrderBtn.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual($(`[class="mat-card-title"]`).getText(), `Purchase Order `+purchaseOrderNum);
        browser.pause(1000);
        let statusOrder = elem.purchaseOrderStatus.getText();
        elem.updateOrderBtn.click()
        browser.pause(1000);
        elem.orderStatusOption.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(statusOrder, elem.orderStatusOption.getText());
        elem.orderStatusOption.click()
        browser.pause(1000);
        $('span=Confirmed').click();
        browser.pause(1000);
        let newstatusOrder = elem.orderStatusOption.getText()
        elem.purchaseOrderStatusSaveBtn.waitForDisplayed({ timeout: 270000 });
        elem.purchaseOrderStatusSaveBtn.click()
        elem.updateOrderBtn.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(newstatusOrder, elem.purchaseOrderStatus.getText());
        
    }},


    cancelPurchaseOrder: { value: function(){

        this._purchaseOrderfilter(purchaseOrderNum)
        $(`a=${purchaseOrderNum}`).click();
        elem.cancelPurchaseOrder.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual($(`[class="mat-card-title"]`).getText(), `Purchase Order `+purchaseOrderNum);
        browser.pause(1000);
        elem.cancelPurchaseOrder.click()
        browser.pause(2000);
        assert.strictEqual(browser.isAlertOpen(), true);
        browser.acceptAlert()
        browser.pause(2000);
        assert.strictEqual(elem.cancelPurchaseOrder.isExisting(), false)     
        assert.strictEqual(elem.purchaseOrderStatus.getText(), `Cancelled`);
        
    }},


    confirmedPurchaseOrder: { value: function(){

        this._purchaseOrderfilter(purchaseOrderNum)
        $(`a=${purchaseOrderNum}`).click();
        elem.cancelPurchaseOrder.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual($(`[class="mat-card-title"]`).getText(), `Purchase Order `+purchaseOrderNum);
        browser.pause(1000);
        elem.confirmedPurchaseOrder.click()
        browser.pause(2000);
        assert.strictEqual(browser.isAlertOpen(), true);
        browser.acceptAlert()
        browser.pause(2000);
        assert.strictEqual(elem.confirmedPurchaseOrder.isExisting(), false)     
        assert.strictEqual(elem.purchaseOrderStatus.getText(), `Confirmed`);
        
    }},


    qarequiredAndComplete: { value: function(){

        this._purchaseOrderfilter(purchaseOrderNum)
        $(`a=${purchaseOrderNum}`).click();
        elem.qaRequired.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual($(`[class="mat-card-title"]`).getText(), `Purchase Order `+purchaseOrderNum);
        browser.pause(1000);
        elem.qaRequired.click()
        browser.pause(2000);
        assert.strictEqual(elem.qaComplete.isExisting(), true)     
        assert.strictEqual(elem.qaStatus.getText(), `Required`);
        elem.qaComplete.click()
        browser.pause(2000);
        assert.strictEqual(elem.qaComplete.isExisting(), false)     
        assert.strictEqual(elem.qaStatus.getText(), `Complete`);
        
    }},


    markAsUrgentPurchaseOrder: { value: function(){

        this._purchaseOrderfilter(purchaseOrderNum)
        $(`a=${purchaseOrderNum}`).click();
        elem.markAsUrgentBtn.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual($(`[class="mat-card-title"]`).getText(), `Purchase Order `+purchaseOrderNum);
        browser.pause(1000);
        elem.markAsUrgentBtn.click()
        browser.pause(2000);
        assert.strictEqual(elem.standardPriorityOrder.isExisting(), true)  
        assert.strictEqual(elem.markAsUrgentBtn.isExisting(), false)     
        assert.strictEqual(elem.managementPriorityStatus.getText(), `Urgent`);
        elem.standardPriorityOrder.click()
        browser.pause(2000);
        assert.strictEqual(elem.markAsUrgentBtn.isExisting(), true)  
        assert.strictEqual(elem.standardPriorityOrder.isExisting(), false)    
        assert.strictEqual(elem.managementPriorityStatus.getText(), `Standard`);
        
    }},


    deletePurchaseOrder: { value: function(){

        this._purchaseOrderfilter(purchaseOrderNum)
        $(`a=${purchaseOrderNum}`).click();
        elem.deletePurchaseOrder.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual($(`[class="mat-card-title"]`).getText(), `Purchase Order `+purchaseOrderNum);
        browser.pause(1000);
        elem.deletePurchaseOrder.click()
        browser.pause(2000);
        assert.strictEqual(browser.isAlertOpen(), true);
        browser.acceptAlert()
        browser.pause(2000);
        elem.purchaseOrderLink.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(elem.purchaseOrderLink.isExisting(), true)
        elem.purchaseOrderLink.click();
        elem.purchaseOrderFilter.waitForDisplayed({ timeout: 270000 });
        elem.purchaseOrderFilter.click();
        elem.purchaseOrderFilter.setValue(purchaseOrderNum)
        elem.ENTER;
        browser.pause(1000);
        assert.strictEqual($(`.purchase-order-row`).isExisting(), false)    
        
    }},

    _filter: { value: function(codeBoard){
        browser.pause(2000);
        elem.dashboard.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(elem.dashboard.isExisting(), true)
        elem.dashboardLink.click();
        $(`.mat-input-element`).waitForDisplayed({ timeout: 270000 });
        $(`.mat-input-element`).click();
        $(`.mat-input-element`).setValue(codeBoard)
        elem.ENTER;
        browser.pause(1000);
        $(`a=${codeBoard}`).waitForDisplayed({ timeout: 270000 });
        
    }},

    _purchaseOrderfilter: { value: function(purchaseOrderCode){
        browser.pause(2000);
        elem.purchaseOrderLink.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(elem.purchaseOrderLink.isExisting(), true)
        elem.purchaseOrderLink.click();
        elem.purchaseOrderFilter.waitForDisplayed({ timeout: 270000 });
        elem.purchaseOrderFilter.click();
        elem.purchaseOrderFilter.setValue(purchaseOrderCode)
        elem.ENTER;
        browser.pause(1000);
        $(`a=${purchaseOrderCode}`).waitForDisplayed({ timeout: 270000 });
        
    }},

    _signout: { value: function(codeBoard){
        browser.pause(2000);
        $('[class="mat-button"]').waitForDisplayed({ timeout: 270000 });
        assert.strictEqual($('[class="mat-button"]').isExisting(), true)
        $('[class="mat-button"]').click();
        browser.pause(2000);
        $(`//*[contains(text(),'Sign out')]`).click();
        // browser.pause(9000000);
    }},

    _signIn: { value: function(Username , Password){
        browser.pause(2000);
        elem.signInText.waitForDisplayed({ timeout: 270000 });
        elem.signInText.click();
        elem.username.waitForDisplayed({ timeout: 270000 });
        elem.username.click();
        browser.pause(1000);
        elem.username.setValue(Username);
        browser.pause(1000);
        elem.password.click();
        browser.pause(1000);
        elem.password.setValue(Password);
        browser.pause(1000);
        elem.ENTER;
        elem.dashboard.waitForDisplayed({ timeout: 270000 });
        assert.strictEqual(elem.dashboard.isExisting(), true)
    }},






});

module.exports = LoginPage;