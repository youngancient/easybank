import { useState, useEffect, CSSProperties} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import BounceLoader from "react-spinners/BounceLoader";
import { motion, AnimatePresence } from "framer-motion";

const loaderVariant = {
  exit:{
    opacity: 0,
    transition :{
      duration : 2
    }
  }
}

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
      <AnimatePresence>
        {
          isLoading ?
          <motion.div className="loader"
          variants={loaderVariant}
          key= "hinokami"
          exit = "exit"
          >
            <BounceLoader color={'hsl(136, 65%, 51%)'} size={50} />
          </motion.div>
          : 
          <motion.div
          key= "kagura"
          >
            <Header isClicked={isClicked} setClick={setClick} />
            <Main />
            <Footer/>
          </motion.div>
        }
        </AnimatePresence>
    </div>
  )
}

export default App;