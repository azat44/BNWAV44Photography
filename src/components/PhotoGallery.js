import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PhotoGalleryPage.css';
import { useSpring, animated } from 'react-spring';
import { SlArrowLeft } from "react-icons/sl";
import { Helmet } from 'react-helmet';
import ImagePage from './ImagePage';
import { motion } from "framer-motion";

const images = [
    { src: require('../images/5.webp'), title: 'Black and white - 1', description: 'Description de l\'image 1' },
    { src: require('../images/3.webp'), title: 'Black and white - 2', description: 'Description de l\'image 2' },
    { src: require('../images/2.webp'), title: 'Black and white - 3', description: 'Description de l\'image 3' },
    { src: require('../images/6.webp'), title: 'Black and white - 4', description: 'Description de l\'image 4' },
    { src: require('../images/8.webp'), title: 'Black and white - 5', description: 'Description de l\'image 4' },
    { src: require('../images/9.webp'), title: 'Black and white - 6', description: 'Description de l\'image 4' },
    { src: require('../images/15.webp'), title: 'Black and white - 7', description: 'Description de l\'image 4' },
    { src: require('../images/12.webp'), title: 'Black and white - 8', description: 'Description de l\'image 4' },
    { src: require('../images/1.webp'), title: 'Black and white - 9', description: 'Description de l\'image 4' },
    { src: require('../images/18.webp'), title: 'Black and white - 10', description: 'Description de l\'image 4' },
    { src: require('../images/16.webp'), title: 'Black and white - 11', description: 'Description de l\'image 4' },
    { src: require('../images/13.webp'), title: 'Black and white - 12', description: 'Description de l\'image 4' },
    { src: require('../images/17.webp'), title: 'Black and white - 13', description: 'Description de l\'image 4' },
    { src: require('../images/14.webp'), title: 'Black and white - 14', description: 'Description de l\'image 4' },
    { src: require('../images/19.webp'), title: 'Black and white - 15', description: 'Description de l\'image 4' },
    { src: require('../images/4.webp'), title: 'Black and white - 16', description: 'Description de l\'image 4' },
    { src: require('../images/28.webp'), title: 'Black and white - 17', description: 'Description de l\'image 4' },
    { src: require('../images/10.webp'), title: 'Black and white - 18', description: 'Description de l\'image 4' },
    { src: require('../images/31.webp'), title: 'Black and white - 19', description: 'Description de l\'image 4' },
    { src: require('../images/20.webp'), title: 'Black and white - 20', description: 'Description de l\'image 4' },
    { src: require('../images/26.webp'), title: 'Black and white - 21', description: 'Description de l\'image 4' },
    { src: require('../images/36.webp'), title: 'Black and white - 22', description: 'Description de l\'image 4' },
    { src: require('../images/23.webp'), title: 'Black and white - 23', description: 'Description de l\'image 4' },
    { src: require('../images/42.webp'), title: 'Black and white - 24', description: 'Description de l\'image 4' },
    { src: require('../images/25.webp'), title: 'Black and white - 25', description: 'Description de l\'image 4' },
    { src: require('../images/39.webp'), title: 'Black and white - 26', description: 'Description de l\'image 4' },
    { src: require('../images/29.webp'), title: 'Black and white - 27', description: 'Description de l\'image 4' },
    { src: require('../images/22.webp'), title: 'Black and white - 28', description: 'Description de l\'image 4' },
    { src: require('../images/34.webp'), title: 'Black and white - 29', description: 'Description de l\'image 4' },
    { src: require('../images/40.webp'), title: 'Black and white - 30', description: 'Description de l\'image 4' },
    { src: require('../images/30.webp'), title: 'Black and white - 31', description: 'Description de l\'image 4' },
    { src: require('../images/32.webp'), title: 'Black and white - 32', description: 'Description de l\'image 4' },
    { src: require('../images/33.webp'), title: 'Black and white - 33', description: 'Description de l\'image 4' },
    { src: require('../images/35.webp'), title: 'Black and white - 34', description: 'Description de l\'image 4' },
    { src: require('../images/37.webp'), title: 'Black and white - 35', description: 'Description de l\'image 4' },
    { src: require('../images/7.webp'), title: 'Black and white - 36', description: 'Description de l\'image 4' },
    { src: require('../images/11.webp'), title: 'Black and white - 37', description: 'Description de l\'image 4' },
    { src: require('../images/38.webp'), title: 'Black and white - 38', description: 'Description de l\'image 4' },
    { src: require('../images/21.webp'), title: 'Black and white - 39', description: 'Description de l\'image 4' },
    { src: require('../images/24.webp'), title: 'Black and white - 40', description: 'Description de l\'image 4' },
    { src: require('../images/41.webp'), title: 'Black and white - 41', description: 'Description de l\'image 4' },
    { src: require('../images/27.webp'), title: 'Black and white - 42', description: 'Description de l\'image 4' },
    { src: require('../images/43.webp'), title: 'Black and white - 43', description: 'Description de l\'image 4' },
    { src: require('../images/44.webp'), title: 'Black and white - 44', description: 'Description de l\'image 4' },
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
            <Helmet>


                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Contact BNW-AV - Black and White Photography</title>
                <meta
                    name="description"
                    content="Get in touch with BNW-AV for inquiries, commissions, or collaborations. Our team of black and white photography experts is ready to assist you."
                />
                <meta
                    name="keywords"
                    content="contact black and white photography, monochrome photography, fine art photography, portrait photography, landscape photography"
                />
                <meta name="author" content="BNW-AV" />
                {/* Open Graph meta tags */}
                {/* ... */}
                {/* Twitter meta tags */}
                {/* ... */}
                {/* Canonical URL */}
                {/* Canonical URL */}
                <link rel="canonical" href="https://www.bnw-av.com/photos" />
            </Helmet>
            <Link
                to="/menus"
                className="back-button hover:bg-gray-300 hover:text-gray-800 rounded-md p-2"
                style={{ transition: 'all 0.6s ease' }}>
                <SlArrowLeft />
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
