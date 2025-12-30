// Navbar.js

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    
    // REMOVED: The activeLink state is no longer needed.
    // const [activeLink, setActiveLink] = useState('/');

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // REMOVED: This useEffect caused the flicker. We will get the active
    // link directly from the 'location' object during render.
    // useEffect(() => {
    //     setActiveLink(location.pathname);
    // }, [location]);

    useEffect(() => {
        if(isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const links = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/contact', label: 'Contact' }
    ];

    const socialLinks = [
        { name: 'LinkedIn', icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/jitendraparmar10/' },
        { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/jitendraparmar10' },
        { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/jitendraparmar_10/' },
        { name: 'X', icon: <FaXTwitter />, url: 'https://x.com/jituparmar993' }
    ];

    return (
        <div className="jsparmar-nav-wrapper">
            <header className={`navbar-of-jsparmar-header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar-of-jsparmar-container">
                    <div className="navbar-of-jsparmar-left-section">
                        <div 
                            className={`navbar-of-jsparmar-hamburger ${isMenuOpen ? 'hidden' : ''}`} 
                            onClick={toggleMenu}
                        >
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>

                        <Link to="/" className="navbar-of-jsparmar-logo" onClick={handleLinkClick}>
                            Jitendra<span>Parmar</span>
                        </Link>
                    </div>

                    <nav className="navbar-of-jsparmar-desktop-nav">
                        <ul>
                            {links.map(link => (
                                <li key={link.path}>
                                    <Link 
                                        to={link.path} 
                                        // CHANGED: Compare directly with location.pathname
                                        className={location.pathname === link.path ? 'active' : ''}
                                        onClick={handleLinkClick}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>

            <div 
                className={`navbar-of-jsparmar-overlay ${isMenuOpen ? 'active' : ''}`} 
                onClick={toggleMenu}
            ></div>

            <div className={`navbar-of-jsparmar-side-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="navbar-of-jsparmar-side-header">
                    <div className="navbar-of-jsparmar-close-btn" onClick={toggleMenu}>
                        <span className="arrow-icon"></span>
                        Close menu
                    </div>
                </div>

                <div className="navbar-of-jsparmar-social-row">
                    {socialLinks.map((item, index) => (
                        <a key={index} href={item.url} className="navbar-of-jsparmar-social-item" target="_blank" rel="noopener noreferrer">
                            <span className="social-icon">{item.icon}</span>
                            <span className="social-label">{item.name}</span>
                        </a>
                    ))}
                </div>

                <ul className="navbar-of-jsparmar-side-links">
                    {links.map(link => (
                        <li key={link.path}>
                            <Link 
                                to={link.path} 
                                // CHANGED: Compare directly with location.pathname here as well
                                className={location.pathname === link.path ? 'active' : ''}
                                onClick={handleLinkClick}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;