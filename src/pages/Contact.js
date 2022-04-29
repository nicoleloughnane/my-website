import React from 'react';
import resume from '../resume/myresume.pdf';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
    return (
    <div className='container'>
        <div className='aligncenter'>
        <h1>Contact Me</h1>
        <br />
        <FontAwesomeIcon icon={faEnvelope} size= '3x'/>
        <h5>nloughnane25@outlook.com</h5>
        <br />
        
        <FontAwesomeIcon icon={faLinkedinIn} size='3x'/>
        <br />
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nicole-loughnane/">My LinkedIn</a>
        <br/>
        <br/>

        <FontAwesomeIcon icon={faFile} size='4x'/>
        <br />
        <a target="_blank" rel="noreferrer" href={resume}>My Resume (PDF)</a>
        <br/>
        <br/>
        
        <FontAwesomeIcon icon={faGithub} size='4x' />
        <br />
        <a target="_blank" rel="noreferrer" href="https://github.com/nicoleloughnane">GitHub</a>

        </div>

    </div>
    );
};

export default Contact;