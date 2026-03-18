import express from "express";
import dotenv from "dotenv";
dotenv.config()
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import postRoutes from "./routes/post.routes.js"


connectDB();

const app = express();
//Middleware
 app.use(express.json());  // Parses incoming JSON body
 app.use(express.urlencoded({extended:true})); // Parses form data
 app.use(cookieParser());   // Lets us read cookies (for refresh token)

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
const PORT = process.env.PORT||8080;

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
});


