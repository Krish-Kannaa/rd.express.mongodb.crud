var express=require('express');
const mongoose = require('mongoose');
var model=require("../model/model");
const User = mongoose.model('UserDetail', model.userSchema, 'UserDetail')
var Person = mongoose.model("Person", model.personSchema);

//get user details
let getUserDetails=(req,res)=>{
    User.find({},(err, result) => {
        console.log(result);
          res.send(result);
      });
}
//insert user details
let saveUserDetails=(req,res)=>
{
    var input=req.body;
    let user=new User({name:input.name,
        username:input.username, password:input.password,mailid:input.mailid});
      user.save(function(err, Person){
            if(err)
              {
                  console.log('error while creating user')
              let apiResponse = response.generate(true, 'error while creating user', 404, null)
              res.send(apiResponse)
            }
            else
               res.send(user);
         });
}

//export controller
module.exports={
    getUserDetails:getUserDetails,
    saveUserDetails:saveUserDetails
}