import jwt from "jsonwebtoken";
import User from "../models/Users.model.js";

export const verifyToken = async (req, res, next)=>{
    try{
        //get the token from header

        const authHeader = req.headers["authorzation"];
        const token = authHeader && authHeader.split(" ")[1];

        //checking if the token exists or not 
        if(!token){
            return res.status(401).json({message:"Access denied. No token provided"});
        }

        //Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //finding the user from decoded token 
        const user =await User.findById(decoded._id).select("-password -refreshToken");

        //check wether the user exits or not 
        if(!user){
            return res.status(401).json({message:"Invalid token. User not found"});
        }

        //attach user to next 
        req.user= user;

        // taking next one 
        next();
    }
    catch(error){
        if(error.name === "TokenExpiredError"){
            return res.status(401).json({ message: "Token expired. Please login again"})
        }
         if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }
    return res.status(500).json({ message: "Internal server error" });
    }
}
