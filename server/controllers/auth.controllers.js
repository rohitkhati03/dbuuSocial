import User from "../models/Users.model.js";
import bcrypt from "bcryptjs";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generateToken.js";

//---> api/post/register
export const register = async (req, res) => {
  try {
    // Get data from request body
    const {
      firstName,
      lastName,
      email,
      password,
      role,
      department,
      startingYear,
      passingYear,
    } = req.body;

    //checking if any credential is unfilled
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !role ||
      !department ||
      !startingYear ||
      !passingYear
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //checking if the user is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    // hasing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //creating user in DB
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: role || "student",
      department,
      startingYear,
      passingYear,
    });

    //genetating token
    const accessToken = generateAccessToken(newUser._id);
    const refreshToken = generateRefreshToken(newUser._id);

    //saving these to Db
    newUser.refreshToken = refreshToken;
    await newUser.save();

    //sending refreshToken to cookeies
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.envNODE_ENV === "production",
      sameStie: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    });

    //sending the response
    return res.status(201).json({
      message: "User registered successfully",
      accessToken,
      user: {
        _id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        role: newUser.role,
        department: newUser.department,
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({ message: "Internal Server error" });
  }
};

//api/post/login
export const login = async (req, res) => {
  try {
    //getting data from request body
    const { email, password } = req.body;

    //checking if the fields are present or not

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and passwordd are required" });
    }

    //fiding the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //compate password with hashedpassword
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    //genetate new token
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    //save new refreh token to DB
    user.refreshToken = refreshToken;
    await user.save();

    // sending refresh token as cookie

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    //sending resposne
    return res.status(200).json({
      message: "Login Successful",
      accessToken,
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        department: user.department,
        isVerified: user.isVerified,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//logout api

export const logout = async (req, res)=>{
    try{
        // getting user form middleware
        const UserId = req.user._id;

        //removing refresh token
        await User.findByIdAndUpdate(UserId, {
            $unset:{refreshToken:1}
        });

        res.clearCookie("refreshToken",{
             httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
        });

        // response
        return res.status(200).json({ message: "Logged out successfully" });
    }
    catch(error){
        console.error("Logout error:", error);
    return res.status(500).json({ message: "Internal server error" });
    }
}