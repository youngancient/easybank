import "./style.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect } from "react";

const menuVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};
const slideVariants = {
  closed: {
    y: "100vh",
  },
  open: {
    y: 0,
    transition: {
      duration: 1.2,
    },
  },
  exit: {
    y: "100vh",
    transition: {
      duration: 1,
    },
  },
};

const MobileMenu = ({ clicked, setClick }) => {
  let menuRef = useRef();
  useEffect(()=>{
    let handler =(e)=>{
      if(menuRef.current != undefined){
        if(!menuRef.current.contains(e.target) && clicked){
          setClick(false);
        }
      }
    };
    document.addEventListener("mousedown", handler);
  })
  return (
    <motion.div
      className= "popup mobile"
      variants={menuVariants}
      initial = "closed"
      animate= "open"
      exit = 'exit'
    >

        <motion.div
            className= 'slidein'
            variants={slideVariants}
            initial = "closed"
            animate= "open"
            exit = 'exit'
            ref={menuRef}
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
    </motion.div>
  );
};

export default MobileMenu;
