import React, { useState } from "react";
import Header from '../components/Header';
import movieImage from '../images/moviesApp.png'
import Card from "../components/Card";
import '../App.css';

const Home = () => {

    const [projectList] = useState([
        {
            id: 0,
            image: movieImage,
            title: 'Movie App',
            tools: 'React and Movie API',
            description:
              'I made a CRUD app of my favorite movies using React that pulls from a database I created',
            projectLink: "https://github.com/nicoleloughnane/react-milestone-movies.git"
          },
          {
            id: 1,
            image:
            "https://img.freepik.com/free-photo/business-stilllife-eyeglasses-draft-foreground-open-laptop-notebook-background_544308-1283.jpg?w=1060",
            title: 'Title',
            tools: 'Tools',
            description:
              'Under construction',
            projectLink: "https://github.com/nicoleloughnane"
          },
          {
            id: 2,
            image:
            "https://img.freepik.com/free-photo/business-stilllife-eyeglasses-draft-foreground-open-laptop-notebook-background_544308-1283.jpg?w=1060",
            title: 'Title',
            tools: 'Tools',
            description:
              'Under construction',
              projectLink: "https://github.com/nicoleloughnane"
   
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
                projectLink = {project.projectLink}
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

