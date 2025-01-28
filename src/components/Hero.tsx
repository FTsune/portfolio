import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  const handleDownloadCV = () => {
    const cvUrl = '/docs/franco_cv.pdf';
    
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Franco_Miguel_Villamor.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="hero">
      <div className="container">
        <div className="hero-content">
          <img src="/images/franco.jpg" alt="Franco" className="profile-img" />
          <div className="hero-text">
            <h1>Franco</h1>
            <p className="subtitle">BS Computer Science</p>
            <p className="about-text">Hi, I'm Franco Miguel A. Villamor, a passionate student interested in Data Science/AI! I specialize mostly in Python.</p>
            <div className="hero-links">
              <div className="social-links">
                <a href="https://github.com/FTsune" aria-label="GitHub"><Github /></a>
                <a href="https://www.linkedin.com/in/franco-miguel-villamor-b58383337" aria-label="LinkedIn"><Linkedin /></a>
                <a href="https://x.com/ocnarff_" aria-label="Twitter"><Twitter /></a>
              </div>
              <button className="btn" onClick={handleDownloadCV}>Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;