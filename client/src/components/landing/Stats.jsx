import React from "react";
import "../styles/stats.css";
const statsData =[
    { value: "2,400+", label: "Students on Platform" },
  { value: "₹42L", label: "Highest Placement CTC" },
  { value: "1.2K", label: "Doubts Answered" },
  { value: "98%", label: "Student Satisfaction" },
]

export default function Stats(){
    return(
        <>
        <section className="stats-section" id="features">
      <div className="section-inner">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-num">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
        </>
    )
}