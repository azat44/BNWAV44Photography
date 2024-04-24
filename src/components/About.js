import React, { useEffect } from 'react';
import { animated, useTrail } from 'react-spring';
import { Link } from 'react-router-dom';
import { SlArrowLeft } from "react-icons/sl";
import { Helmet } from 'react-helmet';

const About = () => {
    const textItems = [
        "Welcome to the Black and White Photography @bnw_av44 website, which is dedicated to black and white photography, shadows, and architecture.",
        "I wish you could see the colors between illumination and darkness.",
        "Like black-and-white colors, our lives are composed of contrasted phases, and we value our lives when we realize that true happiness is when we don’t suffer.",
        "Each of my photos has its own story, and I have added a quote to each of them.",
        "Take the time to discover my <a href='https://www.instagram.com/bnw_av44/' target='_blank' rel='noopener noreferrer' style='color: white; text-decoration: underline; transition: color 0.3s;'>instagram page</a>."
    ];

    const trail = useTrail(textItems.length, {
        from: { opacity: 0, transform: 'translateY(100px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { tension: 400, friction: 100 },
    });

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-black">
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>About BNW-AV - Black and White Photography</title>
                <meta
                    name="description"
                    content="Learn more about BNW-AV, a passionate team of black and white photography artists dedicated to capturing the world's beauty through the lens of monochrome."
                />
                <meta
                    name="keywords"
                    content="about black and white photography, monochrome photography, fine art photography, portrait photography, landscape photography"
                />
                <meta name="author" content="BNW-AV" />
                {/* Open Graph meta tags */}
                {/* ... */}
                {/* Twitter meta tags */}
                {/* ... */}
                {/* Canonical URL */}
                <link rel="canonical" href="https://www.bnw-av.com/about" />
            </Helmet>
            <Link
                to="/menus"
                className="back-button hover:bg-gray-300 hover:text-gray-800 rounded-md p-2"
                style={{ transition: 'all 0.6s ease' }}>
                <SlArrowLeft />
            </Link>

            {trail.map((style, index) => (
                <animated.div key={index} style={style} className="text-white text-center text-lg mb-6" dangerouslySetInnerHTML={{ __html: textItems[index] }}>
                </animated.div>
            ))}
        </div>
    );
};

export default About;
