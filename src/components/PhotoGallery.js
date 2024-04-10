import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PhotoGalleryPage.css';
import { useSpring, animated } from 'react-spring';
import { FaArrowLeft } from 'react-icons/fa';
import ImagePage from './ImagePage';
import { motion } from "framer-motion";

const images = [
    { src: require('../images/1.jpg'), title: 'Image 1', description: 'Description de l\'image 1' },
    { src: require('../images/2.jpg'), title: 'Image 2', description: 'Description de l\'image 2' },
    { src: require('../images/3.jpg'), title: 'Image 3', description: 'Description de l\'image 3' },
    { src: require('../images/4.jpg'), title: 'Image 4', description: 'Description de l\'image 4' },
    { src: require('../images/1.jpg'), title: 'Image 1', description: 'Description de l\'image 1' },
    { src: require('../images/2.jpg'), title: 'Image 2', description: 'Description de l\'image 2' },
    { src: require('../images/3.jpg'), title: 'Image 3', description: 'Description de l\'image 3' },
    { src: require('../images/4.jpg'), title: 'Image 4', description: 'Description de l\'image 4' },
    { src: require('../images/1.jpg'), title: 'Image 1', description: 'Description de l\'image 1' },
    { src: require('../images/2.jpg'), title: 'Image 2', description: 'Description de l\'image 2' },
    { src: require('../images/3.jpg'), title: 'Image 3', description: 'Description de l\'image 3' },
    { src: require('../images/4.jpg'), title: 'Image 4', description: 'Description de l\'image 4' },
    { src: require('../images/1.jpg'), title: 'Image 1', description: 'Description de l\'image 1' },
    { src: require('../images/2.jpg'), title: 'Image 2', description: 'Description de l\'image 2' },
    { src: require('../images/3.jpg'), title: 'Image 3', description: 'Description de l\'image 3' },
    { src: require('../images/4.jpg'), title: 'Image 4', description: 'Description de l\'image 4' },
    { src: require('../images/1.jpg'), title: 'Image 1', description: 'Description de l\'image 1' },
    { src: require('../images/2.jpg'), title: 'Image 2', description: 'Description de l\'image 2' },
    { src: require('../images/3.jpg'), title: 'Image 3', description: 'Description de l\'image 3' },
    { src: require('../images/4.jpg'), title: 'Image 4', description: 'Description de l\'image 4' },
    { src: require('../images/1.jpg'), title: 'Image 1', description: 'Description de l\'image 1' },
    { src: require('../images/2.jpg'), title: 'Image 2', description: 'Description de l\'image 2' },
    { src: require('../images/3.jpg'), title: 'Image 3', description: 'Description de l\'image 3' },
    { src: require('../images/4.jpg'), title: 'Image 4', description: 'Description de l\'image 4' },
    // Ajoutez d'autres images ici selon vos besoins
];

const PhotoGalleryPage = () => {
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1800 },
    });

    const bounce = useSpring({
        transform: fullscreenImage ? 'scale(1)' : 'scale(0.8)',
        config: { tension: 20, friction: 4 },
    });

    const handleClick = (imageIndex) => {
        setFullscreenImage(images[imageIndex].src);
    };

    const handleCloseFullscreen = () => {
        setFullscreenImage(null);
    };

    return (
        <div className="flex justify-center items-center bg-black">
            <Link
                to="/menus"
                className="back-button hover:bg-gray-300 hover:text-gray-800 rounded-md p-2"
                style={{ transition: 'all 0.6s ease' }}>
                <FaArrowLeft />
            </Link>
            <animated.div style={fadeIn} className="photo-grid">
                {images.map((image, index) => (
                    <div className="photo-item-container" key={index}>
                        <Link to={`/image/${index}`}>
                            <img
                                src={image.src}
                                alt={`image${index + 1}`}
                                className="photo-item"
                                onClick={() => handleClick(index)}
                            />
                        </Link>
                        <div className="photo-item-title">{image.title}</div>
                    </div>
                ))}
            </animated.div>
            {fullscreenImage && (
                <div className="fullscreen-container" onClick={handleCloseFullscreen}>
                    <animated.img
                        src={fullscreenImage}
                        alt="fullscreen"
                        className="fullscreen-image"
                        style={bounce}
                    />
                </div>
            )}
        </div>
    );
};

export default PhotoGalleryPage;
