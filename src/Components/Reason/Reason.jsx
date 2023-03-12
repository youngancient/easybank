import "./style.css";
import { motion } from "framer-motion";


const reasonVariants = {
  initial: {
    x: "-20vw",
    opacity : 0,
  },
  final: {
    x: 0,
    opacity : 1,
    transition: {
      duration: 1.5,
    },
  },
};

const Reason = ({ imgSrc, reasonHead, text, alt }) => {
  return (
    <div className="r-reason">
      <motion.div
        className="reason"
        variants={reasonVariants}
        initial="initial"
        whileInView= "final"
        viewport={{ once : true }}
      >
        <div className="reason-img">
          <img src={imgSrc} alt={alt} className="" />
        </div>
        <h3> {reasonHead} </h3>
        <p> {text} </p>
      </motion.div>
    </div>
  );
};

export default Reason;
