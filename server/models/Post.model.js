import mongoose, { Schema } from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, maxlength: 2000 },
    media: [{
      // { type: String, type: { type: String, enum: ["images", "video"] } },
      url:{type:String, required:true},
      type:{type:String, enum:["images", "video"]},
    }
    ],
    tags: [{ type: String }],
    category: {
      type: String,
      enum: ["general", "academic", "events", "annoucement"],
    },
    department: { type: String },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    shares: [{ type: Schema.Types.ObjectId, ref: "User" }],
    isPinned: { type: Boolean, default: false }, // Faculty/Admin only
    isApproved: { type: Boolean, default: true },
    reportedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true },
);
const Post = mongoose.model("Post", PostSchema);
export default Post;
