import React from "react";
import { motion } from "framer-motion";

export const RevealLinks = () => {
    return (
        <section className="grid place-content-center gap-2 bg-[#008080] px-8 py-24 text-[#FF6F61]">
            <FlipLink href="https://www.linkedin.com/in/ami-edwards-639b94248/">Linkedin</FlipLink>
            <FlipLink href="https://wa.me/+447703785849">WhatsApp</FlipLink>
            <FlipLink href="#">Github</FlipLink>
            <FlipLink href="mailto:amiedwards86@gmail.com">Email</FlipLink>
        </section>
    );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
            style={{
                lineHeight: 0.75,
            }}
        >
            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-100%",
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: "100%",
                            },
                            hovered: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    );
};

export default RevealLinks