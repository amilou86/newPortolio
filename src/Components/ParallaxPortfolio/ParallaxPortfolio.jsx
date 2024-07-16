import './ParallaxPortfolio.scss';
import React from 'react';
import { motion } from 'framer-motion';

const ParallaxPortfolio = () => {
    const numDots = 200; // Adjust the number of rain dots

    const dots = Array.from({ length: numDots }).map((_, index) => {
        const colorClass = Math.random() > 0.66 ? 'blue' : Math.random() > 0.5 ? 'pink' : 'green';
        return (
            <motion.div
                key={index}
                className={`rain-dot ${colorClass}`}
                style={{
                    top: `${Math.random() * 100}%`, // Random starting position
                    left: `${Math.random() * 100}%`, // Random starting position
                    animation: `fall ${5 + Math.random() * 5}s ease-in-out infinite`, // Animation for falling
                }}
            />
        );
    });

    return (
        <div className="parallax-container">
            <motion.div className="white-background"></motion.div>
            {dots}
            <h1 className='story'>my work ...</h1>
        </div>
    );
};

export default ParallaxPortfolio;
