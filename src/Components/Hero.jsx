import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section text-white">
      <div className="container">
        <div className="row align-items-center min-vh-100">

          {/* Text Section */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-3 fw-bold">Rohit Kumar</h1>

            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1500,
                'MERN Stack Enthusiast',
                1500,
                'React & Node.js Developer',
                1500,
              ]}
              wrapper="h4"
              speed={50}
              repeat={Infinity}
              className="text-warning mb-3"
            />

            <p className="lead">
              Passionate about building fast, scalable, and beautiful web applications using React, Node.js, and MongoDB.
            </p>
            <a href="#contact" className="btn btn-warning mt-3 px-4 py-2">Hire Me</a>

            <div className="mt-4 d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="https://github.com/Coderohitk" target="_blank" rel="noreferrer" className="text-white fs-4">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/rohit-kumar-80757a163/" target="_blank" rel="noreferrer" className="text-white fs-4">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src="/Portfolio/images/Profile_1.jpg"
              alt="Rohit Kumar" width="500"              className="rounded-circle img-fluid hero-img shadow-lg border border-3 border-light"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
