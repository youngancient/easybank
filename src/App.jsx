import { useState, Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  const [isClicked, setClick] = useState(false);
  return (
    <div className={`App ${isClicked ? `shorten` : ''} `}>
        <Header isClicked={isClicked} setClick={setClick} />
        <Main/>
        <Footer/>
    </div>
  )
}

export default App;