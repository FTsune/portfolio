'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Menu } from 'lucide-react';

const Header = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const navLinksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('light');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.classList.toggle('light-theme', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsAnimating(true);
      navLinksRef.current?.classList.add('closing');
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 300); // Match this with CSS transition duration
    }
  };

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsAnimating(true);
      setIsMenuOpen(true);
    } else {
      closeMenu();
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        closeMenu();
        const navHeight = navRef.current?.offsetHeight || 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleTransitionEnd = () => {
    if (!isMenuOpen) {
      navLinksRef.current?.classList.remove('closing');
    }
    setIsAnimating(false);
  };

  return (
    <nav ref={navRef} className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="logo">F</a>
        <div className={`nav-links-container ${isMenuOpen ? 'open' : ''} ${isAnimating ? 'animating' : ''}`}>
          <ul ref={navLinksRef} className="nav-links" onTransitionEnd={handleTransitionEnd}>
            <li><a href="#about" onClick={handleLinkClick}>About</a></li>
            <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          </ul>
        </div>
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