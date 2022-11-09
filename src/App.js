import React,{useState,useEffect} from 'react';
import Cover from './components/cover/Cover';
import NavBar from './components/navBar/NavBar';
import About from './components/about/About';
import Slider from './components/slider/Slider';
import Info from './components/info/Info';
import Footer from "./components/footer/Footer";
import './App.css';

function App() {

  const [scrollHeight,setScrollHeight] = useState(0);

  const handlreScroll=()=>{
    const position = window.pageYOffset;
    setScrollHeight(position);
  }
  useEffect(()=>{
    window.addEventListener("scroll", handlreScroll);

  },[scrollHeight] );

  return (
    <div className="App">
     <NavBar isScrolling={scrollHeight} />
     <Cover />
     <About />
     <Slider />
     <Info />
     <Footer />
    </div>
  );
}

export default App;
