import "./style.css";
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1.5 },
  },
};
const slideVariants = {
  closed: {
    y: "-100vh",
  },
  open: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const MobileMenu = ({ clicked }) => {
  return (
    <motion.div
      className={`popup mobile ${clicked ? `` : "hide"}`}
      variants={menuVariants}
      animate={clicked ? "open" : "closed"}
    >
        <AnimatePresence
        >
        <motion.div
            className={`slidein ${clicked ? `` : "up"}`}
            variants={slideVariants}
            animate={clicked ? "open" : "closed"}
            exit = 'exit'
        >
            <div className="a">
            <a href="#" className="">
                Home
            </a>
            </div>
            <div className="a">
            <a href="#" className="">
                About
            </a>
            </div>
            <div className="a">
            <a href="#" className="">
                Contact
            </a>
            </div>
            <div className="a">
            <a href="#" className="">
                Blog
            </a>
            </div>
            <div className="a">
            <a href="#" className="">
                Careers
            </a>
            </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default MobileMenu;
