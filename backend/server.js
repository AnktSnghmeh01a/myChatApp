import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import the cors middleware
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/messages.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Use cors middleware to allow requests from all origins

app.get('/', (req, res) => {
  res.send("Hello, server is ready");
});

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running at port ${PORT}`);
});
