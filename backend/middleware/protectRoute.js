import jwt from "jsonwebtoken";
import User from "../models/user.models.js";


const protectRoute = async(req,res,next)=>{

  try {
    
  const token = req.cookies.jwt;
  
  if(!token){
    res.status(401).json({error:"Unauthorized ,No token is provided"})
  }

   
  const decodedToken = jwt.verify(token,process.env.JWT_SECRET)

  if(!decodedToken){
    res.status(401).json({error:"Unauthorized ,Invalid Token"})
  }

 const user = await User.findById(decodedToken.userId).select("-password")


 if(!user){
  res.status(401).json({error:"User doesn't exist"})
 }


 req.user = user;
 next();
  } 
  
  catch (error) {
    
   console.log("Error in protectRoute middleware",error.message)
   res.status(500)
   .json({error:"Internal server error"})

  }


}

export default protectRoute