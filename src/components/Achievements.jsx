import React from "react";
import "../styles/achievements.css";

export default function Achievements() {
  const achievements = [
    {
      role: "Active Member",
      title: "GAAC Programming Team",
      desc: "Collaborating on high-level flight software and technical projects.",
      icon: "🚀",
    },
    {
      role: "Director of Operations",
      title: "Codense Club",
      desc: "Overseeing event logistics and managing core team operations.",
      icon: "⚡",
    },
    {
      role: "Author / Speaker",
      title: "Research Paper at ISSIP",
      desc: "Presented innovative research findings at an international conference.",
      icon: "📄",
    },
    {
      role: "Professional Development",
      title: "Technical Workshops",
      desc: "Completed advanced training in modern web and software stacks.",
      icon: "🛠️",
    },
  ];

  return (
    <section className="ach-page">
      <div className="bg-grid-layer"></div>
      
      <div className="ach-container">
        <div className="ach-header">
          <p className="ach-tag">MILESTONES</p>
          <h1 className="ach-title">
            Key <span>Achievements</span>
          </h1>
        </div>

        <div className="ach-zigzag">
          {achievements.map((item, index) => (
            <div
              key={index}
              className={`ach-card-wrapper ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="ach-card">
                <div className="ach-icon-box">{item.icon}</div>
                <div className="ach-content">
                  <span className="ach-role">{item.role}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}