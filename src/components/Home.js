import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import Experience from './Experience';
import Inspiration from './Inspiration';
import Perfection from './Perfection';
import Package from './Package';
import Guidline from './Guidline';

const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};
function Home() {
    const options = {
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 4,
            },
            1400: {
                items: 5,
            },
        }
    };
    return (
        <>
            <section id="home">
                <div className="banner-video-container">
                    <div class="overlay"></div>
                    <video className="banner-video" autoPlay loop muted>
                        <source src="./assets/Banner_video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="banner-heading">
                        <h1>Travel to any <br /> corner of the world</h1>
                        <p>A travel agent helps you to plan your trip from start to finish.</p>
                        <a href="#packages" onClick={(e) => { e.preventDefault(); handleScroll('packages'); }} className="text-muted mx-2 text-decoration-none">
                            <button className="banner-btn">Plan your trip</button>
                        </a>
                    </div>
                </div>
                <section className="trading-destination-section">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Trading Destinations</h2>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0 button-carousel"></div>
                    </div>
                    <OwlCarousel className="destination" {...options}>
                        <div className="trading-destination-item">
                            <img src="./assets/australia.jpg" alt="Australia" />
                            <h3>Australia</h3>
                        </div>
                        <div className="trading-destination-item">
                            <img src="./assets/japan.jpeg" alt="Japan" />
                            <h3>Japan</h3>
                        </div>
                        <div className="trading-destination-item">
                            <img src="./assets/Malaysia.jpg" alt="Malaysia" />
                            <h3>Malaysia</h3>
                        </div>
                        <div className="trading-destination-item">
                            <img src="./assets/singapore.cms" alt="Singapore" />
                            <h3>Singapore</h3>
                        </div>
                        <div className="trading-destination-item">
                            <img src="./assets/south-korea.jpg" alt="South Korea" />
                            <h3>South Korea</h3>
                        </div>
                        <div className="trading-destination-item">
                            <img src="./assets/Thailand.webp" alt="Thailand" />
                            <h3>Thailand</h3>
                        </div>
                        <div className="trading-destination-item">
                            <img src="./assets/USA.jpeg" alt="USA" />
                            <h3>USA</h3>
                        </div>
                    </OwlCarousel>
                </section>
            </section>
            <Experience />
            <Inspiration />
            <Perfection />
            <Package />
            <Guidline />
        </>
    );
}

export default Home;
