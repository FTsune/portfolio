import React from 'react';

const ProjectCard: React.FC<{
  image: string;
  title: string;
  description: string;
  demoLink?: string;
  githubLink: string;
}> = ({ image, title, description, demoLink, githubLink }) => (
  <div className="project-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="project-links">
      {demoLink && (
        <a href={demoLink} className="btn btn-outline link-no-underline" target="_blank" rel="noopener noreferrer">
          View Demo
        </a>
      )}
      <a href={githubLink} className="btn btn-outline link-no-underline" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  </div>
);

const Projects: React.FC = () => {
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
          <ProjectCard
            image="/images/brewguard.png"
            title="BrewGuard"
            description="A coffee leaf classification and disease detection web app made with Streamlit."
            demoLink="https://brewguard.streamlit.app"
            githubLink="https://github.com/FTsune/kape"
          />
          <ProjectCard
            image="/images/snapfolia.png"
            title="Snapfolia"
            description="A leaf classification web app made by BSCS students."
            demoLink="https://trees.firstasia.edu.ph/"
            githubLink="https://github.com/CHlNlTO/snapfolia"
          />
          <ProjectCard
            image="/images/anime.png"
            title="RU Seasonal Anime Poll"
            description="A seasonal anime voting system app made with Django."
            githubLink="https://github.com/FTsune/Anime-Voting-System"
          />
          <ProjectCard
            image="/images/cinema.png"
            title="Uncianood Cinema Booking"
            description="A cinema booking system app made with Visual Basic."
            githubLink="https://github.com/FTsune/Cinema-Booking-System"
          />
        </div>
        <div className="view-more">
          <a href="https://github.com/FTsune" className="view-more-link" target="_blank" rel="noopener noreferrer">
            <img src="/images/github-icon.webp" alt="GitHub Icon" className="github-icon" />
            View more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;