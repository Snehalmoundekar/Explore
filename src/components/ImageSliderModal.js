import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ImageSliderModal = ({ isOpen, onClose, images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    if (!isOpen) return null; // Don't render if the modal is not open

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-modal" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                    
                </button>
                <Slider {...settings}>
                    {images.map((imgSrc, index) => (
                        <div key={index} id="slider_image">
                            <img src={imgSrc} alt={`Slide ${index}`} className="slider-image" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ImageSliderModal;
