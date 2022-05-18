import React, { useState } from "react";
import Header from '../components/Header';
import movieImage from '../images/moviesDiagram.png'
import Card from "../components/Card";
import '../App.css';

const Home = () => {

    const [projectList] = useState([
        {
            id: 0,
            image:
            movieImage,
            title: 'Movie App',
            tools: 'React and Movie API',
            description:
              'I made a CRUD app of my favorite movies using React that pulls from a database I created',
   
          },
          {
            id: 1,
            image:
            "https://en.meming.world/images/en/thumb/a/a9/Communist_Bugs_Bunny.jpg/450px-Communist_Bugs_Bunny.jpg",
            title: 'Test Title',
            tools: 'Test tools',
            description:
              'Yellow Submarine is the tenth studio album by English rock band the Beatles, released on 13 January 1969 in the United States and on 17 January 1969 in the United Kingdom.',
   
          },
          {
            id: 2,
            image:
            "https://en.meming.world/images/en/thumb/a/a9/Communist_Bugs_Bunny.jpg/450px-Communist_Bugs_Bunny.jpg",
            title: 'Test Title',
            tools: 'Test tools',
            description:
              'Yellow Submarine is the tenth studio album by English rock band the Beatles, released on 13 January 1969 in the United States and on 17 January 1969 in the United Kingdom.',
   
          }
      
    ])

    const renderedList = () => {
        return projectList.map((project) => {
            return (
                <Card 
                key = {project.id}
                image = {project.image}
                title = {project.title}
                tools = {project.tools}
                description = {project.description}
                />
            )
        })
    }
   return(
         
     <div className="aligncenter">
     <Header />
        <br/>
        <h1>Nicole Loughnane</h1>
        <p> Software Development Student at Grand Canyon University</p>
        <br/>
        <h2>My Projects</h2>
        <br />
        <div className="cardcontainer">
        {renderedList()}
        </div>
        </div>
    ); 
} 



export default Home;

