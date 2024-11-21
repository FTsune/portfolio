import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-info">
          <div className="contact-item">
            <Mail />
            <a href="mailto:villamofranco16@gmail.com">villamorfranco16@gmail.com</a>
          </div>
          <div className="contact-item">
            <Phone />
            <a href="tel:09297641848">0929 - 764 - 1848</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

