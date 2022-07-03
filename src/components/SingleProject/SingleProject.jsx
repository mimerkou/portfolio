import React from 'react';
import './SingleProject.css';

const SingleProject = (props) => {
  const { name, image, description, githubUrl, livePreviewUrl } = props;

  return (
    <div className="item">
      <div className="left">
        <div className="project-image">
          <img src={image} alt={name} />
        </div>
      </div>

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
    </div>
  );
};

export default SingleProject;
