import React, { useState, useEffect } from "react";
import Cover from "./components/cover/Cover";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Slider from "./components/Slider/Slider";

const App = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handlerScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <NavBar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Slider />
    </div>
  );
};

export default App;
