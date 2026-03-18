import Post from "../models/Post.model.js";

export const reportPost = async (req, res) => {
  try {
    // get data
    const postId = req.params.id;
    const userId = req.user._id;
    //validate the data
    if (!postId) {
      return res.status(400).json({
        success: false,
        message: "Post is missing or invalid ID",
      });
    }
    //find the post
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    //users cannot report their post
    if(post.author.equals(userId)){
        return res.status(403).json({
            success:false,
            message:"you cannot report your own post",
        });
    }
    //logic for no multiple report
    if (post.reportedBy.some(id=> id.equals(userId))) {
      return res.status(409).json({
        success: false,
        message: "Already reported",
      });
    }
    post.reportedBy.push(userId); // add report
    const REPORT_THRESHOLD = 5; //THRESHOLD LIMIT
    if (post.reportedBy.length >= REPORT_THRESHOLD) {
      post.isApproved = false;
    }

    
    
    //save
    await post.save();
    //respond
    res.status(200).json({
      success: true,
      message: "Post reported successfully",
      reports: post.reportedBy.length,
      isHidden:!post.isApproved,
    });
  } catch (error) {
    //error handling
    res.status(500).json({
      success: false,
      message: "Error in reporting the post",
      error: error.message,
    });
  }
};
