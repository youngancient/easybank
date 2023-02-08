import "./style.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const articleVariants = {
  initial: {
    scale: 0.1,
    opacity: 0.3,
  },
  final: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      duration: 2,
    },
  },
};

const Article = ({ alt, imgSrc, heading, text, author}) => {
  const { ref: myRef, inView: articleInView } = useInView();
  return (
    <div className="a-article" ref={myRef}>
      <motion.div
        className="article"
        variants={articleVariants}
        initial="initial"
        animate={articleInView ? "final" : ""}
      >
        <div className="article-img">
          <img src={imgSrc} alt={alt} />
        </div>
        <div className="pad">
          <span>
            <h5>{author}</h5>
          </span>
          <div className="link">
            <a href="#" className="">
              <h4>{heading}</h4>
            </a>
            <p>{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Article;
