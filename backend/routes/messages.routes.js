import express from "express";
import  {sendMessage,getMessage}  from "../controllers/message.controllers.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router()

// protect is used to check whether the person is login or not ,if login then send messages

router.get("/:id",protectRoute,getMessage)
router.post("/send/:id",protectRoute,sendMessage)

export default router
