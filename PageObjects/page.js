const access= require('../testdata/testdata')

function Page () {
    this.title = 'My Page';
}

Page.prototype.open = function (path) {
    browser.url(path)
}
  
Page.prototype.scrollUP =  function(selector){
    selector.scrollIntoView();
}

Page.prototype.ramNumber =  function(max){
    return Math.floor(Math.random() * Math.floor(max));
}

Page.prototype.dateRanage =  function(monthrange){

    return new Date(new Date().setMonth(new Date().getMonth() - monthrange)).toLocaleDateString()
}

Page.prototype.EmailGenerator =  function(){

    var mailextention= Math.floor(Math.random() * (100000 - 200 + 1)) + 200;
    // var mailextention= Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    return `gbobilles+`+mailextention+`@mavvo.com`
}

Page.prototype.CompanyNameGenerator = function(){
    const values = Object.values(access.companyName)
    const randomValue = values[parseInt(Math.random() * values.length)]
    return randomValue
}

Page.prototype.DepartmentNameGenerator = function(){
    const values = Object.values(access.department)
    const randomValue = values[parseInt(Math.random() * values.length)]
    return randomValue
}

Page.prototype.EmployeeNameGenerator = function(){

    const values = Object.values(access.employeeName)
    const Keys = Object.keys(access.employeeName)
    const randomValue = values[parseInt(Math.random() * values.length)]
    const randomKeys = Keys[parseInt(Math.random() * Keys.length)]
    return [randomValue,randomKeys]
}

Page.prototype.strgen = function () {

    // var strgen=Math.floor(Math.random() * (5000 - 200 + 1)) + 200;
    var strgen= Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    return strgen
}

Page.prototype.dashBoardCode = function () {

    // var strgen=Math.floor(Math.random() * (5000 - 200 + 1)) + 200;
    var strgen= Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    var code = "TestCode"+ strgen;
    return code
}

Page.prototype.purchaseNumber = function () {

     // var strgen=Math.floor(Math.random() * (5000 - 200 + 1)) + 200;
     var strgen= Math.round(Math.random() * (5000 * 200 + 1));
    // var strgen= Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    var code = strgen;
    return code
}

Page.prototype.dashBoardName = function () {

    // var strgen=Math.floor(Math.random() * (5000 - 200 + 1)) + 200;
    var strgen= Math.random().toString(36).substring(2, 15) + Math.random().toString(30).substring(2, 15)
    var code = "CIF"+ strgen;
    return code
}


module.exports = new Page()