import { Router } from "express";
import { registerUser } from "../Controllers/User.controller.js";
import { loginUser } from "../Controllers/User.controller.js";
import Uploadpapers from "../Controllers/Paper.controller.js";
import {upload} from "../Middlewares/Multer.middleware.js";
import isAuthenticated from "../Middlewares/Auth.middleware.js";

const router = Router();

router.post("/register", registerUser)

router.post("/login", loginUser)

router.post("/Papers", isAuthenticated, upload.array("FileUrl", 5), Uploadpapers)

export default router

