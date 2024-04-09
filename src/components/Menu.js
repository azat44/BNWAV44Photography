import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { animated, useTrail } from 'react-spring';
import { motion } from "framer-motion";

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
                                whileHover={{ y: -15 }} // Ajustement du déplacement de l'animation
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                style={{ color: index === hoveredIndex ? 'rgba(0, 0, 0, 0.8x)' : 'black' }} // Utilisation de rgba pour réduire l'opacité
                            >
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
