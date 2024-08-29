import React from "react";
import './HomePage.css'; 

const HomePage = () => {
  const handleLearnMoreClick = () => {
    window.open('https://www.investopedia.com/terms/w/wellness-program.asp', '_blank');
  };

  return (
    <div className="home-page-container">
      <div className="home-page-content text-center text-light">
        <h1 className="display-4">Welcome to Wellness Programs</h1>
        <p className="lead">Discover our services and learn more about what we offer.</p>
        <button 
          className="btn btn-primary btn-lg" 
          onClick={handleLearnMoreClick}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HomePage;
