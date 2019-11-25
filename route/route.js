var express=require("express");
var userCtrl=require('../controller/user.controller');
const appConfig=require('../config/app.config');
let baseUrl = appConfig.apiVersion;

//Assign route to the controller
let setRouter=(app)=>{
    app.get(baseUrl+'/AllUserDetail',userCtrl.getUserDetails);
    app.post(baseUrl+'/saveUserDetails',userCtrl.saveUserDetails);
}
 
//export route
 module.exports = {
    setRouter: setRouter
};
