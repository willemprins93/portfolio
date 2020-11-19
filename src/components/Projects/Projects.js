import React from "react";
import "./Projects.css";

const projects = [
  {
    name: "Planr",
    image: "/images/logo-green.png",
    description:
      "Full stack web application built using Express, Node.js and MongoDB. Complete CRUD-methods, authentication using Bcrypt, filehandling through Cloudinary and several external packages, including a geocoder and Mapquest/Mapbox.",
    link: "https://planr-deploy.herokuapp.com/",
  },
  {
    name: "Hungry Hungry Coder",
    image: "/images/fruit-big.png",
    description:
      "Item collection game built using Javascript, HTML and CSS. Animations through Canvas, DOM-manipulation and custom-made sprites.  ",
    link: "https://willemprins93.github.io/hungry-hungry-coder/",
  },
  {
    name: "Hungry Hungry Coder",
    image: "/images/fruit-big.png",
    description:
      "Item collection game built using Javascript, HTML and CSS. Animations through Canvas, DOM-manipulation and custom-made sprites.  ",
    link: "https://willemprins93.github.io/hungry-hungry-coder/",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      {projects.map((project) => {
        return (
          <>
            <div className="project-card">
              <div className="project-info">
                <img className="project-image" src={project.image} />
                <div className="project-text">
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="project-button">
                <a href={project.link} target="_blank">
                  ➔
                </a>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Projects;
