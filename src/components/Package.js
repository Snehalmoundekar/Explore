import React, { useEffect, useState ,useRef} from "react";
import Isotope from "isotope-layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import ImageSliderModal from './ImageSliderModal';


function Package() {
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
    const [activeCategory, setActiveCategory] = useState(".special-deals");
    const [showViewAll, setShowViewAll] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);


    // City images
    const images = {
        australia: [
            "./assets/australia.jpg",
            "./assets/explore-image/Australia_1.jpg",
            "./assets/explore-image/Australia_2.jpg",
        ],
        japan: [
            "./assets/japan.jpeg",
            "./assets/explore-image/japn_1.jpeg",
            "./assets/explore-image/japn_2.webp",
        ],
        malaysia:[
            "./assets/Malaysia.jpg",
            "./assets/explore-image/Malaysia_1.jpg",
            "./assets/explore-image/Malaysia_2.jpeg",
        ],
        singapore:[
            "./assets/singapore.cms",
            "./assets/explore-image/Singapore_1.jpeg",
            "./assets/explore-image/Singapore_2.jpeg",
        ],
        southkorea :[
            "./assets/south-korea.jpg",
            "./assets/explore-image/South-Korea-1.jpeg",
            "./assets/explore-image/South-Korea-2.jpeg",
        ],
        thailand:[
            "./assets/Thailand.webp",
            "./assets/explore-image/Thailand_1.jpeg",
            "./assets/explore-image/Thailand_2.jpeg",
        ],
        usa:[
            "./assets/USA.jpeg",
            "./assets/explore-image/USA_1.jpeg",
            "./assets/explore-image/USA_2.jpeg",
        ],
        canada:[
            "./assets/explore-image/canada_1.jpg",
            "./assets/explore-image/canada.jpeg",
            "./assets/explore-image/canada_2.jpeg",
        ],
        swzerland:[
            "./assets/explore-image/swzerland_1.jpeg",
            "./assets/explore-image/swzerland_2.jpeg",
            "./assets/explore-image/swzerland.jpeg",
        ]
    };

    useEffect(() => {
        const isotope = new Isotope(".package-items", {
            itemSelector: ".package-item",
            layoutMode: "fitRows",
        });

        isotope.arrange({ filter: activeCategory });

        return () => {
            isotope.destroy();
        };
    }, [activeCategory]);

    const handleFilterChange = (filterValue) => {
        setActiveCategory(filterValue);
        setShowViewAll(filterValue !== "*");
    };
      const handleExploreClick = (city) => {
        setSelectedImages(images[city.toLowerCase()]); 
        setIsModalOpen(true); 
    };

    return (
        <>
            <section className="package" id="packages">
                <div className="row mb-5 margin_top">
                    <div className="col-12 text-center slide-in-left" ref={leftTextRef}>
                        <h2 className="fw-bold">Travel Tours <span className="text-orange">Package</span></h2>
                        <p className="text-muted pt-3">Get The Full Package Experience Included With All Your Needs On The Trips</p>
                    </div>
                    <div className="col-12 text-center mt-3 test slide-in-right" ref={rightTextRef}>
                        <span
                            data-filter=".special-deals"
                            className={`category-button ${activeCategory === ".special-deals" ? "active" : ""}`}
                            onClick={() => handleFilterChange(".special-deals")}
                        >
                            Special Deals
                        </span>
                        <span
                            data-filter=".popular"
                            className={`category-button ${activeCategory === ".popular" ? "active" : ""}`}
                            onClick={() => handleFilterChange(".popular")}
                        >
                            Popular
                        </span>
                        <span
                            data-filter=".recommendation"
                            className={`category-button ${activeCategory === ".recommendation" ? "active" : ""}`}
                            onClick={() => handleFilterChange(".recommendation")}
                        >
                            Recommendation
                        </span>
                        <span
                            data-filter=".best-price"
                            className={`category-button ${activeCategory === ".best-price" ? "active" : ""}`}
                            onClick={() => handleFilterChange(".best-price")}
                        >
                            Best Price
                        </span>
                    </div>
                </div>
                {/* special-deals start here */}
                <div className="row package-items d-flex justify-content-center">
                    <div className="col-12 col-md-4 mb-3 package-item special-deals  ">
                        <div className="card box">
                            <span className="text-muted d-flex align-items-center pt-4 pb-1 pl-3">
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#dc5129', marginRight: '5px' }} />
                                Australia
                            </span>
                            <h4 className="fw-bold font-size pt-3 pl-2 pr-2 text-center line-height">Australia Conghua Bishulwan Hot Spring</h4>
                            <div className="row d-flex pt-3 pb-4 pl-4 pr-4">
                                <div className="col-12 col-md-8">
                                    <img src="./assets/australia.jpg" alt="Australia" className="img-fluid mt-3" />
                                </div>
                                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center location">
                                    <iframe
                                        className="mt-3"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29727335.328922484!2d111.80389919025055!3d-24.56070495028199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sin!4v1739203601358!5m2!1sen!2sin"
                                        width="100%"
                                        height="160"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="map"
                                    ></iframe>
                                    
                                </div>
                            </div>
                            <div className="card-body text-center m-4 p-0 d-flex justify-content-evenly align-items-center explore_now">
                                <h5 className="fw-bold font-size mb-0">From $1,770/person</h5>
                                <button className="banner-btn mt-2" onClick={() => handleExploreClick('australia')}>Explore Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 mb-3 package-item special-deals">
                        <div className="card box">
                            <span className="text-muted d-flex align-items-center pt-4 pb-1 pl-3">
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#dc5129', marginRight: '5px' }} />
                                Japan
                            </span>
                            <h4 className="fw-bold font-size pt-3 pl-2 pr-2 text-center line-height">Japan Conghua Bishulwan Hot Spring</h4>
                            <div className="row d-flex pt-3 pb-4 pl-4 pr-4">
                                <div className="col-12 col-md-8">
                                    <img src="./assets/japan.jpeg" alt="South Korea" className="img-fluid mt-3" />
                                </div>
                                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center location">
                                    <iframe
                                        className="mt-3"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27826463.748355713!2d115.73101611444137!3d31.639733148631215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2sin!4v1739203782304!5m2!1sen!2sin"
                                        width="100%"
                                        height="160"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="map"
                                    ></iframe>
                                    
                                </div>
                            </div>
                            <div className="card-body text-center m-4 p-0 d-flex justify-content-evenly align-items-center explore_now">
                                <h5 className="fw-bold font-size mb-0">From $1,740/person</h5>
                                <button className="banner-btn mt-2" onClick={() => handleExploreClick('japan')}>Explore Now</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3 package-item special-deals  ">
                        <div className="card box">
                            <span className="text-muted d-flex align-items-center pt-4 pb-1 pl-3">
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#dc5129', marginRight: '5px' }} />
                                Malaysia
                            </span>
                            <h4 className="fw-bold font-size pt-3 pl-2 pr-2 text-center line-height">Malaysia Conghua Bishulwan Hot Spring</h4>
                            <div className="row d-flex pt-3 pb-4 pl-4 pr-4">
                                <div className="col-12 col-md-8">
                                    <img src="./assets/Malaysia.jpg" alt="South Korea" className="img-fluid mt-3" />
                                </div>
                                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center location">
                                    <iframe
                                        className="mt-3"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305090.766571011!2d88.63504824016694!3d3.8669148385362067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3034d3975f6730af%3A0x745969328211cd8!2sMalaysia!5e0!3m2!1sen!2sin!4v1739203846959!5m2!1sen!2sin"
                                        width="100%"
                                        height="160"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="map"
                                    ></iframe>
                                    
                                </div>
                            </div>
                            <div className="card-body text-center m-4 p-0 d-flex justify-content-evenly align-items-center explore_now">
                                <h5 className="fw-bold font-size mb-0">From $1,790/person</h5>
                                <button className="banner-btn mt-2" onClick={() => handleExploreClick('malaysia')}>Explore Now</button>
                            </div>

                        </div>
                    </div>
                    {/* special-deals end here */}
                    {/* popular start */}
                    <div className="col-12 col-md-4 mb-3 package-item popular">
                        <div className="card box">
                            <span className="text-muted d-flex align-items-center pt-4 pb-1 pl-3">
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#dc5129', marginRight: '5px' }} />
                                Singapore
                            </span>
                            <h4 className="fw-bold font-size pt-3 pl-2 pr-2 text-center line-height">Singapore Conghua Bishulwan Hot Spring</h4>
                            <div className="row d-flex pt-3 pb-4 pl-4 pr-4">
                                <div className="col-12 col-md-8">
                                    <img src="./assets/singapore.cms" alt="South Korea" className="img-fluid mt-3" />
                                </div>
                                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center location">
                                    <iframe
                                        className="mt-3"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.22560151276!2d103.67943597208931!3d1.3139946155431659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2sin!4v1739203908627!5m2!1sen!2sin"
                                        width="100%"
                                        height="160"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="map"
                                    ></iframe>
                                    
                                </div>
                            </div>
                            <div className="card-body text-center m-4 p-0 d-flex justify-content-evenly align-items-center explore_now">
                                <h5 className="fw-bold font-size mb-0">From $1,850/person</h5>
                                <button className="banner-btn mt-2" onClick={() => handleExploreClick('singapore')}>Explore Now</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3 package-item popular">
                        <div className="card box">
                            <span className="text-muted d-flex align-items-center pt-4 pb-1 pl-3">
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#dc5129', marginRight: '5px' }} />
                                South Korea
                            </span>
                            <h4 className="fw-bold font-size pt-3 pl-2 pr-2 text-center line-height">South Korea Conghua Bishulwan Hot Spring</h4>
                            <div className="row d-flex pt-3 pb-4 pl-4 pr-4">
                                <div className="col-12 col-md-8">
                                    <img src="./assets/south-korea.jpg" alt="South Korea" className="img-fluid mt-3" />
                                </div>
                                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center location">
                                    <iframe
                                        className="mt-3"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314071.259140324!2d125.23266392487285!3d35.7901684185686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356455ebcb11ba9b%3A0x91249b00ba88db4b!2sSouth%20Korea!5e0!3m2!1sen!2sin!4v1739203960063!5m2!1sen!2sin"
                                        width="100%"
                                        height="160"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="map"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="card-body text-center m-4 p-0 d-flex justify-content-evenly align-items-center explore_now">
                                <h5 className="fw-bold font-size mb-0">From $1,550/person</h5>
                                <button className="banner-btn mt-2" onClick={() => handleExploreClick('southkorea')}>Explore Now</button>
                            </div>

                        </div>
                    </div>
                    {/* popular end  */}
                    {/* recommendation start */}
                    <div className="col-12 col-md-4 mb-3 package-item recommendation">
                        <div className="card box">
                            <span className="text-muted d-flex align-items-center pt-4 pb-1 pl-3">
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#dc5129', marginRight: '5px' }} />
                                Thailand
                            </span>
                            <h4 className="fw-bold font-size pt-3 pl-2 pr-2 text-center line-height">Thailand Conghua Bishulwan Hot Spring</h4>
                            <div className="row d-flex pt-3 pb-4 pl-4 pr-4">
                                <div className="col-12 col-md-8">
                                    <img src="./assets/Thailand.webp" alt="South Korea" className="img-fluid mt-3" />
                                </div>
                                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center location">
                                    <iframe
                                        className="mt-3"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15934864.01374744!2d90.81355033056583!3d12.820796643859362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2sThailand!5e0!3m2!1sen!2sin!4v1739204010448!5m2!1sen!2sin"
                                        width="100%"
                                        height="160"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="map"
                                    ></iframe>
                                   
                                </div>
                            </div>
                            <div className="card-body text-center m-4 p-0 d-flex justify-content-evenly align-items-center explore_now">
                                <h5 className="fw-bold font-size mb-0">From $1,900/person</h5>
                                <button className="banner-btn mt-2" onClick={() => handleExploreClick('thailand')}>Explore Now</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3 package-item recommendation">
                        <div className="card box">
                            <span className="text-muted d-flex align-items-center pt-4 pb-1 pl-3">
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#dc5129', marginRight: '5px' }} />
                                USA
                            </span>
                            <h4 className="fw-bold font-size pt-3 pl-2 pr-2 text-center line-height">USA Conghua Bishulwan Hot Spring</h4>
                            <div className="row d-flex pt-3 pb-4 pl-4 pr-4">
                                <div className="col-12 col-md-8">
                                    <img src="./assets/USA.jpeg" alt="South Korea" className="img-fluid mt-3" />
                                </div>
                                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center location">
                                    <iframe
                                        className="mt-3"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46830151.11795828!2d-119.8093025!3d44.24236485000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1739204062946!5m2!1sen!2sin"
                                        width="100%"
                                        height="160"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="map"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="card-body text-center m-4 p-0 d-flex justify-content-evenly align-items-center explore_now">
                                <h5 className="fw-bold font-size mb-0">From $1,450/person</h5>
                                <button className="banner-btn mt-2" onClick={() => handleExploreClick('usa')}>Explore Now</button>
                            </div>

                        </div>
                    </div>
                    {/* recommendation end */}
                    {/* best-price start */}
                    <div className="col-12 col-md-4 mb-3 package-item best-price">
                        <div className="card box">
                            <span className="text-muted d-flex align-items-center pt-4 pb-1 pl-3">
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#dc5129', marginRight: '5px' }} />
                                Canada
                            </span>
                            <h4 className="fw-bold font-size pt-3 pl-2 pr-2 text-center line-height">Canada Conghua Bishulwan Hot Spring</h4>
                            <div className="row d-flex pt-3 pb-4 pl-4 pr-4">
                                <div className="col-12 col-md-8">
                                    <img src="./assets/explore-image/canada_1.jpg" alt="South Korea" className="img-fluid mt-3" />
                                </div>
                                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center location">
                                    <iframe
                                        className="mt-3"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43035258.51816965!2d-135.5378995672093!3d48.826477205796216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sin!4v1739204114716!5m2!1sen!2sin"
                                        width="100%"
                                        height="160"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="map"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="card-body text-center m-4 p-0 d-flex justify-content-evenly align-items-center explore_now">
                                <h5 className="fw-bold font-size mb-0">From $1,150/person</h5>
                                <button className="banner-btn mt-2" onClick={() => handleExploreClick('canada')}>Explore Now</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3 package-item best-price">
                        <div className="card box">
                            <span className="text-muted d-flex align-items-center pt-4 pb-1 pl-3">
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#dc5129', marginRight: '5px' }} />
                                Swzerland
                            </span>
                            <h4 className="fw-bold font-size pt-3 pl-2 pr-2 text-center line-height">Swzerland Conghua Bishulwan Hot Spring</h4>
                            <div className="row d-flex pt-3 pb-4 pl-4 pr-4">
                                <div className="col-12 col-md-8">
                                    <img src="./assets/explore-image/swzerland_1.jpeg" alt="South Korea" className="img-fluid mt-3" />
                                </div>
                                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center location">
                                    <iframe
                                        className="mt-3"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1398238.1231977888!2d6.904998670039969!3d46.80560924548641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2sSwitzerland!5e0!3m2!1sen!2sin!4v1739204258554!5m2!1sen!2sin"
                                        width="100%"
                                        height="160"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="map"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="card-body text-center m-4 p-0 d-flex justify-content-evenly align-items-center explore_now">
                                <h5 className="fw-bold font-size mb-0">From $1,250/person</h5>
                                <button className="banner-btn mt-2" onClick={() => handleExploreClick('swzerland')}>Explore Now</button>
                            </div>

                        </div>
                    </div>
                    {/* best-price end */}
                </div>
                {showViewAll && (
                    <span
                        data-filter="*"
                        className={`category-button ${activeCategory === "*" ? "active" : ""}`}
                        onClick={() => handleFilterChange("*")}
                    >
                        <button className="banner-btn view_button mt-4">View All</button>
                    </span>
                )}
            </section>
            <ImageSliderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} images={selectedImages} />

        </>
    );
}

export default Package;
