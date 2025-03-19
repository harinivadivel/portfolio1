import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";  // Import Bootstrap CSS

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Connect from "./components/Connect";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Container */}
      <div className="container text-center mt-4">
        {/* Intro Section */}
        <div className="row">
          <div className="col">
            <Home />
          </div>
        </div>

        {/* Skills Section */}
        <div className="row my-4">
          <div className="col">
            <About />
          </div>
        </div>

        {/* Resume Section */}
        <div className="row mb-4">
          <div className="col">
            <Resume />
          </div>
        </div>

        {/* Contact Section */}
        <div className="row py-4 bg-light">
          <div className="col">
            <Contact />
          </div>
        </div>
      
      {/*Connect Section */}
      <div className="row my-4">
        <div className="col">
          <Connect/>
        </div>
      </div>
</div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;