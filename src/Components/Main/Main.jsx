import "./style.css";
import Button from "../Button/Button";
import Reason from "../Reason/Reason";
import Article from "../Article/Article";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";
import { rData, aData } from "../../Utils/Data";
import { useState } from "react";

const heroVariants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      staggerChildren: 1,
    },
  },
};

const heroImgVariants = {
  initial: {
    x: "25vw",
  },
  final: {
    x: 0,
    transition: {
      delay: 0.5,
      duration: 2,
    },
  },
};
const heroTxtVariants = {
  initial: {
    x: "-25vw",
  },
  final: {
    x: 0,
    transition: {
      delay: 0.5,
      duration: 2,
    },
  },
};
const buttonVariants = {
  initial: {
    x: "-30vw",
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1.5,
      type: "spring",
      stiffness: 300,
    },
  },
};
const Main = () => {
  const [reasonData, setReasonData] = useState(rData);
  const [articleData, setArticleData] = useState(aData);

  const [text] = useTypewriter({
    words: ["Us?", "Easybank?"],
    loop: {},
  });

  return (
    <main className="">
      <motion.div
        className="hero"
        variants={heroVariants}
        initial="initial"
        whileInView={"final"}
        viewport={{ once: true }}
      >
        <motion.div
          className="hero-img"
          variants={heroImgVariants}
          initial="initial"
          whileInView={"final"}
          viewport={{ once: true }}
        >
          <img src="/assets/image-mockups.png" alt="phones" />
        </motion.div>
        <motion.div
          className="hero-txt"
          variants={heroTxtVariants}
          initial="initial"
          whileInView={"final"}
          viewport={{ once: true }}
        >
          <div className="words">
            <h1 style={{ marginTop: "0px" }}>
              Next generation digital banking
            </h1>
            <p className="">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <motion.div
              className="motion"
              variants={buttonVariants}
              initial="initial"
              whileInView={"final"}
              viewport={{ once: true }}
            >
              <Button />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <motion.section
        className="s-reasons"
        variants={heroVariants}
        initial="initial"
        whileInView={"final"}
        viewport={{ once: true }}
      >
        <div className="section">
          <div className="cont">
            <div className="heading">
              <h2>
                Why choose
                <strong>
                  {text}
                  <Cursor cursorColor="hsl(136, 65%, 51%)" />
                </strong>
              </h2>
              <p className="">
                We leverage Open Banking to turn your bank account into your
                financial hub. Control your finances like never before.
              </p>
            </div>
            <div className="heading-empty desktop"></div>
          </div>
          <div className="reasons">
            {/* use a for loop to loop over the components */}
            {reasonData.map((data) => (
              <div className="reason-cont" key={data.id}>
                <Reason
                  imgSrc={data.imgSrc}
                  reasonHead={data.reasonHead}
                  text={data.text}
                  alt={data.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.section
        className="s-articles"
        variants={heroVariants}
        initial="initial"
        whileInView={"final"}
        viewport={{ once: true }}
      >
        <div className="articles-div">
          <h2>Latest Articles</h2>
          <div className="articles">
            {/* use a for loop to loop over the components */}
            {articleData.map((article) => (
              <div className="article-cont" key={article.id}>
                <Article
                  alt={article.alt}
                  imgSrc={article.imgSrc}
                  heading={article.heading}
                  text={article.text}
                  author={article.author}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Main;
