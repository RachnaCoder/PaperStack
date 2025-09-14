import { Router } from "express";
import { registerUser } from "../Controllers/User.controller.js";
import { loginUser } from "../Controllers/User.controller.js";
import Uploadpapers from "../Controllers/Paper.controller.js";
import {upload} from "../Middlewares/Multer.middleware.js";
import isAuthenticated from "../Middlewares/Auth.middleware.js";
import { getpapers } from "../Controllers/Paper.controller.js";
import { getpaperbyId } from "../Controllers/Paper.controller.js";

const router = Router();

router.post("/register", registerUser)

router.post("/login", loginUser)

router.post("/Papers", isAuthenticated, upload.array("FileUrl", 5), Uploadpapers)

router.get("/Papers", getpapers)

router.get("/Papers/:id",  getpaperbyId )

export default router

