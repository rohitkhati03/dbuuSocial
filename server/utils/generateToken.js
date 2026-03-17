import jwt from "jsonwebtoken";

export const generateAccessToken = (userId) => {
  return jwt.sign(
    { _id: userId },
    process.env.JWT_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};

export const generateRefreshToken = (userId) => {
  return jwt.sign(
    { _id: userId },
    process.env.JWT_REFRESH_SECRET,   // ← make sure this matches .env exactly
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};