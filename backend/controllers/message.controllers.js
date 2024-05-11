import Conversation from "../models/conversation.models.js"
import Message from "../models/messages.models.js"
import { getReceiverSocketId ,io} from "../socket/socket.js";

export const sendMessage = async(req,res)=>{

 try {
	const { message } = req.body;
		const { id: receiverId } = req.params;
		const senderId = req.user._id;

		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		});

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId],
			});
		}

		const newMessage = new Message({
			senderId,
			receiverId,
			message,
		});

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}

		// await conversation.save()
		// await newMessage.save()
  
		// this win run in parallel
		await Promise.all([conversation.save(),newMessage.save()])
	
    // Socket IO functionality

		const receiverSocketid = getReceiverSocketId(receiverId);
		if(receiverSocketid){
			io.to(receiverSocketid).emit("newMessages",newMessage);
		}
    


		res.status(201).json(newMessage)

 } 
 
 catch(error) {
  
  console.log("Error in send Message controller",error.message)
  res.status(500).json({error:"Internal server error"})


 }



}



export const getMessage = async(req,res)=>{

	try {
    
		const {id: userToChatId} = req.params
		const senderId = req.user._id

		const conversation = await Conversation.findOne({
			participants:{ $all:[senderId,userToChatId]} ,
		}).populate("messages") // not refernce but actual messages
	
	  if(!conversation){
			return res.status(200).json([]);
		}
	
		const messages = conversation.messages	
		res.status(200).json(messages)

		
	} 
	
	catch (error) {
		
  	console.log("Error in get Message controller",error.message)
		res.status(500).json({error:"Internal server error"})
	
	}





}