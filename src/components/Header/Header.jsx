import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if scrolled more than 10px
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        // If isScrolled is true, it adds the 'scrolled' class
        <header className={isScrolled ? 'scrolled' : ''}>
            <div className="header-container">
                <div className="gm">GM</div>
                <div className="header-right-side">
                    <span>Home</span>
                    <span>Work</span>
                    <span>Skills</span>
                    <span>Contact</span>
                    <button className="btn-hire-me">Hire Me</button>
                </div>
            </div>
        </header>
    );
};

export default Header;