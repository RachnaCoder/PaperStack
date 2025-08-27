import { Router } from "express";
import { registerUser } from "../Controllers/User.controller.js";
import { loginUser } from "../Controllers/User.controller.js";


const router = Router();

router.post("/register", registerUser)

router.post("/login", loginUser)



export default router