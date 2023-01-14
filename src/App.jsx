import { useState, useEffect, CSSProperties} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import ClipLoader from "react-spinners/ClipLoader";
import BounceLoader from "react-spinners/BounceLoader";



function App() {
  const [isClicked, setClick] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  },[])
  return (
    <div className={`App ${isClicked ? `shorten` : ''} `}>
        {
          isLoading ?
          <div className="loader">
            <BounceLoader color={'hsl(136, 65%, 51%)'} size={50} />
          </div>
          : 
          <>
            <Header isClicked={isClicked} setClick={setClick} />
            <Main/>
            <Footer/>
          </>
        }
    </div>
  )
}

export default App;