import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './Header.css';

const Header = () => {
    const [isDoorOpen, setIsDoorOpen] = useState(false);
    const navigate = useNavigate();

    const handleLetterAnimationEnd = (event) => {
        if (event.target.textContent === "4") {
            setIsDoorOpen(true);
            setTimeout(() => {
                navigate('/menus');
            }, 1000);
        }
    };

    useEffect(() => {
        return () => {
            setIsDoorOpen(false);
        };
    }, []);

    return (

        <div className={`fixed inset-0 flex items-center justify-center text-center bg-black text-white text-3xl font-bold ${isDoorOpen ? 'door-open' : ''}`}>
            <Helmet>
                <meta name="title" content="Black and White Photography | @bnw_av44" />
                <meta
                    name="description"
                    content="Explore stunning black and white photography by @bnw_av44. Discover captivating monochrome images, artistic compositions, and timeless moments."
                />
                <meta name="keywords" content="BlackAndWhitePhotography, BlackAndWhite, BlackAndWhitePhoto" />
            </Helmet>
            <span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-1">B</span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-2">N</span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-3">W</span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-4">_</span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-5">A</span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-6">V</span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-7">4</span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-8">4 </span>

            </span>
        </div>
    );
};

export default Header;
