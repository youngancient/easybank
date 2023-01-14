import "./style.css";
import { motion } from "framer-motion";

const reasonVariants ={
    initial: {
      x: '-100vw',
    },
    final: {
      x: 0,
      transition: {
        delay: 1,
        duration: 1.5,
      },
    },
  }

const Reason = ({imgSrc, reasonHead, text, alt, inView }) => {
    return ( 
        <motion.div className="reason"
        variants={reasonVariants}
          initial= 'initial'
          animate= {inView ? 'final' : ''}
        >
            <div className="reason-img">
                <img src={imgSrc} alt={alt} className="" />
            </div>
            <h3> {reasonHead} </h3>
            <p> {text} </p>
        </motion.div>
     );
}
 
export default Reason;