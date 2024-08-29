import React from "react";
// import './App.css'; // Custom CSS for additional styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';


const Services = () => {
  return (
    <div className="bgimage">
    <div className="container my-5">
      {/* <h2 className="text-center mb-4">About Us</h2> */}
      <div className="row">
        <div className="col-md-3">
          <div className="card mb-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuwJn7mmElumfgQc9dJIBx7yJ1cjdF8SqVAQ&s" className="card-img-top" alt="Our Mission" />
            <div className="card-body">
              <h5 className="card-title">Yoga</h5>
              <p className="card-text">
              Yoga brings the body and mind together and is built on three main elements – movement, breathing and meditation. Yoga has many physical and mental health benefits including improved posture, flexibility, strength, balance and body awareness.
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card mb-4">
            <img src="https://img.freepik.com/premium-photo/woman-doing-yoga-beach-with-mountain-background_865967-25537.jpg?w=996" className="card-img-top" alt="Our Vision" />
            <div className="card-body">
              <h5 className="card-title">Meditation</h5>
              <p className="card-text">
              It can help bring calm and insight to people who often feel anxious. Meditation refers to a set of techniques to enhance attention, emotional awareness, kindness, compassion, sympathetic joy, and mental calmness even in difficult situations
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card mb-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSzxUIKG2Fp0A6Kz2H7UrnaZpHjyzp9mu1g&s" className="card-img-top" alt="Our Team" />
            <div className="card-body">
              <h5 className="card-title">Massage Therapy</h5>
              <p className="card-text">
              Massage therapy is used to help manage a health condition or enhance wellness. It involves manipulating the soft tissues of the body. Massage has been practiced in most cultures, both Eastern and Western, throughout human history. Hence this is called as massage therapy.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-4">
            <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2022/11/960x0.jpg" className="card-img-top" alt="Our Team" />
            <div className="card-body">
              <h5 className="card-title">Physcial Therapy</h5>
              <p className="card-text">
              The aim of physical therapy is to relieve pain, help you move better or strengthen weakened muscles. Another important goal is to show patients what they can do themselves to improve their own health. The treatment isn't only done in a practice or hospital: You can and should continue doing it at home yourself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
