import './Hero.scss'
import profilePic from '../../Components/assets/profilePic.png'
import { motion } from 'framer-motion'
import { PiMouseScrollThin } from 'react-icons/pi';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollIcon: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        },
    },
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants}
                    initial='initial'
                    animate='animate'>
                    <motion.h2 variants={textVariants}>AMI EDWARDS</motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer</motion.h1>
                    <motion.div className="buttons">
                        <motion.button variants={textVariants}>Latest Projects</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                        <motion.div
                            className="scrollIcon"
                            variants={textVariants}
                            animate='scrollIcon'
                        >
                            <PiMouseScrollThin />
                        </motion.div>
                    </motion.div>

                </motion.div>
            </div >
            <motion.div className="slidingTextContainer"
                variants={sliderVariants}
                initial='initial'
                animate='animate'>
                Dev - Designer - Ally -
            </motion.div>
            <div className="imageContainer">
                <img src={profilePic} alt="profile photo" />
            </div>
        </div>

    )
}

export default Hero;