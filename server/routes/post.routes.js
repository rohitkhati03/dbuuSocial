import { Router } from "express";
import { createPost } from "../controllers/post.controller.js";
import { reportPost } from "../controllers/reportPost.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/create", verifyToken, createPost);
router.post("/:id/report", verifyToken, reportPost);

export default router;