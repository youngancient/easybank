import "./style.css";
import Button from "../Button/Button";
import Reason from "../Reason/Reason";
import Article from "../Article/Article";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

const reasonData = [
  {
    id: 1,
    alt: "icon-online",
    imgSrc: "/assets/icon-online.svg",
    reasonHead: "Online Banking",
    text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    id: 2,
    alt: "icon-budgeting",
    imgSrc: "/assets/icon-budgeting.svg",
    reasonHead: "Simple Budgeting",
    text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    id: 3,
    alt: "icon-onboarding",
    imgSrc: "/assets/icon-onboarding.svg",
    reasonHead: "Fast Onboarding",
    text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    id: 4,
    alt: "icon-api",
    imgSrc: "/assets/icon-api.svg",
    reasonHead: "Open API",
    text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];
const articleData = [
  {
    id: 1,
    alt: "currency",
    author: "By Claire Robinson",
    imgSrc: "/assets/image-confetti.jpg",
    heading: "Receive money in any currency with no fees ",
    text: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    id: 2,
    alt: "restuarant",
    author: "By Wilson Hutton",
    imgSrc: "/assets/image-restaurant.jpg",
    heading: "Treat yourself without worrying about money",
    text: " Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    id: 3,
    alt: "plane",
    author: "By Wilson Hutton",
    imgSrc: "/assets/image-plane.jpg",
    heading: "Take your Easybank card wherever you go",
    text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    id: 4,
    alt: "confetti",
    author: "By Claire Robinson",
    imgSrc: "/assets/image-confetti.jpg",
    heading: "Our invite-only Beta accounts are now live!",
    text: "  After a lot of hard work by the whole team, we’re excited to launch our closed beta.It’s easy to request an invite through the site ...",
  },
];

const heroVariants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1.5,
      staggerChildren: 1,
    },
  },
  section: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1.5,
      staggerChildren: 1,
    },
  },
};

const heroImgVariants = {
  initial: {
    x: "100vw",
  },
  final: {
    x: 0,
    transition: {
      delay: 1.5,
      duration: 2,
    },
  },
};
const heroTxtVariants = {
  initial: {
    x: "-100vw",
  },
  final: {
    x: 0,
    transition: {
      delay: 1.5,
      duration: 2.5,
    },
  },
};
const buttonVariants = {
  initial: {
    x: "-100vw",
  },
  final: {
    x: 0,
    transition: {
      delay: 5,
      duration: 4,
      type: "spring",
      stiffness: 300,
    },
  },
};
const Main = () => {
  const { ref: myRef, inView: reasonInView } = useInView();
  const [text] = useTypewriter({
    words: ["Us?", "Easybank?"],
    loop: {},
  });
  const { ref: articleRef, inView: articleInView } = useInView();
  return (
    <main className="">
      <motion.div
        className="hero"
        variants={heroVariants}
        initial="initial"
        animate="final"
      >
        <motion.div
          className="hero-img"
          variants={heroImgVariants}
          initial="initial"
          animate="final"
        >
          <img src="/assets/image-mockups.png" alt="phones" />
        </motion.div>
        <motion.div
          className="hero-txt"
          variants={heroTxtVariants}
          initial="initial"
          animate="final"
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
              animate="final"
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
        animate="section"
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
          <div className="reasons" ref={myRef}>
            {/* use a for loop to loop over the components */}
            {reasonData.map((data) => (
              <div className="reason-cont" key={data.id}>
                <Reason
                  imgSrc={data.imgSrc}
                  reasonHead={data.reasonHead}
                  text={data.text}
                  alt={data.alt}
                  inView={reasonInView}
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
        animate="section"
      >
        <div className="articles-div" ref={articleRef}>
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
                  inView={articleInView}
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
