import React from 'react';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Contact />
    </>
  );
}

export default App;
