import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isDoorOpen, setIsDoorOpen] = useState(false);
    const navigate = useNavigate();

    const handleLetterAnimationEnd = (event) => {
        if (event.target.textContent === "Y") {
            setIsDoorOpen(true);
            setTimeout(() => {
                navigate('/menus');
            }, 1000);
        }
    };

    useEffect(() => {
        return () => {
            setIsDoorOpen(false);
        };
    }, []);

    return (
        <div className={`fixed inset-0 flex items-center justify-center text-center bg-black text-white text-3xl font-bold ${isDoorOpen ? 'door-open' : ''}`}>
            <span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-1">W</span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-2">E</span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-3">L</span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-4">C</span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-5">O</span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-6">M</span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-7">E </span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-8">T</span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-9">O </span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-10">M</span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-11">Y </span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-12">G</span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-13">A</span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-14">L</span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-15">L</span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-16">E</span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-17">R</span>
                <span onAnimationEnd={handleLetterAnimationEnd} className="animation-delay-18">Y</span>
            </span>
        </div>
    );
};

export default Header;
