import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSlideBar } from "../controllers/user.controllers.js";

const router = express.Router()

router.get("/",protectRoute,getUsersForSlideBar)

export default router