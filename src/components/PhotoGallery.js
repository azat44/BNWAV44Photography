import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PhotoGalleryPage.css';
import { useSpring, animated } from 'react-spring';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from "framer-motion";

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

    const handleClick = (imageSrc) => {
        setFullscreenImage(imageSrc);
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
                <div className="photo-item-container">
                    <img
                        src={require('../images/2.jpg')}
                        alt="image1"
                        className="photo-item"
                        onClick={() => handleClick(require('../images/2.jpg'))}
                    />
                    <div className="photo-item-title">IMAGE 1222222222222</div>
                </div>
                <div className="photo-item-container">
                    <img
                        src={require('../images/3.jpg')}
                        alt="image2"
                        className="photo-item"
                        onClick={() => handleClick(require('../images/3.jpg'))}
                    />
                    <div className="photo-item-title">IMAGE 2222222</div>
                </div>
                <div className="photo-item-container">
                    <img
                        src={require('../images/7.jpg')}
                        alt="image2"
                        className="photo-item"
                        onClick={() => handleClick(require('../images/3.jpg'))}
                    />
                    <div className="photo-item-title">IMAGE 24234234234232</div>
                </div>
                <div className="photo-item-container">
                    <img
                        src={require('../images/2.jpg')}
                        alt="image2"
                        className="photo-item"
                        onClick={() => handleClick(require('../images/3.jpg'))}
                    />
                    <div className="photo-item-title">IMAGE 2</div>
                </div>
                <div className="photo-item-container">
                    <img
                        src={require('../images/4.jpg')}
                        alt="image2"
                        className="photo-item"
                        onClick={() => handleClick(require('../images/3.jpg'))}
                    />
                    <div className="photo-item-title">IMAGE 2</div>
                </div>
                <div className="photo-item-container">
                    <img
                        src={require('../images/6.jpg')}
                        alt="image2"
                        className="photo-item"
                        onClick={() => handleClick(require('../images/3.jpg'))}
                    />
                    <div className="photo-item-title">IMAGE 2</div>
                </div>
                <div className="photo-item-container">
                    <img
                        src={require('../images/4.jpg')}
                        alt="image2"
                        className="photo-item"
                        onClick={() => handleClick(require('../images/3.jpg'))}
                    />
                    <div className="photo-item-title">IMAGE 2</div>
                </div>
                <div className="photo-item-container">
                    <img
                        src={require('../images/1.jpg')}
                        alt="image2"
                        className="photo-item"
                        onClick={() => handleClick(require('../images/3.jpg'))}
                    />
                    <div className="photo-item-title">IMAGE 2</div>
                </div>
                <div className="photo-item-container">
                    <img
                        src={require('../images/2.jpg')}
                        alt="image2"
                        className="photo-item"
                        onClick={() => handleClick(require('../images/3.jpg'))}
                    />
                    <div className="photo-item-title">IMAGE 2</div>
                </div>
                <div className="photo-item-container">
                    <img
                        src={require('../images/6.jpg')}
                        alt="image2"
                        className="photo-item"
                        onClick={() => handleClick(require('../images/3.jpg'))}
                    />
                    <div className="photo-item-title">IMAGE 2</div>
                </div>
                <div className="photo-item-container">
                    <img
                        src={require('../images/7.jpg')}
                        alt="image2"
                        className="photo-item"
                        onClick={() => handleClick(require('../images/3.jpg'))}
                    />
                    <div className="photo-item-title">IMAGE 2</div>
                </div>
                <div className="photo-item-container">
                    <img
                        src={require('../images/4.jpg')}
                        alt="image2"
                        className="photo-item"
                        onClick={() => handleClick(require('../images/3.jpg'))}
                    />
                    <div className="photo-item-title">IMAGE 2</div>
                </div>
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
