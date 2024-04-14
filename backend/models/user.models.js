import mongoose from "mongoose";

const userSchema  = new mongoose.Schema({

 userName:{
    type:String,
    unique:true ,
    required:true
 }
,
fullName:{
   type:String ,
   required:true 
}
,
password:{
   type:String ,
   required:true ,
   minlength:true
},

profilePic:{
   type:String ,
  default:""
  },

  gender:{
     type:String ,
     required:true ,
     enum:['male','female'] 
  }
  

},{timestamps:true})


const User = mongoose.model("User",userSchema);

export default User;
