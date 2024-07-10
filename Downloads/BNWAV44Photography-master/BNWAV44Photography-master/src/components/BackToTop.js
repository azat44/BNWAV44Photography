import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

const ScrollToTopButton = ({ pcScrollOffset, mobileScrollOffset }) => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const toggleVisibility = () => {
        const scrollOffset = window.innerWidth >= 768 ? pcScrollOffset : mobileScrollOffset;
        if (window.pageYOffset > scrollOffset) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, [pcScrollOffset, mobileScrollOffset]);

    return (
        <div>
            {isVisible &&
                <button className="back-to-top" onClick={scrollToTop}>
                    <FaAngleUp style={{ marginBottom: '3px', marginLeft: '1px' }} />
                </button>
            }
        </div>
    );
};

export default ScrollToTopButton;
