//import rateLimite

import rateLimit from "express-rate-limit";

//register rate limiter 3 attempts per hrs
export const registerLimit = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 3,
  message: {
    sucees: false,
    message: "Too many account created. Please try again after some time",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
//login rate limite 5 attempts per 15 mintues
export const loginLimit = rateLimit({
  windowMs: 15 * 60 * 1000, //15 minutes
  max: 5, //only 5 attempts
  message: {
    success: false,
    message: "Too many login attempts. Please try agian afte 15 mintues",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

//otp rate limit 3 attempts per hrs
export const optlimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hours
  max: 3,
  message: {
    success: false,
    message: "Too many otp request. Please try again after an hour",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
// forgot password rate limit 3 attempts per hrs
export const forgotPasswordLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3,
  message: {
    success: false,
    message: "Too many password request. Please try agian after an hour",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
