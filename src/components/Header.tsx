import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); // Changed default to 'light'
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to light theme if no saved theme
      setTheme('light');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('light-theme', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="logo">F</a>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-right">
          <button onClick={toggleTheme} id="theme-toggle" aria-label="Toggle theme">
            {theme === 'light' ? <Moon /> : <Sun />}
          </button>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;