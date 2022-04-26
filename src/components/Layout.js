import React from "react";
import {Container} from 'react-bootstrap';
import '../App.css'
//all the pages (children) are wrapped in Layout in App.js
//puts everything in a container
const Layout = (props) => {


    return (
    <div className="layout">
        <Container>
       
            {props.children}
       
         </Container>
    </div>
    );
};

export default Layout;