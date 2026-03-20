import dotenv from "dotenv";
dotenv.config()
import express from "express";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet"
import ExpressMongoSanitize from "express-mongo-sanitize";
import {rateLimit} from "express-rate-limit";
import authRoutes from "./routes/auth.routes.js";
import postRoutes from "./routes/post.routes.js";

connectDB();

const app = express();
//helmet
app.use(helmet());

//cors-->allow frontend to talk to backend
app.use(cors({
    origin:process.env.CLIENT_URI ||"http://localhost:5173/",
    credentials:true,
    methods:["GET","POST","PUT","DELETE","PATCH"],
}));

//Mongo Sanitize- preventing mongo injection
app.use(ExpressMongoSanitize());

//Global Rate Limit - protecting all routes
const globalLimiter = rateLimit({
    windowMs: 15*60*1000, // 15 min
    max:100, // max request per 15 mins per IP
    message:{
        success:false,
        message:"Too many request, please try again after 15 mintues",
    },
    standardHeaders:true,
    legacyHeaders:false,
});
app.use(globalLimiter);
//Middleware
 app.use(express.json());  // Parses incoming JSON body
 app.use(express.urlencoded({extended:true})); // Parses form data
 app.use(cookieParser());   // Lets us read cookies (for refresh token)

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

//global error handling
app.use((err, req, res, next)=>{
    console.error("Global error:", err.stack);
    return res.status(err.status ||500).json({
        success:false,
        message:err.message || "Internal server error",
    })
})
const PORT = process.env.PORT||8080;

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
});


