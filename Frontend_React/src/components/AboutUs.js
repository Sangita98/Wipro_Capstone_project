import React from "react";
import "./AboutUs.css"; // Import the CSS file

const AboutUs = () => {
  const teamMembers = [
    { name: "Ravi Singh", role: "Developer", image: "raviprakash.jpeg" },
    { name: "Rushikesh Chavan", role: "Developer", image: "Rushikesh.jpg" },
    { name: "Sahil Kamble", role: "Developer", image: "Sahil Kamble.jpg" },
    { name: "Shahwaz Khan", role: "Developer", image: "Shahwaz Khan.jpg" },
    { name: "Raushan Kumar", role: "Developer", image: "Raushan Kumar.jpg" },
    { name: "Sangita Uprade", role: "Developer", image: "Sangitaphoto.jpg" },
  ];

  return (
    <div className="container mt-5 ">
      {/* <h1 className="text-center mb-5 meet">Meet the Team</h1> */}
      <div className="team-container">
      {/* <h1 className="text-center mb-5 meet">Meet the Team</h1> */}
      <br/><br/><br/><br/>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-md-4 text-center mb-4" key={index}>
              <div className="team-member-box"> {/* Box container for each team member */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-circle mb-3"
                />
                <h5 className="text-color">{member.name}</h5>
                <p className="text-color">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
