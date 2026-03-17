import { Router } from "express";
import { register, login, logout  } from "../controllers/auth.controllers.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = Router();

//POST /api/auth/register --- no token needed 
router.post("/register", register);
router.post("/login", login);

//This is protected route- token required 
router.post("/logout", verifyToken , logout);


export default router;