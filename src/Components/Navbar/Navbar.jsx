import './Navbar.scss';
import { motion } from 'framer-motion';
import { FaWhatsappSquare, FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";  // Changed MdOutlineMail to FaEnvelope
import github from '../../Components/assets/github.png';
import instagram from '../../Components/assets/instagram.png';
import twitter from '../../Components/assets/twitter.jpeg';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                />
                <div className="social">
                    <a href="https://wa.me/+447703785849"> <FaWhatsappSquare /></a>
                    <a href="https://github.com/amilou86"> <FaGithub /></a>
                    <a href="https://www.linkedin.com/in/ami-edwards-639b94248/"> <FaLinkedinIn /></a>
                    <a href="mailto: amiedwards86@gmail.com"> <FaEnvelope /></a> {/* Changed to FaEnvelope */}
                </div>
            </div>
        </div >
    );
};

export default Navbar;
