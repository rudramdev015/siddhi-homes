import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiCalendarCheckFill } from "react-icons/ri"; // Icon for Book Visit
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Replace with your actual WhatsApp number (Country code + Number, no symbols)
    const whatsappNumber = "918829040290"; 
    const whatsappMessage = "Hello, I am interested in Siddhi Homes project.";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if(isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const handleLinkClick = () => setIsMenuOpen(false);

    const links = [
        { path: '/', label: 'Home' },
        { path: '/portfolio', label: 'Gallery' },
        { path: '/about', label: 'Our Legacy' },
        { path: '/contact', label: 'Contact Us' }
    ];

    const socialLinks = [
        { name: 'Instagram', icon: <FaInstagram />, url: '#' },
        { name: 'LinkedIn', icon: <FaLinkedinIn />, url: '#' },
        { name: 'Facebook', icon: <FaFacebookF />, url: '#' },
        { name: 'X', icon: <FaXTwitter />, url: '#' }
    ];

    return (
        <div className="siddhi-nav-wrapper">
            <header className={`siddhi-header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="siddhi-container">
                    
                    {/* LEFT: Hamburger & Logo */}
                    <div className="siddhi-left-section">
                        <div 
                            className={`siddhi-hamburger ${isMenuOpen ? 'active' : ''}`} 
                            onClick={toggleMenu}
                        >
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>

                        <Link to="/" className="siddhi-logo" onClick={handleLinkClick}>
                            SIDDHI<span>HOMES</span>
                        </Link>
                    </div>

                    {/* CENTER: Desktop Nav */}
                    <nav className="siddhi-desktop-nav">
                        <ul>
                            {links.map(link => (
                                <li key={link.path}>
                                    <Link 
                                        to={link.path} 
                                        className={location.pathname === link.path ? 'active' : ''}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* RIGHT: Action Buttons */}
                    <div className="siddhi-actions">
                        {/* WhatsApp Button */}
                        <a 
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                            className="action-btn whatsapp-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp className="btn-icon" />
                            <span className="btn-text">WhatsApp</span>
                        </a>

                        {/* Contact Page Link */}
                        <Link to="/contact" className="action-btn contact-btn">
                            <RiCalendarCheckFill className="btn-icon" />
                            <span className="btn-text">BOOK A VISIT</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Side Menu Overlay */}
            <div 
                className={`siddhi-overlay ${isMenuOpen ? 'active' : ''}`} 
                onClick={toggleMenu}
            ></div>

            {/* Animated Side Menu */}
            <div className={`siddhi-side-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="siddhi-side-header">
                    <div className="siddhi-close-btn" onClick={toggleMenu}>
                        <span className="close-icon">&times;</span>
                        CLOSE
                    </div>
                </div>

                <ul className="siddhi-side-links">
                    {links.map((link, index) => (
                        <li key={link.path} style={{ transitionDelay: `${index * 0.1}s` }}>
                            <Link 
                                to={link.path} 
                                className={location.pathname === link.path ? 'active' : ''}
                                onClick={handleLinkClick}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Actions (Visible inside menu on phones) */}
                <div className="mobile-menu-actions">
                    <a 
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                        className="mobile-action-btn whatsapp-mobile"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp /> Chat on WhatsApp
                    </a>
                    
                    <Link to="/contact" className="mobile-action-btn contact-mobile" onClick={handleLinkClick}>
                        <RiCalendarCheckFill /> Book a Visit
                    </Link>
                </div>

                <div className="siddhi-side-footer">
                    <p className="side-footer-label">Connect With Us</p>
                    <div className="siddhi-social-row">
                        {socialLinks.map((item, index) => (
                            <a key={index} href={item.url} className="siddhi-social-item" target="_blank" rel="noopener noreferrer">
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;