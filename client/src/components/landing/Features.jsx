import React from "react"
import "../styles/features.css"
const features = [
    {
    icon: "📰",
    title: "Smart Campus Feed",
    desc: "A personalised feed mixing social posts, academic updates, notices, events and opportunities.",
    tags: ["For You", "College Feed", "Stories"],
    className: "fc-1"
  },
  {
    icon: "💼",
    title: "Career & Internship Board",
    desc: "Verified opportunities, profile matching, application tracking, and alumni mentorship.",
    tags: ["Profile Match", "Tracker", "Alumni", "Job Alerts"],
    className: "fc-2 wide"
  },
  {
    icon: "📚",
    title: "Academic Hub",
    desc: "Q&A board, resource library, and study groups with structured collaboration.",
    tags: ["Q&A", "Resources", "Study Groups"],
    className: "fc-3 wide"
  },
  {
    icon: "📅",
    title: "Events & Calendar",
    desc: "Discover and manage campus events with RSVP and reminders.",
    tags: ["RSVP", "Calendar", "Clubs"],
    className: "fc-4"
  },
  {
    icon: "📢",
    title: "Notice Board",
    desc: "Verified announcements, deadlines, and alerts from administration.",
    tags: ["Alerts", "Dept-specific"],
    className: "fc-5"
  },
  {
    icon: "👤",
    title: "Student Profile",
    desc: "Portfolio with projects, achievements, and verified identity.",
    tags: ["Projects", "Achievements", "Verified"],
    className: "fc-6"
  },
]

export default function Features(){
    return(
        <>
        <section className="features-section" id="features">
      <div className="section-inner">

        <div className="features-header">
          <div className="section-tag">✦ Everything you need</div>
          <h2 className="section-headline">
            One platform.<br />Every part of campus.
          </h2>
          <p className="section-sub">
            We've replaced scattered tools with one unified experience.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className={`feature-card ${f.className}`}>
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>

              <div className="feature-tags">
                {f.tags.map((tag, idx) => (
                  <span key={idx} className="ftag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
        </>
    )
}