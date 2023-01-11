import "./style.css";

const Reason = ({imgSrc, reasonHead, text, alt }) => {
    return ( 
        <div className="reason">
            <div className="reason-img">
                <img src={imgSrc} alt={alt} className="" />
            </div>
            <h3> {reasonHead} </h3>
            <p> {text} </p>
        </div>
     );
}
 
export default Reason;