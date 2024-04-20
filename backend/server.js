import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/messages.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
const app = express();

app.get('/',(req,res)=>{
  res.send("hello , server is ready")
})

dotenv.config();
const PORT = process.env.PORT || 3000;


app.use(express.json()); // to parse the incoming requests with json payloads ( from req.body)

app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.listen(PORT, ()=>{
  connectToMongoDB()
  console.log(`Server is running at port ${PORT}`)
})

//
