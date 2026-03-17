import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config()
connectDB();

const app = express();

//middleware for parsing
app.use(express.json());

const PORT = process.env.PORT||8080;

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
});


