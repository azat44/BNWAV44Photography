import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import '../ImagePage.css';

const images = [
    { src: require('../images/1.jpg'), title: 'Image 1', description: 'DESCRIPTION' },
    { src: require('../images/2.jpg'), title: 'Image 2', description: 'DESCRIPTION' },
    { src: require('../images/3.jpg'), title: 'Image 3', description: 'DESCRIPTION' },
    { src: require('../images/4.jpg'), title: 'Image 4', description: 'DESCRIPTION' },
    { src: require('../images/2.jpg'), title: 'Image 5', description: 'DESCRIPTION' },
    { src: require('../images/3.jpg'), title: 'Image 6', description: 'DESCRIPTION' },
    { src: require('../images/4.jpg'), title: 'Image 7', description: 'DESCRIPTION' },
    { src: require('../images/6.jpg'), title: 'Image 8', description: 'DESCRIPTION' },
    { src: require('../images/7.jpg'), title: 'Image 9', description: 'DESCRIPTION' },
    { src: require('../images/1.jpg'), title: 'Image 10', description: 'DESCRIPTION' },
    { src: require('../images/2.jpg'), title: 'Image 11', description: 'DESCRIPTION' },
    { src: require('../images/3.jpg'), title: 'Image 12', description: 'DESCRIPTION' },
    { src: require('../images/4.jpg'), title: 'Image 13', description: 'DESCRIPTION' },
    { src: require('../images/6.jpg'), title: 'Image 14', description: 'DESCRIPTION' },
    { src: require('../images/7.jpg'), title: 'Image 15', description: 'DESCRIPTION' },
    { src: require('../images/1.jpg'), title: 'Image 16', description: 'DESCRIPTION' },
    { src: require('../images/4.jpg'), title: 'Image 17', description: 'DESCRIPTION' },
    { src: require('../images/6.jpg'), title: 'Image 18', description: 'DESCRIPTION' },
    { src: require('../images/7.jpg'), title: 'Image 19', description: 'DESCRIPTION' },
    { src: require('../images/4.jpg'), title: 'Image 20', description: 'DESCRIPTION' },
    { src: require('../images/6.jpg'), title: 'Image 21', description: 'DESCRIPTION' },
    { src: require('../images/7.jpg'), title: 'Image 22', description: 'DESCRIPTION' },
    { src: require('../images/4.jpg'), title: 'Image 23', description: 'DESCRIPTION' },
    { src: require('../images/6.jpg'), title: 'Image 24', description: 'DESCRIPTION' },
];

const ImagePage = () => {
    const { id } = useParams();
    const [currentIndex, setCurrentIndex] = useState(parseInt(id));

    const navigateNext = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
    };

    const navigatePrevious = () => {
        const previousIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(previousIndex);
    };

    const image = images[currentIndex];

    return (
        <div className="image-page-container">
            <Link
                to="/photo-gallery"
                className="back-button hover:bg-gray-300 hover:text-gray-800 rounded-md p-2"
                style={{ transition: 'all 0.6s ease' }}>
                <FaArrowLeft />
            </Link>
            <div className="image-content">
                <img src={image.src} alt={image.title} className="image" />
                <div className="navigation">
                    <Link
                        to={`/image/${(currentIndex - 1 + images.length) % images.length}`}
                        onClick={navigatePrevious}
                        className="navigation-link"
                    >
                        &lt;
                    </Link>
                    <span className="image-index">{`${currentIndex + 1}/${images.length}`}</span>
                    <Link
                        to={`/image/${(currentIndex + 1) % images.length}`}
                        onClick={navigateNext}
                        className="navigation-link"
                    >
                        &gt;
                    </Link>
                </div>
                <div className="image-details">
                    <h2 className="image-title">{image.title}</h2>
                    <p className="image-description">{image.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ImagePage;