import React from 'react';
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.css';
import error from "./assets/images/error.svg"
function App() {
  return (
    <>
      {/* <Header home={home} about={about} form={form} />
      <Home home={home} />
      <About about={about} />
      <Contact form={form} />
      <Location />
      <GoToTop />
      <Footer /> */}
      <div className="container d-flex justify-content-center align-items-center flex-column" style={{ height: "100vh" }}>
        <img src={error} alt="" style={{ width: "80%" }} />
      </div>
    </>
  );
}

export default App;
