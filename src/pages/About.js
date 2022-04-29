import React from "react";
//import MyCarousel from "../components/MyCarousel";
import profile from "../images/profile.jpg";
import '../App.css';

const About = () => {
  return (
    <div className="container">
      <p className="aligncenter">
        <h1>About Me</h1>

        <img src={profile} alt="profile of Nicole" width={300} height={400} />
        
        <br/>
        <br/>

        <p>
          I am currently a student at Grand Canyon University, located in Phoenix, AZ, majoring in Software Development.
          I transferred here from College of the Canyons, located in Valencia, CA. I first was
          introduced to computer programming in high school where I took both AP
          Computer Science Principles and AP Computer Science Java. Ever since then I have been pursuing this interest, and
          hope to get into UX/UI design after obtaining my Bachelors. 
        </p>

     

      </p>
    </div>
  );
};

export default About;
