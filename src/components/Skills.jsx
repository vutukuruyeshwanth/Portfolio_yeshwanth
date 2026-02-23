import "../styles/skills.css";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML", level: 100 },
        { name: "CSS", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 90 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 70 },
        { name: "Express", level: 50 },
        { name: "MongoDB", level: 40 },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 85 },
      ],
    },
  ];

  return (
    <section className="skills-page">
      <div className="skills-container">
        <p className="skills-tag">WHAT I KNOW</p>
        <h1 className="skills-title">
          My <span>Skills</span>
        </h1>
        <p className="skills-desc">
          Technologies and tools I use to build modern, scalable, and
          user-friendly applications.
        </p>

        {/* 🔹 Skills Summary (Problem 1 Fix) */}
        <div className="skills-focus">
            <span>Frontend</span>
            <span>React</span>
            <span>JavaScript</span>
            <span>UI / UX</span>
            <span>Backend Basics</span>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills.map((group, index) => (
            <div key={index} className="skills-card">
              <h3>{group.category}</h3>

              {group.items.map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* 🔹 Pre-Footer CTA (Problem 3 Fix) */}
        <div className="skills-cta">
          <h2>Interested in working together?</h2>
          <p>
            Check out my projects or feel free to contact me for collaboration
            and opportunities.
          </p>
          <div className="cta-buttons">
            <a href="/projects" className="btn primary">View Projects</a>
            <a href="/contact" className="btn outline">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
