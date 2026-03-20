import { Router } from "express";
import { createPost, getPost } from "../controllers/post.controller.js";
import { reportPost } from "../controllers/reportPost.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/create", verifyToken, createPost);
router.post("/:id/report", verifyToken, reportPost);
router.get("/", verifyToken, getPost )

export default router;