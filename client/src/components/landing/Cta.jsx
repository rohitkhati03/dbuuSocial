import React from "react";
import { useState } from "react";
import "../styles/cta.css";

export default function CTA(){
     const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email) return;
    setSubmitted(true);
  };

  return(
    <>
    <section className="cta-section" id="cta">
      <div className="section-inner">

        <div className="cta-card">
          <div className="cta-inner">

            <h2 className="cta-headline">
              Ready to own <br />
              <span className="cta-gradient">
                your campus life?
              </span>
            </h2>

            <p className="cta-sub">
              Join 9000+ students already on UniConnect.
              <br />
              It takes less than 2 minutes to get started.
            </p>

            {/* Form */}
            <div className="cta-email-form">
              <input
                className="cta-email-input"
                type="email"
                placeholder="yourname@college.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                className={`cta-email-btn ${submitted ? "success" : ""}`}
                onClick={handleSubmit}
              >
                {submitted ? "🎉 Check your inbox!" : "Join Free →"}
              </button>
            </div>

            <div className="cta-trust">
              🔒 Only college emails accepted ·{" "}
              <span>No spam, ever</span> ·{" "}
              <span>Free for students</span>
            </div>

          </div>
        </div>

      </div>
    </section>
    </>
  )
}