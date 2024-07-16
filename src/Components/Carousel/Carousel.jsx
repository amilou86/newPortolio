import React, { useState, useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import HRD2 from '../assets/HRD2.png';
import roama from '../assets/roama.png';
import calevent from '../assets/calevent.jpeg';

const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
    sm: 640,
    lg: 1024,
};

const items = [
    {
        id: 1,
        url: HRD2,
        category: "React.js",
        title: "Dental Practice",
        description:
            "Full website for a dental practice, built with React.js. Submit an application form to register as a patient, explore services offered, meet the team and read patient testimonials.",
        deploymentLink: "https://marvelous-alfajores-6e8bac.netlify.app/",
        githubLink: "https://github.com/amilou86/Dentist"
    },
    {
        id: 2,
        url: roama,
        category: "Collab",
        title: "Roama",
        description:
            "Create an account and explore our travel themed social media app. This was my second group collaboration project. Search friends, view and create your own posts.",
        deploymentLink: "https://main--roama.netlify.app/",
        githubLink: "https://github.com/amilou86/Roama.git"
    },
    {
        id: 3,
        url: calevent,
        category: "Monitors",
        title: "CalEvent",
        description:
            "First group collaboration project. Event search, fetch and suggestion app, built with JavaScript and server APIs.",
        deploymentLink: "https://abdalla-diaai.github.io/calevent/",
        githubLink: "https://github.com/abdalla-diaai/calevent.git"
    }
];

const CardCarousel = () => {
    const [width, setWidth] = useState(0);
    const [offset, setOffset] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                setWidth(ref.current.offsetWidth);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const CARD_BUFFER =
        width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

    const CAN_SHIFT_LEFT = offset < 0;

    const CAN_SHIFT_RIGHT =
        Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

    const shiftLeft = () => {
        if (!CAN_SHIFT_LEFT) {
            return;
        }
        setOffset((pv) => (pv += CARD_SIZE));
    };

    const shiftRight = () => {
        if (!CAN_SHIFT_RIGHT) {
            return;
        }
        setOffset((pv) => (pv -= CARD_SIZE));
    };

    return (
        <section className="bg-slate-100" ref={ref}>
            <div className="relative overflow-hidden p-4">
                {/* CARDS */}
                <div className="mx-auto max-w-6xl">
                    <p className="mb-4 text-2xl font-semibold">
                        MY WORK. <span className="text-slate-500">Click to view ....</span>
                    </p>
                    <motion.div
                        animate={{
                            x: offset,
                        }}
                        className="flex"
                    >
                        {items.map((item) => {
                            return <Card key={item.id} {...item} />;
                        })}
                    </motion.div>
                </div>

                {/* BUTTONS */}
                <>
                    <motion.button
                        initial={false}
                        animate={{
                            x: CAN_SHIFT_LEFT ? "0%" : "-100%",
                        }}
                        className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
                        onClick={shiftLeft}
                    >
                        <FiChevronLeft />
                    </motion.button>
                    <motion.button
                        initial={false}
                        animate={{
                            x: CAN_SHIFT_RIGHT ? "0%" : "100%",
                        }}
                        className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
                        onClick={shiftRight}
                    >
                        <FiChevronRight />
                    </motion.button>
                </>
            </div>
        </section>
    );
};

const Card = ({ url, category, title, description, deploymentLink, githubLink }) => {
    return (
        <div
            className="relative shrink-0 cursor-pointer rounded-2xl bg-[#FF6F61] shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
            style={{
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                marginRight: MARGIN,
                backgroundImage: `url(${url})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
                <span className="text-xs font-semibold uppercase" style={{ color: '#FF6F61' }}>
                    {category}
                </span>
                <p className="my-2 text-3xl font-bold">{title}</p>
                <p className="text-lg text-white opacity-90">{description}</p>
                <div className="absolute bottom-4 left-6 right-6 flex justify-between">
                    <a href={deploymentLink} className="px-4 py-2 bg-white text-[#FF6F61] rounded-md hover:bg-white/90 hover:text-[#FF6F61]">Deployment</a>
                    <a href={githubLink} className="px-4 py-2 bg-white text-[#FF6F61] rounded-md hover:bg-white/90 hover:text-[#FF6F61]">GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default CardCarousel;
