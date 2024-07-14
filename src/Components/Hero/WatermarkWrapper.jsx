import React from 'react';
import { motion } from 'framer-motion';

const WatermarkWrapper = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            {/* <Watermark text="Developer" /> */}
            <Watermark text="Ally" reverse />
            <Watermark text="Diversity" />
            <Watermark text="Equality" reverse />

        </div>
    );
};


const Watermark = ({ reverse, text }) => (
    <div className="flex -translate-y-12 select-none overflow-hidden">
        <TranslateWrapper reverse={reverse}>
            <span className="w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-slate-300">
                {text}
            </span>
        </TranslateWrapper>
        <TranslateWrapper reverse={reverse}>
            <span className="ml-48 w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-slate-300">
                {text}
            </span>
        </TranslateWrapper>
    </div>
);

const TranslateWrapper = ({ children, reverse }) => {
    return (
        <motion.div
            initial={{ translateX: reverse ? "-100%" : "0%" }}
            animate={{ translateX: reverse ? "0%" : "-100%" }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="flex"
        >
            {children}
        </motion.div>
    );
}

export default WatermarkWrapper;
