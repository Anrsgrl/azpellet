import React from 'react';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Header from './components/Header/Header';
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.css';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';
import GoToTop from './components/GoToTop/GoToTop';
function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Contact />
      <Location />
      <GoToTop />
      <Footer />
    </>
  );
}

export default App;
