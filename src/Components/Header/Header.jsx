import './style.css'
import Button from '../Button/Button';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useState } from 'react';


const Header = () => {
    const [isClicked,setClick] = useState(false);
    const mobileMenuHandler  =()=> setClick(!isClicked);

    return ( 
        <header>
            <div className="header">
                <div className="logo">
                    <img src="/assets/logo.svg" alt="logo" className="" />
                </div>
                <div className="desktop-navlinks desktop">
                    <div className="desktop-links">
                        <a href="#" className="" style={{marginLeft:'0px'}}>Home</a>
                        <a href="#" className="">About</a>
                        <a href="#" className="">Contact</a>
                        <a href="#" className="">Blog</a>
                        <a href="#" className="">Careers</a>
                    </div>
                    <div className="request">
                        <Button/>
                    </div>
                </div>
                <div className="tiles mobile">
                    <i className={`fa-solid ${ isClicked ? `fa-xmark` : 'fa-bars' } fa-2x`} onClick={mobileMenuHandler}></i>
                </div>
            </div>
            <MobileMenu clicked={isClicked} />
        </header>
     );
}
export default Header;