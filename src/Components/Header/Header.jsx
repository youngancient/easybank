import "./style.css";
import Button from "../Button/Button";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useState } from "react";
import { useCycle } from "framer-motion";


const headerVariants ={
  initial: {
    y: '-100%'
  },
  final: {
    y: 0, 
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
}
const Header = () => {
  const [isClicked, setClick] = useState(false);
  const mobileMenuHandler = () => setClick(!isClicked);

  return (
    <header
    >
      <div className="header">
        <div className="logo">
          <img src="/assets/logo.svg" alt="logo" className="" />
        </div>
        <div className="desktop-navlinks desktop">
          <div className="desktop-links">
            <a href="#" className="" style={{ marginLeft: "0px" }}>
              Home
            </a>
            <a href="#" className="">
              About
            </a>
            <a href="#" className="">
              Contact
            </a>
            <a href="#" className="">
              Blog
            </a>
            <a href="#" className="">
              Careers
            </a>
          </div>
          <div className="request">
            <Button />
          </div>
        </div>
        <div className="tiles mobile" onClick={mobileMenuHandler}>
          {/* <i className={`fa-solid ${ isClicked ? `fa-xmark` : 'fa-bars' } fa-2x`} onClick={mobileMenuHandler}></i> */}
          {isClicked ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19">
              <g fill="#2D314D" fillRule="evenodd">
                <path d="M.868.661l16.97 16.97-.706.708L.162 1.369z" />
                <path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z" />
              </g>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="11">
              <g fill="#2D314D" fillRule="evenodd">
                <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
              </g>
            </svg>
          )}
        </div>
      </div>
      <MobileMenu clicked={isClicked} />
    </header>
  );
};
export default Header;
