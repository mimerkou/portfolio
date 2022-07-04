import React, { useState } from 'react';
import SingleProject from '../SingleProject/SingleProject';
import { projectsData } from './projectsData';
import Fade from 'react-reveal/Fade';
import './Projects.css';

const Projects = () => {
  const [projects, setProject] = useState(projectsData);
  // const [moreProjects, setMoreProjects] = useState(moreProjectsData);
  // const [showMore, setShowMore] = useState(false);
  // const [clicked, setClicked] = useState(false);

  // const showMoreBtnClickHandler = () => {
  //   setShowMore(!showMore);
  //   setClicked(true);
  // };

  // const showLessBtnClickHandler = () => {
  //   setShowMore(!showMore);
  //   setClicked(false);
  // };

  return (
    <section className="projects-container" id="projects">
      <Fade bottom>
        <div className="projects-heading">
          <h2>Recent Projects</h2>
          <div className="underline"></div>
        </div>
      </Fade>

      <div className="main-projects">
        {projects.map((project) => {
          return <SingleProject key={project.id} {...project} />;
        })}
      </div>

      {/* <div className="more-projects">
        {!clicked && (
          <button className="btn" onClick={showMoreBtnClickHandler}>
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        )}
        {showMore && (
          <>
            <div>
              {moreProjects.map((moreProject) => {
                return <SingleProject key={moreProject.id} {...moreProject} />;
              })}
            </div>
            <button className="btn" onClick={showLessBtnClickHandler}>
              {showMore ? 'Show Less' : 'Show More'}
            </button>
          </>
        )}
      </div> */}
    </section>
  );
};

export default Projects;
