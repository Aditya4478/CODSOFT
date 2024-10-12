import React, { useEffect } from 'react';
import './Projects.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { fetchProjects } from '../store/ProjectsSlice';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">featuRed pRojecTs</h1>
      <p className="projects-para">
        Before moving ahead in Product Management Field, I Deployed many scalable websites and cross-platform web applications.
        Collaborated as Contributor-2022, Mentor-2023, Org_Admin-2024 in Google Summer Of Code projects.
      </p>
      <div className="projects-container">
        {
          projects.map((project, id) => (
            <ProjectCard

              image={project.image_url}
              title={project.project_name}
              livelink={project.source_link}
              description={project.description}
              stacks={project.tech_stack}
              source_link={project.live_link}

            />
          ))
        }
      </div>
    </div>
  );
};

export default Projects;
