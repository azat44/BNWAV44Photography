import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { animated, useTrail } from 'react-spring';
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import { SlArrowLeft } from "react-icons/sl";

const MenusPage = () => {
    const items = ['Photos', 'About', 'Contact'];

    const trail = useTrail(items.length, {
        from: { opacity: 0, y: -20 },
        to: { opacity: 1, y: 0 },
        config: { mass: 1, tension: 100, friction: 10 },
    });

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="flex items-center bg-white justify-center text-6xl font-bold h-screen">
            <Helmet>
                <meta name="title" content="About Black and White Photography | @bnw_av44" />
                <meta
                    name="description"
                    content="Learn about the art of black and white photography with insights from @bnw_av44. Discover techniques, history, and the beauty of monochrome imagery."
                />
                <meta name="keywords" content="BlackAndWhitePhotography, AboutPhotography, MonochromeArt" />
            </Helmet>
            <Link
                to="/"
                className="back-button bg-black text-gray-300 rounded-md p-2 transition duration-300 ease-in-out hover:bg-gray-300 hover:text-gray-800"
                style={{ transition: 'all 0.6s ease' }}
            >
                <SlArrowLeft />
            </Link>
            <ul className="text-black">
                {trail.map((props, index) => (
                    <animated.li
                        key={index}
                        className="mb-4"
                        style={{ ...props }}
                    >
                        <Link
                            to={index === 0 ? '/photo-gallery' : `/${items[index].toLowerCase()}`}
                        >
                            <motion.div
                                whileHover={{ y: -15 }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                style={{ color: index === hoveredIndex ? 'rgba(0, 0, 0, 0.8x)' : 'black' }}>
                                {items[index]}
                            </motion.div>
                        </Link>
                    </animated.li>
                ))}
            </ul>
        </div>
    );
};

export default MenusPage;
