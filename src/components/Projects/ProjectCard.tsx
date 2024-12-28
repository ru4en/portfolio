import { useState } from 'react';
import { Project } from '../Types';
import Tag from '../Common/Tag';
import './ProjectCard.css';

const ProjectCard = ({ project }: { project: Project }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
    setIsFullscreen(!isFullscreen);
    for (let i = 0; i < document.body.getElementsByClassName('controller').length; i++) {
      document.body.getElementsByClassName('controller')[i].classList.toggle('hidden');
    }
    const projects = document.getElementById('projects');
    if (projects) {
      projects.classList.toggle('overflow-x-hidden');
    }
  };

  return (
    <div
      className={`
        relative group
        ${isFullscreen ? 'inset-0 z-5 flex items-center justify-center ' : ''}
      `}
    >
      <div
        onClick={handleFlip}
        className={`
          duration-700 ease-in-out transform-gpu 
          preserve-3d cursor-pointer shadow-xl hover:ring-4 hover:top-4  rounded-xl ring-green-500
          ${isFlipped ? 'flipped' : ''}
          ${isFullscreen ? 'w-[90vw] h-[80vh] sm:w-[80vw] sm:h-[70vh] lg:w-[70vw] lg:h-[60vh] '
            : 'w-[300px] sm:w-[350px] lg:w-[400px] h-[300px]'}
        `}
      >
        {/* Front */}
        {!isFlipped && (
          <div
            className={`
                opacity-100 opacity-0
                absolute inset-0 backface-hidden rounded-xl  p-4
              bg-gradient-to-br from-white via-blue-50 to-blue-100
              dark:from-gray-700 dark:via-gray-800 dark:to-black
              transition-all duration-700 ease-in-out
            `}
          >
            <img
              src={project.image || './placeholder.png'}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4 transition duration-500 ease-in-out delay-200 hover:scale-105 hover:shadow-lg"
            />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">
              {project.title}
            </h3>
          </div>
        )}

        {/* Back */}
        {isFlipped && (
          <div
            className={`
                opacity-0
              absolute inset-0 backface-hidden
              rounded-xl overflow-hidden shadow-xl p-10
              bg-gradient-to-br from-green-600 via-green-500 to-cyan-600
              text-white  flipped
              duration-500 ease-in-out transition-all
              delay-200
            `}
          >
            <div className="flex flex-col max-h-[200px] max-w-[300px] mb-4">
                <img
                    src={project.image || './placeholder.png'}
                 alt={project.title} className="w-full h-48 object-cover rounded-md mt-4 shadow-md transition duration-500 ease-in-out" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className="flex-grow text-sm">{project.description}</p>

            <div className="flex gap-4 mt-4">
              {project.url && (
                <a
                  href={project.url}
                  className="flex-1 bg-white/10 rounded-lg p-2 text-center backdrop-blur-sm transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  className="flex-1 bg-white/10 rounded-lg p-2 text-center backdrop-blur-sm transition-colors hover:bg-white/20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              )}
            </div>
            {/* Additional content */}
            <div className="flex flex-wrap gap-2 pt-6">
              {project.tags.map((tag, i) => (
                <Tag key={i} tag={tag} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;