import React, { useState } from "react";
import "./SlideShow.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import slides from "./slides.json";

const SlideShow: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const handleNext = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setIsAnimating(false);
        }, 100);
    };

    const handlePrev = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setIsAnimating(false);
        }, 100);
    };

    const handleNavigate = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="slideshow-container">
            <div className="slide-content">
                <div className="slide">
                    <div className="slide-text">
                        <h2 className="Slide-text-Title">{slides[currentSlide].title}</h2>
                        <p className="Slide-text-Des">{slides[currentSlide].description}</p>
                    </div>
                    <div className="slide-Right">
                        <div className={`slide-image ${isAnimating ? "animating" : ""}`}>
                            <img
                                src={slides[currentSlide].image}
                                alt={`Slide ${currentSlide + 1}`}
                            />
                        </div>
                        <div className="btn-part">
                            <div className="navigation-buttons">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`navigation-button ${index === currentSlide ? "active" : ""}`}
                                        onClick={() => handleNavigate(index)}
                                    />
                                ))}
                            </div>
                            <div className="ChangePage-btn">
                                <button className="prev-button" onClick={handlePrev}><FontAwesomeIcon icon={faChevronLeft}/></button>
                                <button className="next-button" onClick={handleNext}><FontAwesomeIcon icon={faChevronRight}/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlideShow;