import { Mongoose, Schema } from "mongoose";
import {bcrypt} from "bcrypt";

const ObjectId = Schema.ObjectId;
const UserSchema = new Mongoose.Schema(
    //Users identity 
    {
    //  stduentID:{type:}
     firstName: { type: String, required: true, trim: true},
     lastname:{type:String, required:true, trim: true},
     email:{type:String, required:true,unique: true,},
     passwordL:{type:String, required:true},
     department:{type:String, required:true},
     statringYear:{type:Number, required:true},
     passingYear:{type:Number, required:true},
     
    //  program:
        
    },
     { timestamps: true }
)