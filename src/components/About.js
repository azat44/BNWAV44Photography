import React, { useEffect } from 'react';
import { animated, useTrail } from 'react-spring';
import { Link } from 'react-router-dom';
import { SlArrowLeft } from "react-icons/sl";

const About = () => {
    const textItems = [
        'hey there! my name is Andranik, and i have been passionate about photography for nearly a decade now.',
        <p>
            my Instagram <a href="https://www.instagram.com/bnw_av44/" className="hover:text-gray-300">
                <span style={{ textDecoration: 'underline' }}>account</span>
            </a> has become my playground where i share my creations with the world.
        </p>


    ];

    const trail = useTrail(textItems.length, {
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        delay: 500,
    });

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-black">
            <Link
                to="/menus"
                className="back-button hover:bg-gray-300 hover:text-gray-800 rounded-md p-2"
                style={{ transition: 'all 0.6s ease' }}>
                <SlArrowLeft />
            </Link>

            {trail.map((style, index) => (

                <animated.div key={index} style={style} className="text-white text-center text-lg mb-6">

                    {textItems[index]}
                </animated.div>
            ))}
        </div>
    );
};

export default About;
