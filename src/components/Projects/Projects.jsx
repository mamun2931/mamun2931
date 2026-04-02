import React from 'react';
import data from '../../data/portfolio.json';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const { projects } = data;

  return (
    <div id="projects" className="py-24 bg-base-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">{projects.titlePrefix} <span className="text-secondary">{projects.titleHighlight}</span></h2>
          <p className="text-base-content/70">{projects.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.items.map((project) => (
            <div key={project.id} className="card bg-base-100 shadow-2xl overflow-hidden group border border-base-content/10">
              <figure className="relative h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className={`absolute inset-0 bg-${project.tags[0]?.color || 'primary'}/20 group-hover:bg-transparent transition-colors duration-300`}></div>
              </figure>
              <div className="card-body">
                <div className="flex gap-2 mb-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`badge badge-${tag.color} badge-outline`}>{tag.name}</span>
                  ))}
                </div>
                <h2 className={`card-title text-2xl font-display group-hover:text-${project.tags[0]?.color || 'primary'} transition-colors`}>{project.title}</h2>
                <p className="text-base-content/70 text-sm">{project.description}</p>
                <div className="card-actions justify-end mt-4">
                  <a href={project.codeLink} className={`btn btn-sm btn-ghost gap-2 hover:bg-${project.tags[1]?.color || 'secondary'} hover:text-white`}>
                    <FaGithub /> Code
                  </a>
                  <a href={project.demoLink} className={`btn btn-sm btn-${project.tags[0]?.color || 'primary'} gap-2`}>
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
