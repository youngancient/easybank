import "./style.css";
import Button from "../Button/Button";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="footer">
          <div className="one fm">
            <div className="f-logo">
              <img
                src="/assets/footerlogo.svg"
                alt="footer logo"
                className=""
              />
            </div>
            <div className="socials">
              <a href="#" className="first" style={{ marginLeft: 0 }}>
                <motion.i className="fa-brands fa-square-facebook"
                whileHover={{scale: 1.3}}
                ></motion.i>
              </a>
              <a href="#" className="">
                <motion.i className="fa-brands fa-youtube"
                whileHover={{scale: 1.3}}
                ></motion.i>
              </a>
              <a href="#" className="">
                <motion.i className="fa-brands fa-twitter"
                whileHover={{scale: 1.3}}
                ></motion.i>
              </a>
              <a href="#" className="">
                <motion.i className="fa-brands fa-pinterest"
                whileHover={{scale: 1.3}}
                ></motion.i>
              </a>
              <a href="#" className="">
                <motion.i className="fa-brands fa-instagram"
                whileHover={{scale: 1.3}}
                ></motion.i>
              </a>
            </div>
          </div>
          <div className="two fm">
            <div className="sc" style={{ marginTop: 0 }}>
              <a href="#" className="">
                <motion.h6
                whileHover={{scale: 1.3, originX: 0}}
                >About Us</motion.h6>
              </a>
            </div>
            <div className="sc">
            <a href="#" className="">
                <motion.h6
                whileHover={{scale: 1.3, originX: 0}}
                >Contact</motion.h6>
              </a>
            </div>
            <div className="sc">
            <a href="#" className="">
                <motion.h6
                whileHover={{scale: 1.3, originX: 0}}
                >Blog</motion.h6>
              </a>
            </div>
          </div>
          <div className="three fm">
            <div className="sc" style={{ marginTop: 0 }}>
            <a href="#" className="">
                <motion.h6
                whileHover={{scale: 1.3, originX: 0}}
                >Career</motion.h6>
              </a>
            </div>
            <div className="sc">
            <a href="#" className="">
                <motion.h6
                whileHover={{scale: 1.3, originX: 0}}
                >Support</motion.h6>
              </a>
            </div>
            <div className="sc">
            <a href="#" className="">
                <motion.h6
                whileHover={{scale: 1.3, originX: 0}}
                >Privacy Policy</motion.h6>
              </a>
            </div>
          </div>
          <div className="four fm">
            <Button />
            <p className="copyright">© Easybank. All Rights Reserved</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
