// var Page = require('./page')


var elemenDefinition = Object.create(this,{
    /**
     * define elements on DashBoard
     */
    wholePage: { get: function () { return browser.maximizeWindow(); } },
    signInText: { get: function () { return browser.$(`a=sign in`); } },
    ENTER: { get: function () { return browser.keys('Enter'); } },
    username: { get: function () { return browser.$(`[id="username"]`); } },
    password: { get: function () { return browser.$(`[id="password"]`); } },
    dashboard: { get: function () { return browser.$(`a=Dashboards`); } },
    createDashBoardbtn: { get: function () { return browser.$(`//*[contains(text(),'Create a New Dashboard') ] `); } },
    boardCode: { get: function () { return browser.$$(`.mat-input-element`)[0]; } },
    boardName: { get: function () { return browser.$$(`.mat-input-element`)[1]; } },
    OrgTypeOption: { get: function () { return browser.$(`[id="organisationLinkType"]`); } },
    profileOption: { get: function () { return browser.$(`[id="profile"]`); } },
    iconOption: { get: function () { return browser.$(`[id="icon"]`); } },
    contractOption: { get: function () { return browser.$(`[id="contract"]`); } },
    orgGroupOption: { get: function () { return browser.$(`[id="organisationGroupConfiguration"]`); } },
    addWidgets: { get: function () { return browser.$(`span=Add Widget`); } },
    firstNextBtn: { get: function () { return browser.$(`[id="next-button-0"]`); } },
    WidgetComponent:  {get: function () { return browser.$(`[id="component-0"]`); } },
    WidgetSize:  {get: function () { return browser.$(`[id="colSize-0"]`); } },
    WidgetTitle:  {get: function () { return browser.$(`[id="title-0"]`); } },
    secondNextBtn: {get: function () { return browser.$(`[id="next-button-1"]`); } },
    // savebtn: {get: function () { return browser.$('[class="btn btn-primary btn-sm ng-star-inserted"]'); } },
    savebtn: { get: function () { return browser.$(`button.btn.btn-primary.btn-sm.ng-star-inserted`); } },
    dashboardName: {get: function () { return browser.$(`[class="mat-card-title"]`); } },
    dashboardLink: { get: function () { return browser.$(`a=Dashboards`); } },
    updateDashBoardBtn:  { get: function () { return browser.$(`//*[contains(text(),'Update Dashboard Details')]`); } },
    deleteDashBoardBtn:  { get: function () { return browser.$(`//*[@type='button' and span='Delete Dashboard']`); } },
    copyAsNewDashBoardBtn:  { get: function () { return browser.$(`//*[@type='button' and span='Copy as a New Dashboard']`); } },
    setDefaultDashBoardBtn:  { get: function () { return browser.$(`//*[@type='button' and span='Set as Default Dashboard']`); } },
    next: { get: function () { return browser.$(`span=Next`); } },
    burgerMenu: { get: function () { return browser.$(`[class="ng-fa-icon fa-icon-closed"]`); } },
    
    //** Purchase Order Elements */
    createNewPurchaseOrder: { get: function () { return browser.$(`[id="card-text-create-new purchase order"]`); } },
    purchaseOrderDeliveryAddress: { get: function () { return browser.$(`[id="autocomplete-form-Delivery Address"]`); } },
    purchaseOrderDestinationPort: { get: function () { return browser.$(`[id="autocomplete-form-Destination Port"]`); } },
    purchaseOrderAgent: { get: function () { return browser.$(`[id="purchase-order-agent-select"]`); } },
    purchaseOrderNumber: { get: function () { return browser. $(`[id="purchase-order-order-number-input"]`); } },
    purchaseOrderSupplier: { get: function () { return browser. $(`[id="purchase-order-supplier-select"]`); } },
    purchaseOrderNxt1Btn: { get: function () { return browser. $(`[id="purchase-order-form-next-button"]`); } },
    purchaseOrderNxt2Btn: { get: function () { return browser. $(`[id="purchase-order-form-second-next-button"]`); } },
    purchaseProduct: { get: function () { return browser. $(`[id="autocomplete-form-Product"]`); } },
    createNewPurchaseProduct: { get: function () { return browser. $(`[id="create-new"]`); } },
    addOrderLineBtn: { get: function () { return browser.$(`[id="purchase-order-form-add-button"]`); } },
    purchaseOrderLine: { get: function () { return browser.$(`[id="purchase-order-line-number-input"]`); } },
    purchaseUnitQuantity: { get: function () { return browser.$(`[id="unitOfQuantityId"]`); } },
    deletePurchaseOrder: { get: function () { return browser.$(`[id="delete-purchase-order-1"]`); } },
    saveAndFinalisePurchaseOrder: { get: function () { return browser.$(`[id="complete-purchase-order-2"]`); } },
    orderQuantity: { get: function () { return browser.$(`[id="purchase-order-qty-ordered-input"]`); } },
    updateButtonEnable: { get: function () { return browser.$(`button[id*='updateButton']:not(:disabled)`); } },
    purchaseOrderLink: { get: function () { return browser.$(`a=Purchase Orders`); } },
    purchaseOrderFilter: { get: function () { return browser.$(`[id="list-purchase-orders-filter"]`); } },
    updateOrderBtn: { get: function () { return browser.$(`[id="update-purchase-order-status-1"]`); } },
    purchaseOrderStatus: { get: function () { return browser.$(`[id="summary-value-purchase-order status"]`); } },
    orderStatusOption: { get: function () { return browser.$(`[id="purchase-order-status-select"]`); } },
    purchaseOrderStatusSaveBtn: { get: function () { return browser.$(`[id="purchase-order-status-save-button"]`); } },
    cancelPurchaseOrder: { get: function () { return browser.$(`[id="cancel-purchase-order-1"]`); } },
    confirmedPurchaseOrder: { get: function () { return browser.$(`[id="confirm-purchase-order-1"]`); } },
    qaRequired: { get: function () { return browser.$(`[id="update-to-required-quality-assurance-status-1"]`); } },
    qaComplete: { get: function () { return browser.$(`[id="update-to-complete-quality-assurance-status-1"]`); } },
    qaStatus: { get: function () { return browser.$(`[id="summary-value-quality-assurance status"]`); } },
    markAsUrgentBtn: { get: function () { return browser.$(`[id="update-to-urgent-management-priority-1"]`); } },
    standardPriorityOrder: { get: function () { return browser.$(`[id="update-to-standard-management-priority-1"]`); } },
    managementPriorityStatus: { get: function () { return browser.$(`[id="summary-value-management-priority"]`); } },
    
    
    

    

    

    
    
    
});

module.exports = elemenDefinition;