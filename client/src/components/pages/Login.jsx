import React from "react";
import { motion } from "framer-motion";
import "../styles/login.css";
const Login = () => {
  const handleNavigation = (screen) => {
    console.log("Navigate to:", screen);
  };

  return (
    <div className="cc-login">

      <div className="cc-login__container">

        {/* LEFT PANEL */}
        <motion.div
          className="cc-login__left"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="cc-login__brand">
            Uni<em><span>Connect</span></em>
          </div>

          <p className="cc-login__tagline">
            Your college. Your community.<br />
            Everything in one place.
          </p>

          <div className="cc-login__cards">

            {["📢", "🎉", "📚"].map((icon, i) => (
              <motion.div
                key={i}
                className="cc-login__card"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className={`cc-login__avatar ${["blue","pink","yellow"][i]}`}>
                  {icon}
                </div>
                <div>
                  <strong>
                    {i === 0
                      ? "New Notice Posted"
                      : i === 1
                      ? "TechFest 2025"
                      : "Study Group"}
                  </strong>
                  <span>
                    {i === 0
                      ? "Exam schedule is out!"
                      : i === 1
                      ? "Register before March 10"
                      : "12 students joined"}
                  </span>
                </div>
                {i === 0 && <div className="cc-login__badge">NEW</div>}
              </motion.div>
            ))}

          </div>

          <div className="cc-login__stats">
            <div><strong>9K+</strong><span>Students</span></div>
            <div><strong>12+</strong><span>Clubs</span></div>
            <div><strong>300+</strong><span>Events</span></div>
          </div>
        </motion.div>

        {/* RIGHT PANEL */}
        <motion.div
          className="cc-login__right"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="cc-login__formBox"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1>Welcome back 👋</h1>
            <p className="cc-login__subtitle">Log into your account</p>

            <div className="cc-login__field">
              <label>Email</label>
              <div className="cc-login__inputWrap">
                <span>✉️</span>
                <input type="email" placeholder="yourname@college.edu" />
              </div>
            </div>

            <div className="cc-login__field">
              <label>Password</label>
              <div className="cc-login__inputWrap">
                <span>🔒</span>
                <input type="password" placeholder="Enter password" />
              </div>
            </div>

            <div className="cc-login__forgot">
              <button onClick={() => handleNavigation("forgot")}>
                Forgot password?
              </button>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              className="cc-login__btnPrimary"
              onClick={() => handleNavigation("verify")}
            >
              Log In →
            </motion.button>

            <div className="cc-login__divider">or</div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              className="cc-login__btnSecondary"
              onClick={() => handleNavigation("/signup")}
            >
              Create account
            </motion.button>

            <p className="cc-login__switch">
              Are you a <a href="#">Admin</a> or <a href="#">Faculty</a>?
            </p>

          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default Login;