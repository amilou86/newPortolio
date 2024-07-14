import './Hero.scss';
import profilePic from '../../Components/assets/profilePic.png';
import { motion } from 'framer-motion';
import WatermarkWrapper from './WatermarkWrapper'; // Assuming WatermarkWrapper is defined in './WatermarkWrapper'

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 3,
            staggerChildren: 0.1,
        },
    },
};

const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial='initial' animate='animate'>
                    <motion.h2 variants={textVariants}>AMI EDWARDS</motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer</motion.h1>
                    <motion.div className="buttons">
                        <motion.button variants={textVariants}>Latest Projects</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div className="slidingTextContainer" variants={textVariants} initial='initial' animate='animate'>
                <WatermarkWrapper />
            </motion.div>

            <div className="imageContainer">
                <div className="profilePicWrapper">
                    <img src={profilePic} alt="profile photo" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
