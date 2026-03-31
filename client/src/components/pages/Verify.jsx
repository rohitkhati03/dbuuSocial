import React, { useRef } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Verify.module.css";

export default function Verify() {
  const inputs = useRef([]);

  // Auto focus next input
  const handleChange = (e, index) => {
    if (e.target.value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <div className={styles.verify}>

      <div className={styles.container}>

        {/* LEFT PANEL */}
        <motion.div
          className={styles.left}
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <div className={styles.brand}>
            Campus<span>Connect</span>
          </div>

          <p className={styles.tagline}>
            Almost there! Verify your<br />college email to get in.
          </p>

          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={`${styles.avatar} ${styles.blue}`}>📧</div>
              <div>
                <strong>Check your inbox</strong>
                <span>We sent a 6-digit code</span>
              </div>
            </div>

            <div className={styles.card}>
              <div className={`${styles.avatar} ${styles.pink}`}>🔐</div>
              <div>
                <strong>Why verification?</strong>
                <span>To keep community safe</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT PANEL */}
        <motion.div
          className={styles.right}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <div className={styles.formBox}>

            <div className={styles.icon}>📬</div>

            <h1>Check your email</h1>
            <p className={styles.subtitle}>
              Enter the 6-digit code sent to <strong>rahul@college.edu</strong>
            </p>

            {/* OTP INPUT */}
            <div className={styles.otpRow}>
              {[...Array(6)].map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  className={styles.otpInput}
                  ref={(el) => (inputs.current[i] = el)}
                  onChange={(e) => handleChange(e, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                />
              ))}
            </div>

            <p className={styles.timer}>
              Code expires in <strong>04:32</strong>
            </p>

            <button className={styles.primaryBtn}>
              Verify & Continue →
            </button>

            <p className={styles.link}>
              Didn't get the code? <a href="#">Resend</a>
            </p>

            <p className={styles.link}>
              <a href="/signup">← Change email</a>
            </p>

          </div>
        </motion.div>

      </div>
    </div>
  );
}