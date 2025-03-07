import React, { useEffect, useRef } from "react";

function Experience() {
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
    return (
        <>
            {/* Experience */}
            <section className="explore-wonderfull-section margin_top" id="about">
                <div className="row mb-5 slider-section">
                    <div className="col-lg-6 slide-in-left" ref={leftTextRef}>
                        <h2 className="fw-bold">Explore <span className="text-orange">Wonderful <br /> Experience</span></h2>
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0 button-carousel slide-in-right" ref={rightTextRef}>
                        <p className="text-muted">Feel The Excited Activities On The Way You're Going To Trip We Have A Lot Of Activities That You Can Explore With Our Professional Guide</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-between pt-4 pb-4 image-section">
                    <div className="col-6 col-md-4 col-lg-2 text-center tooltip-custom ">
                        <img src="./assets/beach.png" alt="Beach Activity" className="img-fluid mt-4" />
                        <div className="tooltip-content">Beach Activity</div>
                        <div className="text-center mt-4">
                            <h4 className="fw-bold">Beach Activity</h4>
                            <span className="text-secondary">12 Properties</span>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 text-center tooltip-custom border-start border-3 border-gray">
                        <img src="./assets/bungee-jumping.png" alt="Bungee Jumping" className="img-fluid mt-4" />
                        <div className="tooltip-content">Bungee Jumping</div>
                        <div className="text-center mt-4">
                            <h4 className="fw-bold">Bungee Jumping</h4>
                            <span className="text-secondary">213 Properties</span>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 text-center tooltip-custom border-start border-3 border-gray">
                        <img src="./assets/transport.png" alt="City Tours" className="img-fluid mt-4" />
                        <div className="tooltip-content">City Tours</div>
                        <div className="text-center mt-4">
                            <h4 className="fw-bold">City Tours</h4>
                            <span className="text-secondary">210 Properties</span>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 text-center tooltip-custom border-start border-3 border-gray">
                        <img src="./assets/hiking.png" alt="Hiking Trip" className="img-fluid mt-4" />
                        <div className="tooltip-content">Hiking Trip</div>
                        <div className="text-center mt-4">
                            <h4 className="fw-bold">Hiking Trip</h4>
                            <span className="text-secondary">20 Properties</span>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 text-center tooltip-custom border-start border-3 border-gray">
                        <img src="./assets/bike.png" alt="Mountain Bike" className="img-fluid mt-4" />
                        <div className="tooltip-content">Mountain Bike</div>
                        <div className="text-center mt-4">
                            <h4 className="fw-bold">Mountain Bike</h4>
                            <span className="text-secondary">123 Properties</span>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 text-center tooltip-custom border-start border-3 border-gray">
                        <img src="./assets/scuba-diving.png" alt="Scuba Diving" className="img-fluid mt-4" />
                        <div className="tooltip-content">Scuba Diving</div>
                        <div className="text-center mt-4">
                            <h4 className="fw-bold">Scuba Diving</h4>
                            <span className="text-secondary">546 Properties</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Experience;
