import User from "../models/user.models.js";
export const getUsersForSlideBar = async(req,res)=>
{


   try {
   
     const loggedInUserId = req.user._id;


     const filteredUser = await User.find({_id:{$ne:loggedInUserId}}).select("-password");

     res.status(200).
     json(filteredUser)
   } 
   
   
   catch (error) {
    
    console.log("Error in getUsersforSlidebar controller :",error.message)
    res.status(500).
    json({error:"Internal Server error"})

   }



}