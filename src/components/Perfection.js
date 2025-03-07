import React from "react";

function Perfection() {
    return (
        <>
            <section className="perfection" id="perfection">
                <div className="row mb-5 margin_top">
                    <div className="col-12 text-center">
                        <h2 className="fw-bold">Find Travel <span className="text-orange">Perfection </span></h2>
                        <p className="text-muted pt-3">Naturally Head Of The Class Whenit Comes To Luxury Travel Planning,Because <br />We Do Homework Than Anyone Else</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 mb-3">
                        <div className="card box p-5">
                            <img src="./assets/chat.png" alt="South Korea" className="img-fluid mt-3" />
                            <div className="card-body text-center mt-4 p-0">
                                <h5 className="fw-bold font-size">TELL US WHAT YOU WANT TO DO</h5>
                                <p className="text-secondary medium-size">Fill Out A 2-Minute Questionaire About How You Like To Travel</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card box p-5">
                            <img src="./assets/schedule.png" alt="South Korea" className="img-fluid mt-3" />
                            <div className="card-body text-center mt-4 p-0">
                                <h5 className="fw-bold font-size">SHARE YOUR TRAVEL PREFERENCE</h5>
                                <p className="text-secondary medium-size">It All Hoppends Online, We Recommend Everything To Your Vision</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card box p-5">
                            <img src="./assets/rating.png" alt="South Korea" className="img-fluid mt-3" />
                            <div className="card-body text-center mt-4 p-0">
                                <h5 className="fw-bold font-size">WE'LL GIVE YOU RECOMENDATIONS</h5>
                                <p className="text-secondary medium-size">Ones You're Happy With Your Find Plon Everything For You</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Perfection;