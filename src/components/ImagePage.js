import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SlArrowLeft } from "react-icons/sl";
import { Helmet } from 'react-helmet';
import '../ImagePage.css';

const images = [
    { src: require('../images/5.webp'), title: 'Black and white - 1', description: 'Don’t search yourself in others you will never find you.' },
    { src: require('../images/3.webp'), title: 'Black and white - 2', description: 'One must still have chaos in oneself to be able to give birth to a dancing star.' },
    { src: require('../images/2.webp'), title: 'Black and white - 3', description: 'The way is in the heart..' },
    { src: require('../images/6.webp'), title: 'Black and white - 4', description: 'Is not life a thousand times too short for us to bore ourselves?' },
    { src: require('../images/8.webp'), title: 'Black and white - 5', description: 'I do not want to wage war against what is ugly. I do not want to accuse; I do not even want to accuse those who accuse.' },
    { src: require('../images/9.webp'), title: 'Black and white - 6', description: 'The higher we soar, the smaller we appear to those who cannot fly.' },
    { src: require('../images/15.webp'), title: 'Black and white - 7', description: 'Without music, life would be a mistake.' },
    { src: require('../images/12.webp'), title: 'Black and white - 8', description: 'He who has a why to live can bear almost any how.' },
    { src: require('../images/1.webp'), title: 'Black and white - 9', description: 'There are no facts, only interpretations.' },
    { src: require('../images/18.webp'), title: 'Black and white - 10', description: 'Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared' },
    { src: require('../images/16.webp'), title: 'Black and white - 11', description: 'In heaven, all the interesting people are missing.' },
    { src: require('../images/13.webp'), title: 'Black and white - 12', description: 'And those who were seen dancing were thought to be insane by those who could not hear the music.' },
    { src: require('../images/17.webp'), title: 'Black and white - 13', description: 'Faith: not wanting to know what the truth is.' },
    { src: require('../images/14.webp'), title: 'Black and white - 14', description: 'Every deep thinker is more afraid of being understood than of being misunderstood.' },
    { src: require('../images/19.webp'), title: 'Black and white - 15', description: 'Todays truth is not for tomorrow' },
    { src: require('../images/4.webp'), title: 'Black and white - 16', description: 'Convictions are more dangerous enemies of truth than lies' },
    { src: require('../images/28.webp'), title: 'Black and white - 17', description: 'What we think, we become' },
    { src: require('../images/10.webp'), title: 'Black and white - 18', description: 'When you’re not like everyone else, you get hated' },
    { src: require('../images/31.webp'), title: 'Black and white - 19', description: 'You can’t become a sage by chance.' },
    { src: require('../images/20.webp'), title: 'Black and white - 20', description: 'Never empty your soul entirely, for one day you will regret not having kept something for yourself.' },
    { src: require('../images/26.webp'), title: 'Black and white - 21', description: 'You can promise to do actions in some years but not feelings. ' },
    { src: require('../images/36.webp'), title: 'Black and white - 22', description: 'No one saves us but ourselves. No one can and no one may. We ourselves must walk the path' },
    { src: require('../images/23.webp'), title: 'Black and white - 23', description: 'Keep the extent of your abilities unknown. .' },
    { src: require('../images/42.webp'), title: 'Black and white - 24', description: 'Be self-sufficient so as not to need men. Be good so as not to be desired by no one' },
    { src: require('../images/25.webp'), title: 'Black and white - 25', description: 'The desire to dominate is the strongest of all passions.' },
    { src: require('../images/39.webp'), title: 'Black and white - 26', description: 'People do not enjoy what they have, but what they desire' },
    { src: require('../images/29.webp'), title: 'Black and white - 27', description: 'Change is the only constant' },
    { src: require('../images/22.webp'), title: 'Black and white - 28', description: 'The root of suffering is attachment' },
    { src: require('../images/34.webp'), title: 'Black and white - 29', description: 'Peace comes from within. Do not seek it without.' },
    { src: require('../images/40.webp'), title: 'Black and white - 30', description: 'Never compete with someone who has nothing to lose.' },
    { src: require('../images/30.webp'), title: 'Black and white - 31', description: 'A wise man gets more use from his enemies than a fool from his friends.' },
    { src: require('../images/32.webp'), title: 'Black and white - 32', description: 'Never open the door to a lesser evil, for other and greater ones invariably slink in after it.' },
    { src: require('../images/33.webp'), title: 'Black and white - 33', description: 'Everything has beauty, but not everyone sees it.' },
    { src: require('../images/35.webp'), title: 'Black and white - 34', description: 'It does not matter how slowly you go so long as you do not stop.' },
    { src: require('../images/37.webp'), title: 'Black and white - 35', description: 'Sometimes people don’t want to hear the truth because they don’t want their illusions destroyed.' },
    { src: require('../images/7.webp'), title: 'Black and white - 36', description: 'There is more wisdom in your body than in your deepest philosophy.' },
    { src: require('../images/11.webp'), title: 'Black and white - 37', description: 'Thoughts are the shadows of our feelings-always darker, emptier and simpler.' },
    { src: require('../images/38.webp'), title: 'Black and white - 38', description: 'The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently.' },
    { src: require('../images/21.webp'), title: 'Black and white - 39', description: 'The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.' },
    { src: require('../images/24.webp'), title: 'Black and white - 40', description: 'We have no need for other worlds. We need mirrors. We don’t know what to do with other worlds. A mirror is enough.' },
    { src: require('../images/41.webp'), title: 'Black and white - 41', description: 'We have art in order not to die of the truth.' },
    { src: require('../images/27.webp'), title: 'Black and white - 42', description: 'The doer alone learns.' },
    { src: require('../images/43.webp'), title: 'Black and white - 43', description: 'Don’t rush anything. When the time is right, it’ll happen.' },
    { src: require('../images/44.webp'), title: 'Black and white - 44', description: 'I’m not upset that you lied to me, I’m upset that from now on I can’t believe you.' },

];

const ImagePage = () => {
    const { id } = useParams();
    const [currentIndex, setCurrentIndex] = useState(parseInt(id));

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 37) { // Left arrow key
                navigatePrevious();
            } else if (event.keyCode === 39) { // Right arrow key
                navigateNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentIndex]);

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
            <Helmet>
                <meta name="title" content="Contact Black and White Photography | @bnw_av44" />
                <meta
                    name="description"
                    content="Get in touch with @bnw_av44 for inquiries, collaborations, or to discuss black and white photography. Reach out via email or social media."
                />
                <meta name="keywords" content="ContactPhotographer, BlackAndWhiteInquiries, Collaborate" />
            </Helmet>
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
                    >
                        &lt;
                    </Link>
                    <span className="image-index">{`${currentIndex + 1}/${images.length}`}</span>
                    <Link
                        to={`/image/${(currentIndex + 1) % images.length}`}
                        onClick={navigateNext}
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