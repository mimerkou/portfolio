import React from 'react';
import Fade from 'react-reveal/Fade';
import './SingleProject.css';

const SingleProject = (props) => {
  const { name, image, description, githubUrl, livePreviewUrl } = props;

  return (
    <div className="item">
      <div className="left">
        <Fade left>
          <div className="project-image">
            <img src={image} alt={name} />
          </div>
        </Fade>
      </div>

      <Fade right delay={500}>
        <div className="right">
          <h3 className="project-title">{name}</h3>
          <p className="project-desc">{description}</p>
          <div className="project-buttons">
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href={livePreviewUrl} target="_blank" rel="noreferrer">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default SingleProject;
