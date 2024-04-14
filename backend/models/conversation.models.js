import mongoose from "mongoose";

const conversationSchema = new  mongoose.Schema({

messages:
[{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Message",
  default:[]
}] ,
participants:[{
type:mongoose.Schema.Types.ObjectId,
ref:"User",

}]

},{timestamps:true})

const Conversation  = mongoose.model("Conversation",conversationSchema)
export default Conversation

