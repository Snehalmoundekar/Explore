import React from 'react';
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation(); // Get the current location
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary transparent-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand pl-5" href="/Explore">
                        <img src="./assets/Logo.png" alt="Logo" className={location.pathname.includes('/privacy') || location.pathname.includes('/terms') ? '' : 'filtered'} />
                    </a>
                    {!location.pathname.includes('/privacy') && !location.pathname.includes('/terms') && (
                        <>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/Explore" onClick={() => handleScroll('home')}>Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#services" onClick={(e) => { e.preventDefault(); handleScroll('services'); }}>Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#packages" onClick={(e) => { e.preventDefault(); handleScroll('packages'); }}>Packages</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
