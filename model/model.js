var mongoose=require( 'mongoose');

const Schema = mongoose.Schema,ObjectId = Schema.ObjectId;

var userSchema=new Schema ({
   
    name:{
        type: String,
        required: [true, 'Name is required']
      },
    username:{
        type: String,
        required: [true, 'Username is required']
      },
    mailid:{
        type: String,
        required: [false, 'Optional']
      },
    password:{
        type: String,
        required: [true, 'Password is required']
      }
});

var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
 });


module.exports ={userSchema:userSchema,personSchema:personSchema};