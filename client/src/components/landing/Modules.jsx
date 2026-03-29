import React from "react";
import  { useState } from "react";
import "../styles/modules.css";

const modules ={
    feed: {
    tag: "🏠 Campus Feed",
    title: "Your campus, in real-time",
    desc: "A smart feed blending social posts, notices, events and opportunities.",
    features: [
      "For You & College Feed modes",
      "Rich post types",
      "Reactions + comments",
      "Stories & hashtags"
    ]
  },
  career: {
    tag: "💼 Career Board",
    title: "Land your first role",
    desc: "Verified opportunities with tracking and profile matching.",
    features: [
      "Profile match score",
      "Application tracker",
      "Job alerts",
      "Alumni network"
    ]
  },
  academic: {
    tag: "📚 Academic Hub",
    title: "Study smarter",
    desc: "Q&A, resources, and study groups.",
    features: [
      "Q&A board",
      "Resource library",
      "Study groups",
      "Exam tracking"
    ]
  },
  events: {
    tag: "📅 Events",
    title: "Never miss events",
    desc: "Discover and RSVP campus events.",
    features: [
      "Calendar view",
      "RSVP system",
      "Reminders",
      "Club tracking"
    ]
  },
};

export default function Modules(){
    const [active, setActive]= useState("feed");
    return(
        <>
        <section className="modules-section" id="modules">
      <div className="section-inner">

        <div className="modules-header">
          <div className="section-tag">✦ Deep dive</div>
          <h2 className="section-headline">Every module, crafted with care</h2>
        </div>

        {/* Tabs */}
        <div className="modules-tabs">
          {Object.keys(modules).map((key) => (
            <button
              key={key}
              className={`mod-tab ${active === key ? "active" : ""}`}
              onClick={() => setActive(key)}
            >
              {modules[key].tag}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="module-showcase">
          <div className="mod-info">
            <span className="mod-tag">{modules[active].tag}</span>
            <div className="mod-title">{modules[active].title}</div>
            <div className="mod-desc">{modules[active].desc}</div>

            <div className="mod-features">
              {modules[active].features.map((f, i) => (
                <div key={i} className="mod-feature">
                  <div className="mod-feature-dot">✓</div>
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Preview (simplified UI) */}
          <div className="mod-preview">
            <div className="mod-preview-card">
              <div className="mpc-title">Preview Content</div>
              <div className="mpc-sub">Content based on interst of student</div>
            </div>
          </div>
        </div>

      </div>
    </section>
        </>
    )
}