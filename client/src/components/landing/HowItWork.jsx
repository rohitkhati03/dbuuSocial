import React from "react";
import "../styles/howitworks.css";

const steps =[
    {
    num: "01",
    icon: "✉️",
    title: "Sign up with college email",
    desc: "Only verified college emails are accepted.",
    color: "#4F6EF7",
    light: "rgba(79,110,247,0.15)"
  },
  {
    num: "02",
    icon: "👤",
    title: "Build your profile",
    desc: "Add your skills, department and projects.",
    color: "#9B7BF4",
    light: "rgba(155,123,244,0.15)"
  },
  {
    num: "03",
    icon: "🤝",
    title: "Follow friends & clubs",
    desc: "Connect with your campus network.",
    color: "#6BCB77",
    light: "rgba(107,203,119,0.15)"
  },
  {
    num: "04",
    icon: "🚀",
    title: "Dive into campus life",
    desc: "Explore events, posts and opportunities.",
    color: "#FFD93D",
    light: "rgba(255,217,61,0.15)"
  }
];

export default function HowItWorks(){
    return(
        <>
        <section className="how-section" id="how">
      <div className="section-inner">

        <div className="how-header">
          <div className="section-tag">✦ Simple onboarding</div>
          <h2 className="section-headline">Up and running in 4 steps</h2>
        </div>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <div className="step" key={i}>

              <div className="step-num-wrap">
                <div
                  className="step-num-bg"
                  style={{ background: step.light }}
                ></div>

                <div
                  className="step-num"
                  style={{ color: step.color }}
                >
                  {step.num}
                </div>

                <div
                  className="step-icon-outer"
                  style={{ background: step.color }}
                >
                  {step.icon}
                </div>
              </div>

              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.desc}</div>

            </div>
          ))}
        </div>

      </div>
    </section>
        </>
    )
}