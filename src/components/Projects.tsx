import React, { useState, useEffect } from 'react';

interface ProjectData {
  image: string;
  title: string;
  description: string;
  demoLink?: string;
  githubLink: string;
  technologies: string[];
  fullDescription: string;
  features: string[];
  role: string;
}

const ProjectCard: React.FC<ProjectData & { onClick: () => void }> = ({ 
  image, 
  title, 
  description, 
  demoLink, 
  githubLink, 
  onClick 
}) => (
  <div className="project-card bg-card" onClick={onClick}>
    <img src={image} alt={title} width={300} height={200} />
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="project-links" onClick={e => e.stopPropagation()}>
      {demoLink && (
        <a href={demoLink} className="btn btn-outline link-no-underline" target="_blank" rel="noopener noreferrer">
          View App
        </a>
      )}
      <a href={githubLink} className="btn btn-outline link-no-underline" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  </div>
);

const Modal: React.FC<{ project: ProjectData; onClose: () => void }> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Add event listener when the modal is mounted
    document.addEventListener('keydown', handleEscapeKey);

    // Clean up the event listener when the modal is unmounted
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-scroll-area">
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} />
          <p>{project.fullDescription}</p>
          <h3>Features</h3>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h3>Technologies</h3>
          <div className="technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="technology-tag">{tech}</span>
            ))}
          </div>
          <p><strong>Role:</strong> {project.role}</p>
          <div className="modal-links">
            {project.demoLink && (
              <a href={project.demoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                View Demo
              </a>
            )}
            <a href={project.githubLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      image: "/images/brewguard2.png",
      title: "BrewGuard",
      description: "A coffee leaf classification and disease detection web app made with Streamlit.",
      demoLink: "https://brewguard.streamlit.app",
      githubLink: "https://github.com/FTsune/kape",
      technologies: ["Python", "Streamlit", "PyTorch", "Object Detection", "YOLOv11"],
      fullDescription: "BrewGuard is an AI-powered web application that helps coffee farmers identify leaf types and diseases in coffee plants. The system uses deep learning and object detection to classify various coffee leaf diseases and provides treatment recommendations.",
      features: [
        "Real-time leaf disease detection",
        "Coffee leaf and disease classification",
        "Treatment recommendations",
        "Mobile-friendly interface",
      ],
      role: "Python & Web Developer",
    },
    {
      image: "/images/snapfolia2.png",
      title: "Snapfolia",
      description: "A leaf classification web app made by BSCS students.",
      demoLink: "https://trees.firstasia.edu.ph/",
      githubLink: "https://github.com/CHlNlTO/snapfolia",
      technologies: ["Python", "Flask", "YOLOv8", "Object Detection"],
      fullDescription: "Snapfolia is a web-based application that helps users identify different tree species through leaf analysis. The system uses deep learning and object detection to classify various leaf types and provides detailed information about the tree species.",
      features: [
        "Leaf species classification",
        "Detailed tree information",
        "User-friendly interface",
        "Mobile responsive design",
      ],
      role: "DL Engineer",
    },
    {
      image: "/images/anime2.png",
      title: "RU Seasonal Anime Poll",
      description: "A seasonal anime voting system app made with Django.",
      githubLink: "https://github.com/FTsune/Anime-Voting-System",
      technologies: ["Python", "Django", "SQLite", "Chart.js"],
      fullDescription: "A web application that allows users to vote seasonal anime shows across different categories.",
      features: [
        "User authentication",
        "Voting system",
        "Vote statistics",
        "Categorical and seasonal voting",
      ],
      role: "Backend & Frontend Developer",
    },
    {
      image: "/images/cinema.png",
      title: "Uncianood Cinema Booking",
      description: "A cinema booking system app made with Visual Basic.",
      githubLink: "https://github.com/FTsune/Cinema-Booking-System",
      technologies: ["Visual Basic", "MariaDB", ".NET"],
      fullDescription: "A desktop application for cinema ticket booking and management.",
      features: [
        "Ticket booking",
        "Admin management",
      ],
      role: "Full stack Developer",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <p className="projects-description">
          Explore a selection of projects demonstrating a variety of skills and technologies, 
          from web applications to desktop solutions, many of which were created in collaboration 
          with talented group members.
        </p>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        <div className="view-more">
          <a href="https://github.com/FTsune" className="view-more-link" target="_blank" rel="noopener noreferrer">
            <img src="/images/github-icon.webp" alt="GitHub Icon" width={20} height={20} className="github-icon" />
            View more on GitHub
          </a>
        </div>
      </div>
      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;