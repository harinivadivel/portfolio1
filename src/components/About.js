import React from 'react';
import AIML from '../assets/ai-ml.png';
import WebDesign from '../assets/web-design.png';
import AppDesign from '../assets/app-design.png';

const About = () => {
  return (
    <section  id="about" className="container text-center py-5">
      <h2 className="fw-bold text-success">What I Do</h2>
      <p className="text-white">
        I am a skilled and passionate web designer with a focus on creating visually appealing and user-friendly websites.
        I focus on building the visual and interactive elements of web applications using HTML, CSS, and JavaScript.
        I actively learn new frameworks and technologies to stay updated with the latest web development trends while 
        collaborating closely with designers and back-end developers.
      </p>

      <div className="row">
        {/* AI & ML Skill */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <img src={AIML} alt="AI & ML" className="card-img-top" style={{ height: '100px', objectFit: 'contain' }} />
            <div className="card-body">
              <h5 className="card-title">AI & ML</h5>
              <p className="card-text">AI is the ability of a machine to mimic human-like behavior, while ML is teaching machines to learn.</p>
            </div>
          </div>
        </div>

        {/* Web Design Skill */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <img src={WebDesign} alt="Web Design" className="card-img-top" style={{ height: '100px', objectFit: 'contain' }} />
            <div className="card-body">
              <h5 className="card-title">Web Design</h5>
              <p className="card-text">Building visually appealing and interactive websites using modern front-end technologies.</p>
            </div>
          </div>
        </div>

        {/* App Design Skill */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <img src={AppDesign} alt="App Design" className="card-img-top" style={{ height: '100px', objectFit: 'contain' }} />
            <div className="card-body">
              <h5 className="card-title">App Design</h5>
              <p className="card-text">Creating intuitive and responsive mobile app interfaces for seamless user experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;