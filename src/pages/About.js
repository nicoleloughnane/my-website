import React from 'react';
import MyCarousel from '../components/MyCarousel';
import profile from '../images/profile.jpg';

const About = () => {

    return (
    <div> 
        <h1>About Me</h1>

        <img src={profile} className="center" alt="profile of Nicole" />

        <p>I am a transfer student from College of the Canyons in Valencia, CA and am currently attending Grand Canyon University. 
            I first got introduced to computer programming in high school where I took both AP Computer Science Principles and AP Computer Science Java.
            I thoroughly enjoyed these courses for their problem solving aspects. 
        </p>

        <h3>Photo Gallery (under construction)</h3>

        <MyCarousel />

        

    </div>
    );
};

export default About;