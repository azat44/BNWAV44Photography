import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SlArrowLeft } from "react-icons/sl";
import { Helmet } from 'react-helmet';
import '../ImagePage.css';

const images = [
    { src: require('../images/5.webp'), title: 'BNWAV©_red-1.1', description: 'Don’t search yourself in others you will never find you.' },
    { src: require('../images/45.webp'), title: 'BNWAV©_red-12.2', description: 'One must still have chaos in oneself to be able to give birth to a dancing star.' },
    { src: require('../images/2.webp'), title: 'BNWAV©_red-9.1', description: 'The way is in the heart..' },
    { src: require('../images/6.webp'), title: 'BNWAV©_red-1.2', description: 'Is not life a thousand times too short for us to bore ourselves?' },
    { src: require('../images/8.webp'), title: 'BNWAV©_red-2.2', description: 'I do not want to wage war against what is ugly. I do not want to accuse; I do not even want to accuse those who accuse.' },
    { src: require('../images/9.webp'), title: 'BNWAV©_red-3.2', description: 'The higher we soar, the smaller we appear to those who cannot fly.' },
    { src: require('../images/15.webp'), title: 'BNWAV©_red-6.2', description: 'Without music, life would be a mistake.' },
    { src: require('../images/12.webp'), title: 'BNWAV©_red-5.1', description: 'He who has a why to live can bear almost any how.' },
    { src: require('../images/1.webp'), title: 'BNWAV©_red-3.1', description: 'There are no facts, only interpretations.' },
    { src: require('../images/18.webp'), title: 'BNWAV©_red-8.1', description: 'Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.' },
    { src: require('../images/16.webp'), title: 'BNWAV©_red-7.1', description: 'In heaven, all the interesting people are missing.' },
    { src: require('../images/13.webp'), title: 'BNWAV©_red-5.2', description: 'And those who were seen dancing were thought to be insane by those who could not hear the music.' },
    { src: require('../images/17.webp'), title: 'BNWAV©_red-7.2', description: 'Faith: not wanting to know what the truth is.' },
    { src: require('../images/14.webp'), title: 'BNWAV©_red-6.1', description: 'Every deep thinker is more afraid of being understood than of being misunderstood.' },
    { src: require('../images/19.webp'), title: 'BNWAV©_red-8.2', description: 'Todays truth is not for tomorrow.' },
    { src: require('../images/4.webp'), title: 'BNWAV©_red-13.2', description: 'Convictions are more dangerous enemies of truth than lies.' },
    { src: require('../images/28.webp'), title: 'BNWAV©_red-14.2', description: 'What we think, we become.' },
    { src: require('../images/10.webp'), title: 'BNWAV©_red-4.1', description: 'When you’re not like everyone else, you get hated.' },
    { src: require('../images/31.webp'), title: 'BNWAV©_red-16.1', description: 'You can’t become a sage by chance.' },
    { src: require('../images/20.webp'), title: 'BNWAV©_red-9.2', description: 'Never empty your soul entirely, for one day you will regret not having kept something for yourself.' },
    { src: require('../images/26.webp'), title: 'BNWAV©_red-13.1', description: 'You can promise to do actions in some years but not feelings. ' },
    { src: require('../images/36.webp'), title: 'BNWAV©_red-18.2', description: 'No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.' },
    { src: require('../images/23.webp'), title: 'BNWAV©_red-11.1', description: 'Keep the extent of your abilities unknown. ' },
    { src: require('../images/42.webp'), title: 'BNWAV©_red-22.1', description: 'Be self-sufficient so as not to need men. Be good so as not to be desired by no one.' },
    { src: require('../images/25.webp'), title: 'BNWAV©_red-12.1', description: 'The desire to dominate is the strongest of all passions.' },
    { src: require('../images/39.webp'), title: 'BNWAV©_red-20.1', description: 'People do not enjoy what they have, but what they desire.' },
    { src: require('../images/29.webp'), title: 'BNWAV©_red-15.1', description: 'Change is the only constant.' },
    { src: require('../images/22.webp'), title: 'BNWAV©_red-10.2', description: 'The root of suffering is attachment.' },
    { src: require('../images/34.webp'), title: 'BNWAV©_red-17.2', description: 'Peace comes from within. Do not seek it without.' },
    { src: require('../images/40.webp'), title: 'BNWAV©_red-20.2', description: 'Never compete with someone who has nothing to lose.' },
    { src: require('../images/30.webp'), title: 'BNWAV©_red-15.2', description: 'A wise man gets more use from his enemies than a fool from his friends.' },
    { src: require('../images/32.webp'), title: 'BNWAV©_red-16.2', description: 'Never open the door to a lesser evil, for other and greater ones invariably slink in after it.' },
    { src: require('../images/33.webp'), title: 'BNWAV©_red-17.1', description: 'Everything has beauty, but not everyone sees it.' },
    { src: require('../images/35.webp'), title: 'BNWAV©_red-18.1', description: 'It does not matter how slowly you go so long as you do not stop.' },
    { src: require('../images/37.webp'), title: 'BNWAV©_red-19.2', description: 'Sometimes people don’t want to hear the truth because they don’t want their illusions destroyed.' },
    { src: require('../images/7.webp'), title: 'BNWAV©_red-2.1', description: 'There is more wisdom in your body than in your deepest philosophy.' },
    { src: require('../images/11.webp'), title: 'BNWAV©_red-4.2', description: 'Thoughts are the shadows of our feelings-always darker, emptier and simpler.' },
    { src: require('../images/38.webp'), title: 'BNWAV©_red-19.1', description: 'The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently.' },
    { src: require('../images/21.webp'), title: 'BNWAV©_red-10.1', description: 'The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.' },
    { src: require('../images/24.webp'), title: 'BNWAV©_red-11.2', description: 'We have no need for other worlds. We need mirrors. We don’t know what to do with other worlds. A mirror is enough.' },
    { src: require('../images/46.webp'), title: 'BNWAV©_red-21.1', description: 'We have art in order not to die of the truth.' },
    { src: require('../images/27.webp'), title: 'BNWAV©_red-14.1', description: 'The doer alone learns.' },
    { src: require('../images/47.webp'), title: 'BNWAV©_red-22.2', description: 'Don’t rush anything. When the time is right, it’ll happen.' },
    { src: require('../images/48.webp'), title: 'BNWAV©_red-21.2', description: 'I’m not upset that you lied to me, I’m upset that from now on I can’t believe you.' },

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