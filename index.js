var express=require("express");
var app =express();
var bodyParser = require('body-parser');
const mongoose=require("mongoose");
const fs= require('fs');

app.use(express.json()); // Make sure it comes back as json
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const appConfig=require('./config/app.config');
var route=require('./route/route.js');
//First middleware before response is sent
app.use(function(req, res, next){
    console.log("Start");
    next();
 });
  
//bootstrap route
let routesPath = './route'
fs.readdirSync(routesPath).forEach(function (file){
if(~file.indexOf('.js')){
  console.log("including the following file");
  console.log(routesPath + '/' + file);
  let route = require(routesPath + '/' + file);
  route.setRouter(app);
}

});

app.listen(appConfig.port,()=>{
    console.log(`App listening @ ${appConfig.port}!`);

    mongoose.connect(appConfig.db.URL, {useNewUrlParser:true})
});

//handling mongoose connection error
mongoose.connection.on('error',function(err){
    console.log('database connection error');
    console.log(err)
  }); 
  //end mongoose connection error
  
  //handling mongoose success event
  mongoose.connection.on('open',function(err){
    if(err){
      console.log("database error");
      console.log(err);
    }
    else{
      console.log("database connection open success");
    }
  });
  // end mongoose connection open handler
