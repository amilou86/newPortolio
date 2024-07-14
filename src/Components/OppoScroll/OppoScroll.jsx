import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { useRef } from "react";
import './OppoScroll.scss'
import amiOrange2 from '../../Components/assets/amiOrange2.png'
import developer from '../../Components/assets/developer.png'
import amiOrange from '../../Components/assets/amiOrange.png'
import screen from '../../Components/assets/screen.png'

const items = [
  {
    id: 1,
    title: 'From Investigations to Innovations',
    description: 'With a background deeply rooted in investigations, I have spent years delving into the intricacies of tax and insurance fraud, as well as navigating the complexities of energy complaints. This journey honed my analytical skills and my ability to unravel complex scenarios, preparing me for a new and exciting chapter in the tech and web development world. Transitioning from investigative work to technology, I am eager to bring a fresh perspective and a unique set of skills to the table.',
    img: amiOrange2,
  },
  {
    id: 2,
    title: 'Embracing Tech and Web Development',
    description: 'My passion for technology led me to enroll in an intensive bootcamp, which I completed with a final score exceeding 97%, all while maintaining a full-time job. This rigorous program covered the fundamentals of HTML and CSS, as well as JavaScript and React.js, equipping me with a strong foundation in web development. The bootcamp experience was transformative, igniting a new passion for coding and problem-solving. Currently, I am particularly enjoying experimenting with framer-motion, which allows me to blend creativity with technical precision.',
    img: developer,
  },
  {
    id: 3,
    title: 'Transferable Skills & Creative Problem-Solving',
    description: 'My investigative background has endowed me with a suite of transferable skills that are invaluable in software development. Analytical thinking, attention to detail, and the ability to piece together complex puzzles are just a few. As a creative and pragmatic thinker, I excel at discovering out-of-the-box solutions to problems. This skill set is incredibly beneficial in the tech world, where innovative solutions and fresh perspectives are key to advancement and success.',
    img: amiOrange,
  },
  {
    id: 4,
    title: 'A Passion for Equality and Innovation',
    description: 'Beyond my technical skills, I bring a friendly and outgoing personality to every team. I am a compassionate individual and a strong ally and supporter of equal rights. My journey in tech is not just about personal growth but also about making meaningful contributions to the community. Looking ahead, I am excited about the possibility of exploring AI and cyber security, fields that promise to revolutionize the future. My goal is to continue learning, growing, and contributing to projects that make a positive impact.',
    img: screen,
  },
];

export const OppoScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <>
      <section ref={targetRef} className="flex bg-black text-white">
        <Content content={items} />
        <Images content={items} scrollYProgress={scrollYProgress} />
      </section>
    </>
  );
};

const Content = ({ content }) => {
  return (
    <div className="w-full">
      {content.map(({ id, title, description }, idx) => (
        <div
          key={id}
          className={`p-8 h-screen flex flex-col justify-between ${idx % 2 ? "gradient-bg text-white" : "bg-orange text-white"
            }`}
        >
          <h3 className="text-3xl font-medium">{title}</h3>
          <p className="font-light w-full max-w-md">{description}</p>
        </div>
      ))}
    </div>
  );
};

const Images = ({ content, scrollYProgress }) => {
  const top = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${(content.length - 1) * 100}vh`, "0vh"]
  );

  return (
    <div className="h-screen overflow-hidden sticky top-0 w-24 md:w-full white-bg">
      <motion.div style={{ top }} className="absolute left-0 right-0">
        {[...content].reverse().map(({ img, id, title }) => (
          <img
            key={id}
            alt={title}
            className="h-screen w-full object-cover"
            src={img}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default OppoScroll;