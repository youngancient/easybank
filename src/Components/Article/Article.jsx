import "./style.css";
import { motion } from "framer-motion";


const articleVariants ={
    initial: {
      scale: 0.1 ,
      opacity: 0.3
    },
    final: {
        opacity: 1,
      scale : 1,
      transition: {
        delay: 1,
        duration: 2,
      },
    },
  }

const Article = ({alt,imgSrc,heading,text,author, inView}) => {
    return ( 
        <motion.div className="article"
        variants={articleVariants}
          initial= 'initial'
          animate= {inView ? 'final' : ''}
        >
            <div className="article-img">
                <img src={imgSrc} alt={alt} />
            </div>
            <div className="pad">
                <span><h5>{author}</h5></span>
                <div className="link">
                    <a href="#" className=""><h4>{heading}</h4></a>
                    <p>{text}</p>
                </div>
            </div>
        </motion.div>
     );
}
 
export default Article;