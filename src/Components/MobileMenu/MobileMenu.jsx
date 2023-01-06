import './style.css'

const MobileMenu = ({clicked}) => {
    return ( 
        <div className={`popup mobile ${clicked ? `` : 'hide'}`}>
            <div className={`slidein ${clicked ? ``: 'up'}`}>
                <div className="a">
                    <a href="#" className="">Home</a>
                </div>
                <div className="a">
                    <a href="#" className="">About</a>
                </div>
                <div className="a">
                    <a href="#" className="">Contact</a>
                </div>
                <div className="a">
                    <a href="#" className="">Blog</a>
                </div>
                <div className="a">
                    <a href="#" className="">Careers</a>
                </div>
            </div>
        </div>
     );
}
 
export default MobileMenu;