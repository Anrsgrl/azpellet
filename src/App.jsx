import React, { useRef } from 'react';
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
  const home = useRef();
  const about = useRef();
  const form = useRef();
  return (
    <>
      <Header home={home} about={about} form={form} />
      <Home home={home} />
      <About about={about} />
      <Contact form={form} />
      <Location />
      <GoToTop />
      <Footer />
    </>
  );
}

export default App;
