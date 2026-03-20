import { Router } from "express";
import { register, login, logout  } from "../controllers/auth.controllers.js";
import { verifyToken } from "../middleware/auth.middleware.js";
import { loginLimit, registerLimit } from "../middleware/rateLimiter.middleware.js";
import { validateLogin, validateRegister } from "../middleware/validation.middleware.js";

const router = Router();

//POST /api/auth/register --- no token needed 
router.post("/register", registerLimit, validateRegister, register);
router.post("/login", loginLimit, validateLogin, login);

//This is protected route- token required 
router.post("/logout", verifyToken , logout);


export default router;