import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Subscribe() {
    const location = useLocation();
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        const messageElement = document.getElementById("message");
        const alertElement = document.getElementById("alert");
        const iconElement = document.getElementById("icon");
        // Simple regex for basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email && emailPattern.test(email)) {
            // Save the email in the local storage
            localStorage.setItem("subscribedEmail", email);
            iconElement.className = "bi bi-check-circle-fill me-2";
            alertElement.classList.add("alert-success");
            alertElement.classList.remove("alert-danger");
            messageElement.innerHTML = "<strong>Thanks for subscribing!</strong><br/>We're excited to share exciting news and exclusive offers with you soon!";
            alertElement.style.display = "block";
            setEmail("");
        } else if (email === "") {
            iconElement.className = "bi bi-exclamation-circle-fill me-2";
            messageElement.innerHTML = "<strong>Please enter your email address.</strong>";
            alertElement.style.display = "flex";
            alertElement.classList.add("alert-danger");
            alertElement.classList.remove("alert-success");
            alertElement.style.justifyContent = "space-between";
        }
        else {
            iconElement.className = "bi bi-exclamation-circle-fill me-2";
            messageElement.innerHTML = "<strong>Please enter a valid email address.</strong>";
            alertElement.style.display = "flex";
            alertElement.classList.add("alert-danger");
            alertElement.classList.remove("alert-success");
            alertElement.style.justifyContent = "space-between";
        }
    };

    return (
        <section className="subscribe" id="contact">
            <div className="container py-5">
                <div className="col-12 text-center">
                    <h2 className="fw-bold">Subscribe To Get <span className="text-orange">Special Prices </span></h2>
                    <p className="text-muted pt-3">Don't Wonna Miss Something? Subscribe Right Now And Get Special Promotions And Monthly Updates</p>
                </div>
                <div className="row">
                    <div className="col-md-8 col-sm-10 col-12 mx-auto mt-5">
                        <div className="input-group">
                            <input
                                type="email"
                                className="form-control text-muted text-input"
                                placeholder="Enter Your Email Address"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button
                                className="btn btn-orange text-white bg-black"
                                type="button"
                                id="button-addon2"
                                onClick={handleSubscribe}
                            >
                                Subscribe
                            </button>
                        </div>
                        <div class="alert alert-success alert-dismissible fade show mt-2" role="alert" id="alert" style={{ display: "none" }}>
                            <div className="alert-icon">
                                <i id="icon" class="bi me-2" role="img" aria-label="Success"></i>
                                <p id="message" className="text-center mt-3"></p>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-section pb-5">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Logo Section */}
                        <div className="col-md-3 col-sm-12 text-center mb-3 mb-md-0">
                            <a className="navbar-brand" href="/">
                                <img src="./assets/Logo.png" alt="Logo" className="img-fluid" />
                            </a>
                        </div>
                        {/* Links Section */}
                        <div className="col-md-6 col-sm-12 text-center mb-3 mb-md-0">
                            {!location.pathname.includes('/Explore/privacy') && !location.pathname.includes('/Explore/terms') && (
                                <>
                                    <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }} className="text-muted text-decoration-none mx-2">About</a>
                                    <a href="#services" onClick={(e) => { e.preventDefault(); handleScroll('services'); }} className="text-muted mx-2  text-decoration-none">Services</a>
                                    <a href="#perfection" onClick={(e) => { e.preventDefault(); handleScroll('perfection'); }} className="text-muted mx-2 text-decoration-none">Travel Perfection</a>
                                    <a href="#packages" onClick={(e) => { e.preventDefault(); handleScroll('packages'); }} className="text-muted mx-2 text-decoration-none">Packages</a>
                                    <a href="#guidline" onClick={(e) => { e.preventDefault(); handleScroll('guidline'); }} className="text-muted mx-2 text-decoration-none">Guidline</a>
                                </>
                            )}
                        </div>
                        {/* Social Icons Section */}
                        <div className="col-md-3 col-sm-12 text-center">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 icon-black">
                                <i className="fab fa-instagram fa-2x"></i>
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 icon-black">
                                <i className="fab fa-facebook fa-2x"></i>
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="mx-2 icon-black">
                                <i className="fab fa-youtube fa-2x"></i>
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 icon-black">
                                <i className="fab fa-twitter fa-2x"></i>
                            </a>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-6 col-sm-12 text-center text-md-left">
                            <p className="text-muted mb-0">© 2024. All Rights Reserved</p>
                        </div>
                        <div className="col-md-6 col-sm-12 text-center text-md-right">
                            <p className="text-muted mb-0">
                                <a href="/Explore/privacy" className="text-muted text-decoration-none">Privacy Policy</a> |
                                <a href="/Explore/terms" className="text-muted text-decoration-none"> Terms and Conditions</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Subscribe;
