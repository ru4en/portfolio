import { useState, useEffect, useRef } from 'react';
import { Project } from '../Types';
import Tag from '../Common/Tag';
import './ProjectCard.css';
import { isInCenter } from './isInCenter';

const ProjectCard = ({ project }: { project: Project }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [updateTrigger, setUpdateTrigger] = useState(0); // State to force updates
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkCenter = () => {
      const projects = document.getElementById('projects');
      if (cardRef.current && projects) {
        const selected = isInCenter(cardRef.current, projects);
        setIsSelected(selected);

        // Trigger a re-render if the selection state changes
        setUpdateTrigger((prev) => prev + 1);
      }
    };

    checkCenter();
    window.addEventListener('scroll', checkCenter, { passive: true });
    window.addEventListener('resize', checkCenter);

    return () => {
      window.removeEventListener('scroll', checkCenter);
      window.removeEventListener('resize', checkCenter);
    };
  }, [project, updateTrigger]);

  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
    setIsFullscreen(!isFullscreen);

    const controllers = document.querySelectorAll('.controller');
    controllers.forEach((controller) => controller.classList.toggle('hidden'));

    const projects = document.getElementById('projects');
    if (projects) {
      projects.classList.toggle('overflow-x-hidden');
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!isSelected) return; // Only allow click if selected
    e.stopPropagation();

    if (isFullscreen && isFlipped) {
      setIsFlipped(false);
      setIsFullscreen(false);

      const controllers = document.querySelectorAll('.controller');
      controllers.forEach((controller) => controller.classList.toggle('hidden'));

      const projects = document.getElementById('projects');
      if (projects) {
        projects.classList.toggle('overflow-x-hidden');
      }
    } else {
      handleFlip(e);
    }
  };

  return (
    <div
      ref={cardRef}
      className={`
        relative group
        ${isFullscreen ? 'inset-0 z-5 flex items-center justify-center' : ''}
      `}
    >
      <div
        onClick={handleClick}
        className={`
          overflow-hidden
          duration-1000 transition-all
          ease-in-out md:p-10
          preserve-3d shadow-xl rounded-xl ring-green-500

          ${isFlipped ? 'flipped' : ''}
          ${isFullscreen ? 'w-[90vw] h-[80vh] sm:w-[80vw] sm:h-[70vh] lg:w-[70vw] lg:h-[60vh]'
            : 'w-[250px] h-[300px] sm:w-[300px] lg:w-[350px]'}
          ${!isFullscreen && isFlipped ? 'cursor-not-allowed' : ''}
          ${isSelected ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'}
        `}
      >
        {/* Front */}
        {!isFlipped && (
          <div
            className={`
                absolute inset-0 backface-hidden rounded-xl p-4 bg-opacity-10
              bg-gradient-to-br from-green-600/30 to-cyan-600/20 overflow-hidden
              backdrop-blur-lg border border-white/20 
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
              text-white flipped overflow-y-scroll overflow-x-hidden
               inset-0 backface-hidden rounded-xl pt-12 pb-4 px-9
              duration-300 ease-in-out transition-all delay-200
              border border-white/20 w-full h-full backdrop-blur-lg 
              bg-gradient-to-br from-green-600/30 to-cyan-600/20
            `}
          >
            <div className="flex flex-col p-4 gap-4">
              <img
                src={project.image || './placeholder.png'}
                alt={project.title}
                className="m-auto h-48 rounded-md mt-4 shadow-md transition duration-500 ease-in-out
                hover:scale-105 hover:shadow-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className="flex-grow text-white
                          duration-300 ease-in-out transition-all delay-500
                          opacity-0 animate-fade-in
            ">
              {project.description}
            </p>

            <div className="flex mt-4 gap-2">
              {project.url && (
                <a
                  href={project.url}
                  className="rounded-lg px-4 py-2 bg-green-500 hover:bg-green-600 text-white transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  className="rounded-lg px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white transition-colors duration-300"
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
