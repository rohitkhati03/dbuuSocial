import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Signup.module.css"; // ✅ FIXED

export default function Signup() {
  return (
    <div className={styles.signup}>
      <div className={styles.container}>

        {/* LEFT PANEL */}
        <motion.div
          className={styles.left}
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <div className={styles.brand}>
            Uni<em><span>Connect</span></em>
          </div>

          <p className={styles.tagline}>
            Join now, thousands of students already<br />
            making the most of campus life.
          </p>

          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={`${styles.avatar} ${styles.yellow}`}>🤝</div>
              <div>
                <strong>Priya just joined!</strong>
                <span>Computer Science, 2nd Year</span>
              </div>
            </div>

            <div className={styles.card}>
              <div className={`${styles.avatar} ${styles.blue}`}>💼</div>
              <div>
                <strong>New Internship Listed</strong>
                <span> Summer Internship 2025</span>
              </div>
              <div className={styles.badge}>HOT</div>
            </div>

            <div className={styles.card}>
              <div className={`${styles.avatar} ${styles.pink}`}>🏆</div>
              <div>
                <strong>Hackathon Winners</strong>
                <span>Team Delta wins CampusHack!</span>
              </div>
            </div>
          </div>

          <div className={styles.stats}>
            <div><strong>500+</strong><em><span>New this month</span></em></div>
            <div><strong>98%</strong><em><span>Love it</span></em></div>
          </div>
        </motion.div>

        {/* RIGHT PANEL */}
        <motion.div
          className={styles.right}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <div className={styles.formBox}>

            <h1>Create your account</h1>
            <p className={styles.subtitle}>
              Join CampusConnect — your college, connected.
            </p>

            <div className={styles.alert}>
              🎓 Only students with a valid <strong>@dbuu.edu.in</strong> email can sign up.
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>First Name</label>
                <input type="text" placeholder="Rahul" />
              </div>
              <div className={styles.field}>
                <label>Last Name</label>
                <input type="text" placeholder="Sharma" />
              </div>
            </div>

            <div className={styles.field}>
              <label>Email</label>
              <div className={styles.inputWrap}>
                <span>✉️</span>
                <input type="email" placeholder="rahul@dbuu.edu.in" />
              </div>
            </div>

            <div className={styles.field}>
              <label>Student ID</label>
              <div className={styles.inputWrap}>
                <span>🪪</span>
                <input type="text" placeholder="BCAFSD0021" />
              </div>
              <p className={styles.hint}>Your university ID</p>
            </div>

            <div className={styles.field}>
              <label>Password</label>
              <div className={styles.inputWrap}>
                <span>🔒</span>
                <input type="password" placeholder="Min 8 characters" />
              </div>
            </div>

            <button className={styles.primaryBtn}>
              Send Verification →
            </button>

            <p className={styles.switch}>
              Already have an account? <a href="/login">Log in</a>
            </p>

          </div>
        </motion.div>

      </div>
    </div>
  );
}