import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark text-white py-3 fixed-top shadow-sm">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        <h1 className="mb-0">Rohit Kumar</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contact Me</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
