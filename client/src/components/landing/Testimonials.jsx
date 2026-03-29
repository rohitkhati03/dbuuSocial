import React from "react";
import "../styles/testimonials.css"
const testimonials = [
  {
    name: "Priya Mehra",
    role: "CSE 3rd Year · Google Intern",
    quote:
      "The career board got me my Google internship. The match feature gave me confidence to apply.",
    avatar: "👩",
    gradient: "linear-gradient(135deg,#4F6EF7,#7B61FF)"
  },
  {
    name: "Arjun Nair",
    role: "CSE 3rd Year",
    quote:
      "Everything is now in one place — notices, events, study groups. No more WhatsApp chaos.",
    avatar: "👨",
    gradient: "linear-gradient(135deg,#FF6B6B,#FFD93D)"
  },
  {
    name: "Sneha Kulkarni",
    role: "CSE 3rd Year · Top Contributor",
    quote:
      "The Q&A board saved me during exams. It feels like having 2000 classmates online 24/7.",
    avatar: "🧑",
    gradient: "linear-gradient(135deg,#6BCB77,#14B8A6)"
  }
];

export default function Testimonials(){
    return(
        <>
        <section className="testimonials-section" id="testimonials">
      <div className="section-inner">

        <div className="testimonials-header">
          <div className="section-tag">✦ Student stories</div>
          <h2 className="section-headline">What students say</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>

              <div className="t-stars">★★★★★</div>

              <div className="t-quote">{t.quote}</div>

              <div className="t-author">
                <div
                  className="t-avatar"
                  style={{ background: t.gradient }}
                >
                  {t.avatar}
                </div>

                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-role">{t.role}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
        </>
    )
}