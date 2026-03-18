import Post from "../models/Post.model.js";
import { populate } from "dotenv";

export const  createPost = async (req, res) => {
  try {
    //  Take data from req
    const { content, media, tags, category, department } = req.body;
    // Validate
    if(!content &&(!media || media.length === 0)){
        return res.status(400).json({
            success: false,
            message:"Post must contain media or content"});
    }
    //  DB operation
    const post = await Post.create({
        author: req.user._id,
        content,
        tags: tags ||[],
        category:category || "general",
        department: department || req.user.department
    });
    //  Business logic
    const populatedPost = await post.populate("author","firstName lastName role avatar department");
    //  Response
    res.status(201).json({
        success:true,
        message:"Post created Successfully",
        data:populatedPost,
    });
  } catch (error) {
    res.status(500).json({
        success:false,
        message:"Error in creating post",
        error: message.error,
    });
  }
};
