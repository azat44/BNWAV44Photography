import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SlArrowLeft } from "react-icons/sl";

import '../ImagePage.css';

const images = [
    { src: require('../images/1.jpg'), title: 'Gate to the world', description: 'This impressive staircase belongs to the underground station Überseequartier in the middle of Hambrg Hafencity - Europes largest inner-city urban development project.' },
    {
        src: require('../images/2.jpg'), title: 'Memorial st Nikolai', description: 'The Elbe promenade connects the Hamburg Landungsbrücken with the historic Speicherstadt. It serves as a dike for flood protection and its modern architecture offers countless perspectives for the photographer.'
    },
    { src: require('../images/3.jpg'), title: 'Kibbelsteg Bridge', description: 'The Burchardkai container terminal is the largest terminal in the Port of Hamburg. It is located on a 1.4 square kilometer area on the former Waltershof island in the Elbe River. It is a wonderful spot even when no containers are being loaded.' },
    { src: require('../images/4.jpg'), title: 'IElbphilharmonie', description: 'The Stadthöfe have an eventful history from the French years of Hamburg when Napoleon commandeered the buildings in 1811 to establish the town hall in them, the use by the secret state police during the war, as well as the accommodation of the municipal administration.' },
    { src: require('../images/2.jpg'), title: 'Image 5', description: 'Even if street and architectural photography on the island of Sylt are only possible to a limited extent,e to time. ' },
    { src: require('../images/3.jpg'), title: 'Image 6', description: 'Even if street and architectural photography on the island of Sylt are only possible to a limited extent, unexpected fantastic scenes are offered from time to time.' },
    { src: require('../images/4.jpg'), title: 'Image 7', description: 'Even if street and architectural photography on the island of Sylt are only possible to a limited extent, unexpected fantastic scenes are offered from time to time.' },
    { src: require('../images/6.jpg'), title: 'Image 8', description: 'The Stadthöfe have an eventful history from the French years of Hamburg when Napoleon commandeered the buildings in 1811 to establish the town hall in them, the use by the secret state police during the war, as well as the accommodation of the municipal administration.' },
    { src: require('../images/7.jpg'), title: 'Image 9', description: 'The Stadthöfe have an eventful history from the French years of Hamburg when Napoleon commandeered the buildings in 1811 to establish the town hall in them, the use by the secret state police during the war, as well as the accommodation of the municipal administration.' },
    { src: require('../images/1.jpg'), title: 'Image 10', description: 'The Stadthöfe have an eventful history from the French years of Hamburg when Napoleon commandeered the buildings in 1811 to establish the town hall in them, the use by the secret state police during the war, as well as the accommodation of the municipal administration.' },
    { src: require('../images/2.jpg'), title: 'Image 11', description: 'This impressive staircase belongs to the underground station Überseequartier in the middle of Hambrg Hafencity - Europes largest inner-city urban development project.' },
    { src: require('../images/3.jpg'), title: 'Image 12', description: 'This impressive staircase belongs to the underground station Überseequartier in the middle of Hambrg Hafencity - Europes largest inner-city urban development project.' },
    { src: require('../images/4.jpg'), title: 'Image 13', description: 'This impressive staircase belongs to the underground station Überseequartier in the middle of Hambrg Hafencity - Europes largest inner-city urban development project.' },
    { src: require('../images/6.jpg'), title: 'Image 14', description: 'This impressive staircase belongs to the underground station Überseequartier in the middle of Hambrg Hafencity - Europes largest inner-city urban development project.' },
    { src: require('../images/7.jpg'), title: 'Image 15', description: 'The Burchardkai container terminal is the largest terminal in the Port of Hamburg. It is located on a 1.4 square kilometer area on the former Waltershof island in the Elbe River. It is a wonderful spot even when no containers are being loaded.' },
    { src: require('../images/1.jpg'), title: 'Image 16', description: 'The Burchardkai container terminal is the largest terminal in the Port of Hamburg. It is located on a 1.4 square kilometer area on the former Waltershof island in the Elbe River. It is a wonderful spot even when no containers are being loaded.' },
    { src: require('../images/4.jpg'), title: 'Image 17', description: 'The Burchardkai container terminal is the largest terminal in the Port of Hamburg. It is located on a 1.4 square kilometer area on the former Waltershof island in the Elbe River. It is a wonderful spot even when no containers are being loaded.' },
    { src: require('../images/6.jpg'), title: 'Image 18', description: 'The Burchardkai container terminal is the largest terminal in the Port of Hamburg. It is located on a 1.4 square kilometer area on the former Waltershof island in the Elbe River. It is a wonderful spot even when no containers are being loaded.' },
    { src: require('../images/7.jpg'), title: 'Image 19', description: 'The Stadthöfe have an eventful history from the French years of Hamburg when Napoleon commandeered the buildings in 1811 to establish the town hall in them, the use by the secret state police during the war, as well as the accommodation of the municipal administration.' },
    { src: require('../images/4.jpg'), title: 'Image 20', description: 'The Stadthöfe have an eventful history from the French years of Hamburg when Napoleon commandeered the buildings in 1811 to establish the town hall in them, the use by the secret state police during the war, as well as the accommodation of the municipal administration.' },
    { src: require('../images/6.jpg'), title: 'Image 21', description: 'The Stadthöfe have an eventful history from the French years of Hamburg when Napoleon commandeered the buildings in 1811 to establish the town hall in them, the use by the secret state police during the war, as well as the accommodation of the municipal administration.' },
    { src: require('../images/7.jpg'), title: 'Image 22', description: 'The Stadthöfe have an eventful history from the French years of Hamburg when Napoleon commandeered the buildings in 1811 to establish the town hall in them, the use by the secret state police during the war, as well as the accommodation of the municipal administration.' },
    { src: require('../images/4.jpg'), title: 'Image 23', description: 'The Stadthöfe have an eventful history from the French years of Hamburg when Napoleon commandeered the buildings in 1811 to establish the town hall in them, the use by the secret state police during the war, as well as the accommodation of the municipal administration.' },
    { src: require('../images/6.jpg'), title: 'Image 24', description: 'The Stadthöfe have an eventful history from the French years of Hamburg when Napoleon commandeered the buildings in 1811 to establish the town hall in them, the use by the secret state police during the war, as well as the accommodation of the municipal administration.' },
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
                <SlArrowLeft />
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