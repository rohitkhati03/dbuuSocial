import React from "react";
import "../styles/hero.css";

export default function Hero() {
  return (
    <>
      <div className="hero-bg" />

      <section className="hero">

        {/* ── PILL ── */}
        <div className="hero-pill">
          <span className="hero-pill-dot" />
          Now live at your colleges 
        </div>

        {/* ── HEADLINE ── */}
        <h1 className="hero-headline">
          Your entire campus<br />
          <span className="line-accent">life, connected.</span><br />
          <span className="line-italic">All in one place.</span>
        </h1>

        {/* ── SUBTEXT ── */}
        <p className="hero-sub">
          Academic help, events, career opportunities, official notices, and your
          social life — built exclusively for your college community.
        </p>

        {/* ── CTA ── */}
        <div className="hero-actions">
          <button className="btn-hero-primary">🚀 Join with College Email</button>
          <button className="btn-hero-secondary">▶ Watch 2-min demo</button>
        </div>

        {/* ── SOCIAL PROOF ── */}
        <div className="social-proof">
          <div className="proof-avatars">
            <div className="proof-avatar" style={{ background: "linear-gradient(135deg,#4F6EF7,#7B61FF)" }}>👩</div>
            <div className="proof-avatar" style={{ background: "linear-gradient(135deg,#FF6B6B,#FFD93D)" }}>👨</div>
            <div className="proof-avatar" style={{ background: "linear-gradient(135deg,#6BCB77,#14B8A6)" }}>🧑</div>
            <div className="proof-avatar" style={{ background: "linear-gradient(135deg,#a855f7,#ec4899)" }}>👩</div>
            <div className="proof-avatar" style={{ background: "rgba(255,255,255,0.1)", fontSize: "0.6rem", fontWeight: 900, color: "rgba(255,255,255,0.6)" }}>
              +2K
            </div>
          </div>
          <div className="proof-divider" />
          <span className="proof-stars">★★★★★</span>
          <span>Loved by 2,400+ students</span>
        </div>

        {/* ── MOCKUP ── */}
        <div className="hero-mockup-wrap">
          <div className="mockup-glow" />
          <div className="mockup-glow-l" />
          <div className="mockup-glow-r" />

          <div className="mockup-browser">
            {/* Browser chrome */}
            <div className="browser-bar">
              <div className="browser-dots">
                <div className="browser-dot" style={{ background: "#FF5F56" }} />
                <div className="browser-dot" style={{ background: "#FFBD2E" }} />
                <div className="browser-dot" style={{ background: "#27C93F" }} />
              </div>
              <div className="browser-url">🔒 app.campusconnect.in/feed</div>
            </div>

            <div className="mockup-content">

              {/* ── Sidebar ── */}
              <div className="mock-sidebar">
                <div className="mock-profile-mini">
                  <div className="mock-av" style={{ background: "linear-gradient(135deg,#4F6EF7,#7B61FF)" }}>🧑‍🎓</div>
                  <div>
                    <div className="mock-name">Rahul S.</div>
                    <div className="mock-dept">CSE · 3rd Year</div>
                  </div>
                </div>

                <div className="mock-nav-item active">🏠 Home Feed</div>
                <div className="mock-nav-item">📚 Academic Hub</div>
                <div className="mock-nav-item">📅 Events</div>
                <div className="mock-nav-item">💼 Opportunities <span className="mock-badge">3</span></div>
                <div className="mock-nav-item">📢 Notices <span className="mock-badge">2</span></div>
                <div className="mock-nav-item">💬 Messages <span className="mock-badge">1</span></div>

                <div className="mock-nav-sep" />

                <div className="mock-nav-item">💻 Coding Club</div>
                <div className="mock-nav-item">📷 Photo Club</div>
              </div>

              {/* ── Feed ── */}
              <div className="mock-feed">
                <div className="mock-post">
                  <div className="mock-post-header">
                    <div className="mock-post-av" style={{ background: "linear-gradient(135deg,#FF6B6B,#FFD93D)" }}>👩</div>
                    <div>
                      <div className="mock-post-name">Priya Mehra</div>
                      <div className="mock-post-time">2 hours ago</div>
                    </div>
                    <div className="mock-post-tag" style={{ background: "rgba(79,110,247,0.18)", color: "#a5b4ff" }}>📚 Academic</div>
                  </div>
                  <div className="mock-post-image" style={{ background: "linear-gradient(135deg,rgba(79,110,247,0.25),rgba(123,97,255,0.15))" }}>📄</div>
                  <div className="mock-post-body">Just uploaded DBMS notes for Unit 4 — Transactions &amp; Normalization! 📖</div>
                  <div className="mock-post-stats">
                    <span>👍 48</span><span>💬 12</span><span>📥 89</span>
                  </div>
                </div>

                <div className="mock-post">
                  <div className="mock-post-header">
                    <div className="mock-post-av" style={{ background: "rgba(255,255,255,0.08)" }}>🏛️</div>
                    <div>
                      <div className="mock-post-name">College Admin</div>
                      <div className="mock-post-time">Today</div>
                    </div>
                    <div className="mock-post-tag" style={{ background: "rgba(251,191,36,0.15)", color: "#fbbf24" }}>📢 Notice</div>
                  </div>
                  <div className="mock-post-body">📌 Exam schedule for Semester 6 has been published. Clash reporting deadline: March 5.</div>
                  <div className="mock-post-stats">
                    <span>👁️ 1.2K</span><span>💬 84</span><span>📥 623</span>
                  </div>
                </div>
              </div>

              {/* ── Right Panel ── */}
              <div className="mock-right">
                <div className="mock-widget">
                  <div className="mock-widget-title">📅 Upcoming Events</div>
                  <div className="mock-event-item">
                    <div className="mock-ev-date">15<br />Mar</div>
                    <div>
                      <div className="mock-ev-name">CampusHack 2025</div>
                      <div className="mock-ev-org">Coding Club</div>
                    </div>
                  </div>
                  <div className="mock-event-item">
                    <div className="mock-ev-date">22<br />Mar</div>
                    <div>
                      <div className="mock-ev-name">Tarang Fest</div>
                      <div className="mock-ev-org">Cultural Comm.</div>
                    </div>
                  </div>
                </div>

                <div className="mock-widget">
                  <div className="mock-widget-title">📢 Latest Notices</div>
                  <div className="mock-notice-item">
                    <div className="mock-nd" style={{ background: "#FF6B6B" }} />
                    <div className="mock-notice-text">Exam schedule published</div>
                  </div>
                  <div className="mock-notice-item">
                    <div className="mock-nd" style={{ background: "#FFD93D" }} />
                    <div className="mock-notice-text">Fee deadline: March 10</div>
                  </div>
                  <div className="mock-notice-item">
                    <div className="mock-nd" style={{ background: "#6BCB77" }} />
                    <div className="mock-notice-text">Library extended hours</div>
                  </div>
                </div>

                <div className="mock-widget">
                  <div className="mock-widget-title">💼 Matched for You</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ fontSize: "0.9rem" }}>🌐</span>
                      <div>
                        <div style={{ fontSize: "0.65rem", fontWeight: 700 }}>Google SWE Intern</div>
                        <div style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.35)" }}>92% match</div>
                      </div>
                    </div>
                    <div className="mpc-bar">
                      <div className="mpc-bar-fill" style={{ width: "92%", background: "linear-gradient(90deg,#4F6EF7,#7B61FF)" }} />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>
    </>
  );
}