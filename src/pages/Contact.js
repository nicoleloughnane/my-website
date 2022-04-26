import React from 'react';
import resume from '../resume/myresume.pdf';

const Contact = () => {
    return (<div>
        <h1>Contact Me</h1>
        <h4>Email: nloughnane25@outlook.com</h4>
        
        <h3>Hire me!</h3>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nicole-loughnane/">My LinkedIn</a>

        <h3>Link to my Resume</h3>
        <a target="_blank" rel="noreferrer" href={resume}>My Resume (PDF)</a>
    </div>
    );
};

export default Contact;