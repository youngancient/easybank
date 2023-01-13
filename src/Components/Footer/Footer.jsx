import './style.css';
import Button from "../Button/Button";

const Footer = () => {
    return ( 
        <footer>
            <section>
                <div className="footer">
                    <div className="one fm">
                        <div className="f-logo">
                            <img src="/assets/footerlogo.svg" alt="footer logo" className="" />
                        </div>
                        <div className="socials">
                            <a href="#" className="first" style={{marginLeft:0}}><i className="fa-brands fa-square-facebook"></i></a>
                            <a href="#" className=""><i className="fa-brands fa-youtube"></i></a>
                            <a href="#" className=""><i className="fa-brands fa-twitter"></i></a>
                            <a href="#" className=""><i className="fa-brands fa-pinterest"></i></a>
                            <a href="#" className=""><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="two fm">
                        <div className="sc" style={{marginTop: 0}}>
                            <a href="#" className="">About Us</a>
                        </div>
                        <div className="sc">
                            <a href="#" className="">Contact</a>
                        </div>
                        <div className="sc">
                        <a href="#" className="">Blog</a>
                        </div> 
                    </div>
                    <div className="three fm">
                        <div className="sc" style={{marginTop: 0}}>
                                <a href="#" className="">Career</a>
                            </div>
                            <div className="sc">
                                <a href="#" className="">Support</a>
                            </div>
                            <div className="sc">
                                <a href="#" className="">Privacy Policy</a>
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
}
 
export default Footer;