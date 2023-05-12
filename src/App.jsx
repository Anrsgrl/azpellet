import React from 'react';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Header from './components/Header/Header';
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.css';
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
