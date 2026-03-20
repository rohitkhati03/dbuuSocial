import mongoose from "mongoose";
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
        media: media ||[],
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
        error: error.message,
    });
  }
};

//getting all post with pagination 
export const getPost = async(req, res)=>{
    try{
        //1.get the pagination params from query 
        const limit= Math.min(parseInt(req.query.limit)|| 10,50);
        const cursor=  req.query.cursor;

        //2.limiting the post per page
        const query= {isApproved:true};

        if(cursor){
            if(!mongoose.Types.ObjectId.isValid(cursor)){
                return res.status(400).json({
                    success:false,
                    message:"Invalid cursor"
                });
            }
            query._id= {$lt:cursor};
        }
        //3.find the post from db
        const posts = await Post.find(query)
        .populate("author", "firstName lastName avatar role department ")
        .sort({_id:-1})
        .limit(limit +1);

        const hasNextPage = posts.length > limit;
        if(hasNextPage) posts.pop();
        const nextCursor = hasNextPage ? posts[posts.length -1]._id:null;

        //4.for front end call
        //5. response
        return res.status(200).json({
            success:true,
            posts,
            pagination:{
                hasNextPage,
                nextCursor,
            }
        })
    }
    catch(error){
        console.error("Get all post error:", error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        });
    }
}