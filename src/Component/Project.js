import React from "react";
import { project } from "../Portfolio";
import ProjectContainer from "./ProjectContainer";
import "./Project.css";

const Project = () => {
  if(!project.length) return null
  return (
    <section id="project" className="section project">
      <h2 className="section__title">Projects</h2>
      <div className="project__grid">
        {project.map((project) => (
          <ProjectContainer project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
