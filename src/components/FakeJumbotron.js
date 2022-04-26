import React from "react";
import '../App.css';
//import arizona from '../images/arizona_resized.jpeg'

const FakeJumbotron = () => {


    return (
        <div>
            <div className="bg-dark p-5 rounded-lg m-3">
         
            <h1 className="display-4">Hello World! </h1>
            <p className="lead">Welcome to my website!</p>
            </div>
        </div>
    );
};

export default FakeJumbotron;

/*If I want to add a background image to the Jumbotron, text will not display with it
   <img className="bg-img" alt="background" src={arizona} />
   change the className of the second div to has-bg-img
*/
