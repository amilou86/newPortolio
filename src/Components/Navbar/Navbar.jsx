import './Navbar.scss';
import { motion } from 'framer-motion';
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
                    <a href="#"><img src={instagram} alt="instagram logo" /></a>
                    <a href="#"><img src={github} alt="github logo" /></a>
                    <a href="#"><img src={twitter} alt="twitter logo" /></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
