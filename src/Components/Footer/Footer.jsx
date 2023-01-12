import Button from "../Button/Button";

const Footer = () => {
    return ( 
        <footer>
            <section>
                <div className="footer">
                    <div className="one">
                        <div className="f-logo">
                            <img src="/assets/logo.svg" alt="footer logo" className="" />
                        </div>
                        <div className="socials">
                            <a href="#" className=""><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className=""><i className="fa-brands fa-youtube"></i></a>
                            <a href="#" className=""><i className="fa-brands fa-twitter"></i></a>
                            <a href="#" className=""><i className="fa-brands fa-pinterest"></i></a>
                            <a href="#" className=""><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="two">
                        <a href="#" className="">About Us</a>
                        <a href="#" className="">Contact</a>
                        <a href="#" className="">Blog</a>
                    </div>
                    <div className="three">
                        <a href="#" className="">Career</a>
                        <a href="#" className="">Support</a>
                        <a href="#" className="">Privacy Policy</a>
                    </div>
                    <div className="four">
                        <Button />
                        <p className="copyright">© Easybank. All Rights Reserved</p>
                    </div>
                </div>
            </section>
        </footer>
     );
}
 
export default Footer;