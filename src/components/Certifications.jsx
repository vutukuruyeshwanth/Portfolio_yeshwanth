import React from "react";
import "../styles/certifications.css";

export default function Certifications() {
  const certifications = [
    {
      title: "Web Development Bootcamp",
      issuer: "Coursera",
      year: "2024",
      link: "/Certificates/Full Stack Development Certificate.pdf",
      category: "Full Stack",
    },
    {
      title: "HTML5",
      issuer: "Coursera",
      year: "2024",
      link: "/Certificates/HTML_ Certificate.pdf",
      category: "Technical",
    },
    {
      title: "Enhanced Gaze Tracker",
      issuer: "RIT Global",
      year: "2025",
      link: "/Certificates/ID 33-Research Participation.pdf",
      category: "Research",
    },
    {
      title: "Networking Basics",
      issuer: "Cisco",
      year: "2025",
      link: "/Certificates/Networking Basics(Cisco) Certificate.pdf",
      category: "Technical",
    },
    {
      title: "Getting Started with Cisco Networking",
      issuer: "Cisco",
      year: "2025",
      link: "/Certificates/Getting Started with Cisco Packet Tracer Certificate.pdf",
      category: "Technical",
    },
    {
      title: "Exploring Networking",
      issuer: "Cisco",
      year: "2025",
      link: "/Certificates/Exploring Networking with Cisco Packet Tracer Certificate.pdf",
      category: "Technical",
    },
    {
      title: "Image Processing and Computer Vision with Python & OpenCV",
      issuer: "Udemy",
      year: "2026",
      link: "/Certificates/image processing with openCV Certificate.pdf",
      category: "Technical",
    },
    {
      title: "Bits Pillani Hackathon",
      issuer: "BITS Pilani",
      year: "2024",
      link: "/Certificates/Bits pillani Hackathon Certificate.pdf",
      category: "Hackathon",
    },
    {
      title: "Space Summit Tech Expo",
      issuer: "Vignan University",
      year: "2025",
      link: "/Certificates/tech Expo certificate.pdf",
      category: "Tech Expo",
    },
    {
      title: "Internship on Full Stack",
      issuer: "Unified Mentor",
      year: "2024",
      link: "/Certificates/internship1 certificate.pdf",
      category: "Internship",
    }
  ];

  return (
    <section className="certifications-page">
      {/* Background grid (now section-bound, not viewport-bound) */}
      <div className="bg-grid-layer"></div>

      <div className="certifications-container">
        <div className="cert-header-content">
          <p className="certifications-tag">CREDENTIALS & GROWTH</p>

          <h1 className="certifications-title">
            My <span>Certifications</span>
          </h1>

          <p className="certifications-desc">
            A collection of professional certifications and academic honors
            that validate my technical expertise and commitment to excellence.
          </p>
        </div>

        <div className="certifications-list">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card-wide">
              <div className="cert-badge">
                <div className="badge-icon">📜</div>
              </div>

              <div className="cert-main-info">
                <span className="cert-category">{cert.category}</span>
                <h3>{cert.title}</h3>
                <p className="issuer-name">{cert.issuer}</p>
              </div>

              <div className="cert-action-area">
                <span className="cert-year">{cert.year}</span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-view-link"
                >
                  Open Certificate ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
