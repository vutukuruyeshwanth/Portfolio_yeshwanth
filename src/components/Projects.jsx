import "../styles/projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website v3.0",
      description: "Personal portfolio built using React with modern UI.",
      tech: ["React", "CSS"],
      image: "/images/Portfolio.png",
      live: "#",
      github: "#",
    },
    {
      title: "Myntra Clone",
      description: "Frontend clone using HTML, CSS, and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript","UI/UX"],
      image: "",
      live: "#",
      github: "#",
    },
    {
      title: "Wheather App",
      description: "Weather application built using programming concepts.",
      tech: ["C", "Java"],
      image: "/images/weather.png",
      live: "https://vutukuruyeshwanth.github.io/WheatherApp/WeatherApp/",
      github: "https://github.com/vutukuruyeshwanth/WheatherApp.git",
    },
    {
      title: "Recipe Book",
      description: "\"The Secret Ingredient\" is a responsive, web-based recipe book designed to provide users with a simple and intuitive platform to manage their favorite recipes.",
      tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      image: "",
      live: "",
      github: "",
    },
    {
      title: "Portfolio Website v2.0",
      description: "This portfolio is a single-page application designed to introduce myself and present my work to potential employers and collaborators.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/images/Portfolio.v.1.png",
      live: "https://vutukuruyeshwanth.github.io/PortfolioYesh/PortfolioYesh/",
      github: "https://github.com/vutukuruyeshwanth/PortfolioYesh.git",
    },
    {
      title: "Menu Card",
      description: "A simple and visually appealing menu card built using HTML and CSS.",
      tech: ["HTML", "CSS"],
      image: "/images/MenuCard.png",
      live: "https://vutukuruyeshwanth.github.io/MenuCard/MenuCard/",
      github: "https://github.com/vutukuruyeshwanth/MenuCard.git",
    },
    {
      title: "My Infinite Notes",
      description: "A note-taking application that allows users to create, edit, and delete notes with infinite scrolling functionality.",
      tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      image: "/images/Blog.png",
      live: "https://vutukuruyeshwanth.github.io/blog/Blogwebsite/",
      github: "https://github.com/vutukuruyeshwanth/blog.git",
    }
  ];

  return (
    <section className="projects-page">
      <div className="projects-container">
        <p className="projects-tag">WHAT I BUILT</p>
        <h1 className="projects-title">
          My <span>Projects</span>
        </h1>
        <p className="projects-desc">
          A selection of projects that showcase my skills and hands-on
          experience.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.live} className="btn primary">
                  Live Demo
                </a>
                <a href={project.github} className="btn outline">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
