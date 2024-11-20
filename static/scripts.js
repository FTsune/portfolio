document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', 
            menuToggle.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
        );
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu after clicking a link
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    function setTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
        }
        localStorage.setItem('theme', theme);
    }

    // Check for saved theme preference or use the system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
    }

    // Toggle theme when the button is clicked
    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('light-theme')) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });

    // Listen for changes in system theme preference
    prefersDarkScheme.addEventListener('change', (e) => {
        setTheme(e.matches ? 'dark' : 'light');
    });

    // Navbar blur effect on scroll
    const nav = document.querySelector('nav');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Tab functionality for About section
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const tabDescriptions = document.querySelectorAll('.tab-description');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            
            // Update active state for buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show active content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tab}-content`) {
                    content.classList.add('active');
                }
            });
            
            // Show active description
            tabDescriptions.forEach(desc => {
                desc.classList.remove('active');
                if (desc.id === `${tab}-description`) {
                    desc.classList.add('active');
                }
            });
        });
    });

    // Initialize Lucide icons
    lucide.createIcons();
});