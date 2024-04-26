import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PhotoGalleryPage.css';
import { useSpring, animated } from 'react-spring';
import { SlArrowLeft } from "react-icons/sl";
import { Helmet } from 'react-helmet';
import ImagePage from './ImagePage';
import { motion } from "framer-motion";

const images = [
    { src: require('../images/5.webp'), title: 'BNWAV©_red-1.1', description: 'Description de l\'image 1' },
    { src: require('../images/45.webp'), title: 'BNWAV©_red-12.2', description: 'Description de l\'image 2' },
    { src: require('../images/2.webp'), title: 'BNWAV©_red-9.1', description: 'Description de l\'image 3' },
    { src: require('../images/6.webp'), title: 'BNWAV©_red-1.2', description: 'Description de l\'image 4' },
    { src: require('../images/8.webp'), title: 'BNWAV©_red-2.2', description: 'Description de l\'image 4' },
    { src: require('../images/9.webp'), title: 'BNWAV©_red-3.2', description: 'Description de l\'image 4' },
    { src: require('../images/15.webp'), title: 'BNWAV©_red-6.2', description: 'Description de l\'image 4' },
    { src: require('../images/12.webp'), title: 'BNWAV©_red-5.1', description: 'Description de l\'image 4' },
    { src: require('../images/1.webp'), title: 'BNWAV©_red-3.1', description: 'Description de l\'image 4' },
    { src: require('../images/18.webp'), title: 'BNWAV©_red-8.1', description: 'Description de l\'image 4' },
    { src: require('../images/16.webp'), title: 'BNWAV©_red-7.1', description: 'Description de l\'image 4' },
    { src: require('../images/13.webp'), title: 'BNWAV©_red-5.2', description: 'Description de l\'image 4' },
    { src: require('../images/17.webp'), title: 'BNWAV©_red-7.2', description: 'Description de l\'image 4' },
    { src: require('../images/14.webp'), title: 'BNWAV©_red-6.1', description: 'Description de l\'image 4' },
    { src: require('../images/19.webp'), title: 'BNWAV©_red-8.2', description: 'Description de l\'image 4' },
    { src: require('../images/4.webp'), title: 'BNWAV©_red-13.2', description: 'Description de l\'image 4' },
    { src: require('../images/28.webp'), title: 'BNWAV©_red-14.2', description: 'Description de l\'image 4' },
    { src: require('../images/10.webp'), title: 'BNWAV©_red-4.1', description: 'Description de l\'image 4' },
    { src: require('../images/31.webp'), title: 'BNWAV©_red-16.1', description: 'Description de l\'image 4' },
    { src: require('../images/20.webp'), title: 'BNWAV©_red-9.2', description: 'Description de l\'image 4' },
    { src: require('../images/26.webp'), title: 'BNWAV©_red-13.1', description: 'Description de l\'image 4' },
    { src: require('../images/36.webp'), title: 'BNWAV©_red-18.2', description: 'Description de l\'image 4' },
    { src: require('../images/23.webp'), title: 'BNWAV©_red-11.1', description: 'Description de l\'image 4' },
    { src: require('../images/42.webp'), title: 'BNWAV©_red-22.1', description: 'Description de l\'image 4' },
    { src: require('../images/25.webp'), title: 'BNWAV©_red-12.1', description: 'Description de l\'image 4' },
    { src: require('../images/39.webp'), title: 'BNWAV©_red-20.1', description: 'Description de l\'image 4' },
    { src: require('../images/29.webp'), title: 'BNWAV©_red-15.1', description: 'Description de l\'image 4' },
    { src: require('../images/22.webp'), title: 'BNWAV©_red-10.2', description: 'Description de l\'image 4' },
    { src: require('../images/34.webp'), title: 'BNWAV©_red-17.2', description: 'Description de l\'image 4' },
    { src: require('../images/40.webp'), title: 'BNWAV©_red-20.2', description: 'Description de l\'image 4' },
    { src: require('../images/30.webp'), title: 'BNWAV©_red-15.2', description: 'Description de l\'image 4' },
    { src: require('../images/32.webp'), title: 'BNWAV©_red-16.2', description: 'Description de l\'image 4' },
    { src: require('../images/33.webp'), title: 'BNWAV©_red-17.1', description: 'Description de l\'image 4' },
    { src: require('../images/35.webp'), title: 'BNWAV©_red-18.1', description: 'Description de l\'image 4' },
    { src: require('../images/37.webp'), title: 'BNWAV©_red-19.2', description: 'Description de l\'image 4' },
    { src: require('../images/7.webp'), title: 'BNWAV©_red-2.1', description: 'Description de l\'image 4' },
    { src: require('../images/11.webp'), title: 'BNWAV©_red-4.2', description: 'Description de l\'image 4' },
    { src: require('../images/38.webp'), title: 'BNWAV©_red-19.1', description: 'Description de l\'image 4' },
    { src: require('../images/21.webp'), title: 'BNWAV©_red-10.1', description: 'Description de l\'image 4' },
    { src: require('../images/24.webp'), title: 'BNWAV©_red-11.2', description: 'Description de l\'image 4' },
    { src: require('../images/46.webp'), title: 'BNWAV©_red-21.1', description: 'Description de l\'image 4' },
    { src: require('../images/27.webp'), title: 'BNWAV©_red-14.1', description: 'Description de l\'image 4' },
    { src: require('../images/47.webp'), title: 'BNWAV©_red-22.2', description: 'Description de l\'image 4' },
    { src: require('../images/48.webp'), title: 'BNWAV©_red-21.2', description: 'Description de l\'image 4' },
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
                <SlArrowLeft />
            </Link>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Black and White Photography Gallery - BNW-AV</title>
                <meta
                    name="description"
                    content="Explore our stunning gallery of black and white photography. From captivating portraits to breathtaking landscapes, immerse yourself in the timeless beauty of monochrome art."
                />
                <meta
                    name="keywords"
                    content="black and white photography gallery, monochrome photography, fine art photography, portrait photography, landscape photography"
                />
                <meta name="author" content="BNW-AV" />
                {/* Open Graph meta tags */}
                {/* ... */}
                {/* Twitter meta tags */}
                {/* ... */}
                {/* Canonical URL */}
                <link rel="canonical" href="https://www.bnw-av.com/photos" />
            </Helmet>
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
