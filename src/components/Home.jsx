import "../styles/home.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* =========================
          HERO SECTION
         ========================= */}
      <section className="home-hero">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <p className="hero-tag">WELCOME TO MY PORTFOLIO</p>

          <h1 className="hero-title">
            Hello, my name is <br />
            <span>Yeshwanth</span>.
          </h1>

          <p className="hero-desc">
            I’m a Web Developer focused on building clean, scalable,
            and user-friendly web applications using modern technologies.
          </p>

          <div className="hero-actions">
            <a href="/Certificates/Resume.pdf" className="btn primary">
              Download Resume
            </a>
            <NavLink to="/projects" className="btn secondary">
              See my work →
            </NavLink>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-right">
          <div className="image-ring">
            <div className="image-core">
              <img
                src="/images/ME.jpeg"
                alt="Yeshwanth"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
         PROOF / MINDSET SECTION
      ========================= */}
      <section className="proof-section">
        <div className="proof-container">
          <h3 className="proof-title">
            This portfolio isn’t here to impress.
            <span>
              It’s here to show how I think, how I build,
              and why details matter to me.
            </span>
          </h3>

          <p className="proof-subtitle">
            Anyone can write code.
            I focus on <strong>understanding the problem</strong> deeply
            before deciding what should exist at all.
          </p>

          <div className="proof-points">
            <div className="proof-card">
              <h4>Thinking before coding</h4>
              <p>
                I focus on structure, flow, and intent before writing a single line.
              </p>
            </div>

            <div className="proof-card">
              <h4>Details matter</h4>
              <p>
                Small things like spacing, flow, and consistency
                decide whether a product feels polished or rushed.
              </p>
            </div>

            <div className="proof-card">
              <h4>Thinking first</h4>
              <p>
                I don’t jump into code immediately.
                I take time to understand the problem,
                structure the solution, and then build it cleanly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
           FEATURED PROJECTS
      ========================= */}
      <section className="featured-section">
        <div className="featured-container">
          <h2 className="featured-title">Featured Projects</h2>

          <div className="timeline-wrapper">
            <div className="timeline-line"></div>

            {/* Project 1 */}
            <div className="timeline-item left">
              <div className="timeline-dot"></div>
              <div className="featured-card">
                <img src="/images/GAAC.jpeg" alt="GAAC" />
                <h3>GAAC Website</h3>
                <p>
                  A full-stack platform built with a powerful backend and
                  carefully designed UI/UX for real club operations.
                </p>
                <a href="https://github.com/vutukuruyeshwanth/GAAC-website.git" className="project-link">View project →</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="timeline-item right">
              <div className="timeline-dot"></div>
              <div className="featured-card">
                <img src="/images/fitness.png" alt="Fitness" />
                <h3>Fitness Coach Bot</h3>
                <p>
                  An interactive coaching system focused on clarity,
                  guidance, and user-friendly flow.
                </p>
                <a href="https://github.com/vutukuruyeshwanth/FitnessBot.git" className="project-link">View project →</a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="timeline-item left">
              <div className="timeline-dot"></div>
              <div className="featured-card">
                <img src="/images/weather.png" alt="Weather" />
                <h3>Weather Forecasting App</h3>
                <p>
                  A clean API-based weather app designed for quick
                  understanding and usability.
                </p>
                <a href="https://github.com/vutukuruyeshwanth/WheatherApp.git" className="project-link">View project →</a>
              </div>
            </div>

            {/* Research */}
            <div className="timeline-item right">
              <div className="timeline-dot"></div>
              <div className="featured-card">
                <img src="/images/gaze.jpg" alt="Research" />
                <h3>Research: Enhanced Gaze Tracker</h3>
                <p>
                  A research-driven study on improving gaze tracking
                  accuracy using Kalman filtering.
                </p>
                <a href="/projects" className="project-link">View project →</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
