import React, { useEffect, useRef } from "react";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

function Guidline() {
    const leftTextRef = useRef(null);
    const rightTextRef = useRef(null);

    useEffect(() => {
        const leftTextElement = leftTextRef.current;
        const rightTextElement = rightTextRef.current;


        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                    else {
                        entry.target.classList.remove("active");
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px"
            }
        );

        if (leftTextElement) observer.observe(leftTextElement);
        if (rightTextElement) observer.observe(rightTextElement);

        return () => {
            if (leftTextElement) observer.unobserve(leftTextElement);
            if (rightTextElement) observer.unobserve(rightTextElement);
        };
    }, []);
    const options = {
        autoplay: false,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        margin: 10,
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

        }
    };
    return (
        <>
            <section className="guidline" id='guidline'>
                <div className="col-12 text-center">
                    <h2 className="fw-bold">Discover Our Travel <span className="text-orange">Guidline</span></h2>
                    <p className="text-muted pt-3">Our Agency Has Been Present For Over 20 Year In The Market</p>
                </div>

                {/* <div className="col-md-8 offset-md-2">
                    <video className="banner-video" autoPlay loop muted>
                        <source src="/assets/banner-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div> */}
                <div className="col-md-12 mt-5 mb-5 text-center">
                    <div className="d-flex flex-column align-items-center">
                        <div className="col-md-8 mb-4"> {/* Added mb-4 for spacing between cards */}
                            <div className="card border-0">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img src="./assets/Guide.avif" alt="South Korea" className="img-fluid" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold text-left mb-2">
                                                Provide an overview of your travel guidelines and the importance of following them to ensure a smooth travel experience</h6>
                                            <ul>
                                                <li className="card-text text-left text-muted grey-text"><b>Planning: </b>Provide tips for effective trip planning, such as selecting destinations, budgeting wisely, and securing accommodations and transportation.</li>
                                                <li className="card-text text-left text-muted grey-text"><b>Safety Guidelines: </b>Outline travel safety tips, such as health precautions, travel insurance, and emergency contacts.</li>
                                                <li className="card-text text-left text-muted grey-text"><b>Cultural Etiquette: </b>Educate travelers on cultural norms, acceptable behaviors, and dress codes specific to various destinations to promote respectful and enjoyable interactions.</li>
                                                <li className="card-text text-left text-muted grey-text"><b>Packing Tips: </b>Offer a checklist of essential items tailored to different climates, trip types, and local customs to ensure travelers are well-prepared for their journeys.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8"> {/* Second card */}
                            <div className="card border-0">
                                <div className="row g-0">
                                    <div className="col-md-6 order-md-1 order-2">
                                        <div className="card-body">
                                            <h6 className="card-title fw-bold text-left mb-2">
                                            Founded over 20 years ago, our agency has evolved from a local service into a global provider of tailored travel experiences, known for exceptional customer service.</h6>
                                            <ul>
                                                <li className="card-text text-left text-muted grey-text"><b>Experience: </b> Our agency boasts over 20 years of expertise in the travel industry, with strong partnerships, numerous customer success stories, and specialization in popular destinations worldwide.
                                                </li>
                                                <li className="card-text text-left text-muted grey-text"><b>Customer Testimonials: </b>"Thanks to [Explore Agency], our trip to Italy was seamless! Their attention to detail and local insights made all the difference!" — Jane D.</li>
                                                <li className="card-text text-left text-muted grey-text"><b>Awards and Recognition: </b>Our agency has been recognized with several prestigious awards, including the "Best Travel Agency" by [XYZ Organization] for our exceptional service and commitment to customer satisfaction..</li>
                                                <li className="card-text text-left text-muted grey-text"><b>Unique Services
                                                : </b>We offer personalized trip planning, exclusive deals, and guided tours, ensuring every traveler has a unique and memorable journey.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6 order-md-2 order-1">
                                        <img src="./assets/travel-company.jpg" alt="South Korea" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className='testomonial'>
                <div className="col-12 text-left line-height slide-in-left" ref={leftTextRef}>
                    <h2 className="fw-bold">What They Say About <br /><span className="text-orange">Our Service</span></h2>
                </div>
                <section className="trading-testimonial-section  mt-5 mb-5 slide-in-right" ref={rightTextRef}>
                    <div className="row">
                        <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0 button-carousel"></div>
                    </div>

                    <OwlCarousel className="testimonial" {...options}>
                        <div className="testimonial-item">
                            <div className="card box p-3">
                                <div className="card-body text-left mt-4">
                                    <span className="fw-bold medium-size">An unforgettable experience! The team at [Explore Agency] went above and beyond to ensure our trip was seamless and memorable. Highly recommend!</span>
                                </div>
                                <div className='d-flex justify-content-evenly align-items-end'>
                                    <img src="./assets/profile.jpg" alt="South Korea" className="img-fluid small-image mt-3" />
                                    <p className="mb-0 d-flex flex-column justify-content-end">
                                        Sarah M <br />
                                        <span className='text-secondary'>South Korea</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="card box p-3">
                                <div className="card-body text-left mt-4">
                                    <span className="fw-bold medium-size">Thanks to [Explore Agency], we discovered hidden gems that we would have never found on our own. Exceptional service and attention to detail!.</span>
                                </div>
                                <div className='d-flex justify-content-evenly align-items-end'>
                                    <img src="./assets/testomonial.png" alt="South Korea" className="img-fluid small-image mt-3" />
                                    <p className="mb-0 d-flex flex-column justify-content-end">
                                        John D <br />
                                        <span className='text-secondary'>Australia</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="card box p-3">
                                <div className="card-body text-left mt-4">
                                    <span className="fw-bold medium-size">The best travel agency [Explore Agency] has I've ever worked with! They truly care about their clients and make every journey special.</span>
                                </div>
                                <div className='d-flex justify-content-evenly align-items-end'>
                                    <img src="./assets/testomonial-2.png" alt="South Korea" className="img-fluid small-image mt-3" />
                                    <p className="mb-0 d-flex flex-column justify-content-end">
                                        Michael L. <br />
                                        <span className='text-secondary'>Japan</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="card box p-3">
                                <div className="card-body text-left mt-4">
                                    <span className="fw-bold medium-size">I can't thank [Explore Agency] enough for their fantastic service! Our family vacation was perfectly planned, and we had the time of our lives!</span>
                                </div>
                                <div className='d-flex justify-content-evenly align-items-end'>
                                    <img src="./assets/testomonial-1.png" alt="South Korea" className="img-fluid small-image mt-3" />
                                    <p className="mb-0 d-flex flex-column justify-content-end">
                                        Lisa K. <br />
                                        <span className='text-secondary'>Malaysia</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </OwlCarousel>
                </section>
            </section>
        </>
    );
}

export default Guidline;