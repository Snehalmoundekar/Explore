import React, { useEffect, useRef } from "react";

function Inspiration() {
    const leftTopTextRef = useRef(null);
    const RightTopTextRef = useRef(null);
    const leftBottomTextRef = useRef(null);
    const RightBottomTextRef = useRef(null);


    useEffect(() => {

        const leftTextElement = leftTopTextRef.current;
        const RightTopTextElement = RightTopTextRef.current;
        const leftBottomTextElement = leftBottomTextRef.current;
        const RightBottomTextElement = RightBottomTextRef.current;




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
        if (RightTopTextElement) observer.observe(RightTopTextElement);
        if (leftBottomTextElement) observer.observe(leftBottomTextElement);
        if (RightBottomTextElement) observer.observe(RightBottomTextElement);



        return () => {
            if (leftTextElement) observer.unobserve(leftTextElement);
            if (RightTopTextElement) observer.unobserve(RightTopTextElement);
            if (leftBottomTextElement) observer.unobserve(leftBottomTextElement);
            if (RightBottomTextElement) observer.unobserve(RightBottomTextElement);


        };
    }, []);
    return (
        <>
            <section className="Inspiration Expert_Advise" id="services">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h2 className="fw-bold "><span className="text-orange">Inspiration </span>& Expert Advise</h2>
                        <p className="text-muted pt-3">Explore A Different Way To Travel</p>
                    </div>
                </div>
                <div className="row g-0 d-flex justify-content-between image-section">
                    <div className="col-md-6 slide-in-left-top" ref={leftTopTextRef}>
                        <div className="card border-0">
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <img src="./assets/mounatin_bike.jpeg" alt="South Korea" className="img-fluid " />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold text-left mb-3 fs-5 line-height">Adventurous Mountain Bike</h5>
                                        <p className="card-text text-left text-muted grey-text">Experience the thrill of mountain biking through breathtaking landscapes. This journey promises excitement and exploration!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 slide-in-right-top" ref={RightTopTextRef}>
                        <div className="card border-0">
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <img src="./assets/hiking_1.jpeg" alt="South Korea" className="img-fluid " />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold text-left mb-3 fs-5 line-height">Explore Nature's Wonders</h5>
                                        <p className="card-text text-left text-muted grey-text">Experience the beauty of nature as you trek through breathtaking trails, encounter diverse wildlife, and enjoy panoramic views. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 slide-in-left-top" ref={leftBottomTextRef}>
                        <div className="card border-0">
                            <div className="row g-0">
                                <div className="col-md-6 order-md-1 order-2">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold text-left mb-3 fs-5 line-height">Explore the Natural beauty</h5>
                                        <p className="card-text text-left text-muted grey-text">This spot provides a stunning backdrop for relaxation, whether you're enjoying the sunset or a morning walk, promising tranquility and natural beauty.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 order-md-2 order-1">
                                    <img src="./assets/sea.avif" alt="South Korea" className="img-fluid " />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 slide-in-right-top" ref={RightBottomTextRef}>
                        <div className="card border-0">
                            <div className="row g-0">
                                <div className="col-md-6 order-md-1 order-2">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold text-left mb-3 fs-5 line-height">Explore Underwater World</h5>
                                        <p className="card-text text-left text-muted grey-text">Dive into the mesmerizing depths of the ocean and discover vibrant marine life like never before! Our scuba diving adventures cater to both beginners and experienced divers.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 order-md-2 order-1">
                                    <img src="./assets/Scuba_Diving.webp" alt="South Korea" className="img-fluid " />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Inspiration;