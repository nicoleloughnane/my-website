import React from "react";

const Card = (props) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={props.image} alt="project" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle"> {props.tools}</h6>
                <p className="card-text"> {props.description}</p>
                <button className = 'btn btn-primary' onClick={(e) => { 
                    e.preventDefault(); 
                    window.location.href='https://github.com/nicoleloughnane'
                    
                }}> 
                Go to Project
                </button>
            </div>
        </div>
    );
};

export default Card;