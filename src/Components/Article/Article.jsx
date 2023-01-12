import "./style.css";

const Article = ({alt,imgSrc,heading,text,author}) => {
    return ( 
        <div className="article">
            <div className="article-img">
                <img src={imgSrc} alt={alt} />
            </div>
            <span><h5>{author}</h5></span>
            <a href="#" className=""><h4>{heading}</h4></a>
            <p>{text}</p>
        </div>
     );
}
 
export default Article;