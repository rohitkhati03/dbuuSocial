import mongoose, { Schema } from "mongoose";

// const ObjectId = Schema.ObjectId;
const UserSchema = new mongoose.Schema(
  //Users identity
  {
    // identity 
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase:true },
    password: { type: String, required: true },

    //Role
    role: {
      type: String,
      enum: ["student", "faculty", "alumini", "admin"],
      default: "student",
    },

    //University Info
    department: { type: String, required: true },
    startingYear: { type: Number, required: true }, //Student only
    passingYear: { type: Number, required: true }, //student only
    yearOfStudy: { type: Number, enum: [1, 2, 3, 4] },
    rollNumber: { type: String }, //student only
    staffId: { type: String }, // Faculty only
    graduationYear: { type: String }, //Alumini only
    currentCompany: { type: String }, //Alumini only
    currentRole: { type: String }, //Alumini only

    //Profile
    avatar: { type: String, default: "" }, //cloudinary URL
    coverPhoto: { type: String, default: "" },
    bio: { type: String, maxlength: 300 },
    skills: [{ type: String }],
    links: { Linkedin: String, github: String, portfolio: String },

    //Alumini Mentorship Flags
    openToMentor: { type: Boolean, default: false },
    canRefer: { type: Boolean, default: false },

    //Social
    connection: [{ type: Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: Schema.Types.ObjectId, ref: "User" }],
    savedPosts: [{ type: Schema.Types.ObjectId, ref: "Post" }],

    //Auth
    isVerified: { type: Boolean, default: false },
    otp: { type: String },
    otpExpiry: { type: Date },
    refreshToken: { type: String },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);
const User =  mongoose.model("User", UserSchema)
export default User;
