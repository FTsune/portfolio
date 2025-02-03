import React, { useState } from 'react';
import { Code, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'achievements'>('skills');

  const profileDescription = "I am currently a 4th-year student at the First Asia Institute of Technology and Humanities, pursuing a Bachelor of Science in Computer Science (BSCS). Throughout my academic journey, I have gained a strong foundation in programming, algorithms, data structures, software development, and data science.";

  const skillsDescription = "I am passionate about technology and continuously strive to enhance my technical abilities. Here are some of the skills I have developed through academic study and hands-on projects.";
  const achievementsDescription = "My hard work and dedication have been recognized through various academic achievements and certifications. Here are some of my key accomplishments.";

  const skills = [
    "Artificial Intelligence",
    "Data Science",
    "Machine Learning", 
    "Neural Networks",
    "Software Development",
    "Natural Language Processing",
    "Computer Vision",
    "Data Visualization",
    "Data Analysis",
    "Large Language Models"
  ];

  const achievements = [
    "Academic Year 2021-2022 Dean's Lister",
    "Academic Year 2022-2023 2nd Semester Dean's Lister", 
    "Academic Year 2023-2024 President's Lister",
    "Academic Year 2024-2025 President's Lister",
    "Certified CompTIA ITF+ 2024 Exam Passer",
    "Top 15 Finalist, DICT IV-A Regional Pitching Competition",
    "10th TOPCIT Philippines Level 2 Certification"
  ];

  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-container">
          {/* Profile Section */}
          <div className="about-profile">
            <div className="school-logo-container">
              <div className="logo-wrapper">
                <img 
                  src="/images/faith-logo.png" 
                  alt="First Asia Institute of Technology and Humanities Logo" 
                  className="school-logo"
                />
                <span className="year-range">2021-2025</span>
              </div>
            </div>
            <div className="profile-description">
              <p>{profileDescription.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>
            </div>
          </div>

          {/* Rest of the component remains the same */}
          <div className="about-divider"></div>

          <div className="about-tabs">
            <button 
              className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              <Code className="tab-icon" /> Skills
            </button>
            <button 
              className={`tab ${activeTab === 'achievements' ? 'active' : ''}`}
              onClick={() => setActiveTab('achievements')}
            >
              <Award className="tab-icon" /> Achievements
            </button>
          </div>

          <div className="about-content">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                variants={listVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="about-list"
              >
                <ul>
                  {activeTab === 'skills' 
                    ? skills.map((skill, index) => (
                        <motion.li 
                          key={skill}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: index * 0.1,
                            duration: 0.3
                          }}
                        >
                          {skill}
                        </motion.li>
                      ))
                    : achievements.map((achievement, index) => (
                        <motion.li 
                          key={achievement}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: index * 0.1,
                            duration: 0.3
                          }}
                        >
                          {achievement}
                        </motion.li>
                      ))
                  }
                </ul>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab + '-description'}
                variants={descriptionVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="about-description"
              >
                <p>
                  {activeTab === 'skills' ? skillsDescription : achievementsDescription}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;