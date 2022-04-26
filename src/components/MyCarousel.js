import { render } from '@testing-library/react';
import React, {useState} from 'react';
import { Carousel } from 'react-bootstrap';

import '../App.css'
//images
import teddy from '../images/teddy_shook.jpeg';
import dogs from '../images/dogs.jpeg';
import jurassic from '../images/jurassicPark.jpg';

const MyCarousel = (props) => {
  
  
    return (
      <div className='carousel' style={{ display: 'block', width: 500, padding: 30 }}>
         <h4>M Photo Gallery</h4>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={teddy}
            alt="One"
          />
          <Carousel.Caption>
            <h3>Teddy</h3>
            <p>This is my dog. He is a standard poodle</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={dogs}
            alt="Two"
          />
          <Carousel.Caption>
            <h3>Manny and Cody</h3>
            <p>These are my parents dogs, a golden retriever and standard poodle.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={jurassic}
            alt="Two"
          />
          <Carousel.Caption>
            <h3>My dad and I</h3>
            <p>My dad and I in Hawaii</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    )
  }
export default MyCarousel;