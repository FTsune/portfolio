import React, { useEffect } from 'react';

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

interface ModalProps {
  project: ProjectData;
  onClose: () => void;
  isDarkMode: boolean;
}

const Modal: React.FC<ModalProps> = ({ project, onClose, isDarkMode }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className={`modal-overlay ${isDarkMode ? 'dark' : ''}`} onClick={onClose}>
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

export default Modal;

