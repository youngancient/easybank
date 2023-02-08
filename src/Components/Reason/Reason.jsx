import "./style.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const reasonVariants = {
  initial: {
    x: "-100vw",
  },
  final: {
    x: 0,
    transition: {
      delay: 1,
      duration: 1.5,
    },
  },
};

const Reason = ({ imgSrc, reasonHead, text, alt }) => {
  const { ref: myRef, inView: reasonInView } = useInView();
  return (
    <div className="r-reason" ref={myRef}>
      <motion.div
        className="reason"
        variants={reasonVariants}
        initial="initial"
        animate={reasonInView ? "final" : ""}
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
