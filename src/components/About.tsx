import React from 'react';
import { Code, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-column">
            <h3><Code /> Skills</h3>
            <ul>
              <li>Python</li>
              <li>Data Science</li>
              <li>Machine/Deep Learning</li>
              <li>C#</li>
              <li>Java</li>
            </ul>
          </div>
          <div className="about-column">
            <h3><Award /> Achievements</h3>
            <ul>
              <li>Academic Year 2021-2022 Dean's Lister</li>
              <li>Academic Year 2022-2023 2nd Semester Dean's Lister</li>
              <li>Academic Year 2023-2024 President's Lister</li>
              <li>Certified CompTIA ITF+ 2024 Exam Passer</li>
              <li>Top 15 Finalist, DICT IV-A Regional Pitching Competition</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

