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
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>BNW-AV - Black and White Photography</title>
                <meta
                    name="description"
                    content="Discover the beauty of black and white photography with BNW-AV. Explore our stunning collection of monochrome images and immerse yourself in the timeless art of monochrome photography."
                />
                <meta
                    name="keywords"
                    content="black and white photography, monochrome, fine art photography, portrait photography, landscape photography"
                />
                <meta name="author" content="BNW-AV" />
                {/* Open Graph meta tags */}
                <meta property="og:title" content="BNW-AV - Black and White Photography" />
                <meta
                    property="og:description"
                    content="Discover the beauty of black and white photography with BNW-AV. Explore our stunning collection of monochrome images and immerse yourself in the timeless art of monochrome photography."
                />
                <meta property="og:image" content="https://www.bnw-av.com/og-image.jpg" />
                <meta property="og:url" content="https://www.bnw-av.com/" />
                <meta property="og:type" content="website" />
                {/* Twitter meta tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="BNW-AV - Black and White Photography" />
                <meta
                    name="twitter:description"
                    content="Discover the beauty of black and white photography with BNW-AV. Explore our stunning collection of monochrome images and immerse yourself in the timeless art of monochrome photography."
                />
                <meta
                    name="twitter:image"
                    content="https://www.bnw-av.com/twitter-image.jpg"
                />
                {/* Canonical URL */}
                <link rel="canonical" href="https://www.bnw-av.com/" />
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
