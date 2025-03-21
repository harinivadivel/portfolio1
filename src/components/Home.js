import React from 'react';
import bg from '../assets/Robots.png';
import btnImg from '../assets/hireme.png';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section id="home" className="container text-center py-5">
      <div className="row align-items-center">
        
        {/* Left Text Section */}
        <div className="col-md-6 text-start">
          <h1 className="fw-bold text-light">Hello,</h1>
          <h2 className="fw-bold text-light">
            I'm <span className="text-light fw-bolder">Harini</span>, Student of AI & ML
          </h2>
          <p className="lead text-light">
            Aspiring AIML & FullStack Professional seeking opportunities to apply my technical skills...
          </p>
          <Link to="contact">
            <button className="btn btn-success d-flex align-items-center gap-2">
              <img src={btnImg} alt="Hire Me" width="30" height="30" />
              Hire Me
            </button>
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="col-md-6">
          <img src={bg} alt="Profile" className="img-fluid rounded" />
        </div>

      </div>
    </section>
  );
};

export default Home;