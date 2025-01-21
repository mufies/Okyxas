
import React, { useState } from 'react';
import './ContactBtn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function ContactBtn() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div className="dropdown-button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="main-button">
                Contact Us
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <div className={"dropdown-content-left"}>
                    <button className="dropdown-item">
                        <FontAwesomeIcon icon={faCog} />
                    </button>
                    <button className="dropdown-item">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </button>
                </div>
                <div className={"dropdown-content-right"}>
                    <button className="dropdown-item">
                        <FontAwesomeIcon icon={faCog} />
                    </button>
                    <button className="dropdown-item">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </button>
                </div>
                </div>



            )}
        </div>
    );
}

export default ContactBtn;