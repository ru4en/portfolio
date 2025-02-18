import { useState } from 'react';
import projectsData from '../../../public/data.json';
import { Project } from '../Types';
import Tag from '../Common/Tag';

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="w-[350px] min-h-[450px] p-3 bg-white dark:bg-gray-800
        flex flex-col border border-gray-200 dark:border-gray-700
        group hover:ring-4 cursor-pointer relative rounded-2xl ring-gray-500/30 dark:ring-cyan-700/30
        backdrop-blur-sm shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px]">
            <div className="bg-white dark:bg-gray-800 opacity-30 absolute inset-0 rounded-2xl z-[-1]" />
            <a href={project.url || project.repo} target="_blank" rel="noopener noreferrer">
                <img 
                    src={project.image || 'placeholder.png'} 
                    alt={project.title} 
                    className="rounded-lg w-full h-48 object-cover object-center shadow-md hover:shadow-lg transition duration-300
                    hover:scale-105 hover:translate-y-[-4px]"
                />
            </a>
            <h2 className="text-lg font-semibold mt-4 line-clamp-2">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 m-2 line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-1 mb-2 p-1 " style={{ maxHeight: '5rem', overflow: 'hidden' }}>
                {project.tags && project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex} tag={tag} />
                ))}
            </div>

            <div className="flex justify-between space-x-2 mt-auto">
                {project.url && project.repo ? (
                    <>
                        <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 break-normal  
                             focus:outline-none focus:ring-2 focus:ring-blue-500 text-center w-1/2 align-middle"
                        >
                            View Project
                        </a>
                        <a 
                            href={project.repo} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 text-center w-1/2"
                        >
                            View Code
                        </a>
                    </>
                ) : (
                    <a 
                        href={project.url || project.repo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center w-full"
                    >
                        {project.url ? "View Project" : "View Code"}
                    </a>
                )}
            </div>
        </div>
    );
}

const Projects = () => {
    const projects = projectsData?.projects || [];
    const skills = projectsData?.skills.map(skill => skill.name) || [];
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Generate a list of unique tags
    const tags = projects.reduce((acc: string[], project: Project) => {
        project.tags.forEach(tag => {
            if (!acc.includes(tag)) {
                acc.push(tag);
            }
        });
        return acc;
    }, []);

    const combinedTagsAndSkills = [...tags, ...skills];
    const uniqueTagsAndSkills = Array.from(new Set(combinedTagsAndSkills));
    const filteredProjects = selectedTag
        ? projects.filter((project) => project.tags.includes(selectedTag))
        : projects;

    return (
        <div className="flex flex-col items-center space-y-4 shadow-md py-4 from-gray-100
         transition-all duration-300 hover:shadow-lg
         bg-gradient-to-br dark:from-gray-900 dark:to-green-900 text-gray-800 to-gray-100
         dark:text-white transition-height">
            <h2 className="text-2xl font-semibold">{'</ Projects >'}</h2>
            <p>Here are some of the projects I have worked on.</p>

            {/* Projects Filter by Tags */}
            <div className="flex flex-wrap overflow-x-auto justify-center gap-2 p-5 md:px-20">
                {uniqueTagsAndSkills.map((tag, tagIndex) => (
                    <Tag 
                        key={tagIndex} 
                        tag={tag} 
                        onClick={() => setSelectedTag(selectedTag === tag ? null : tag)} 
                        className={selectedTag === tag ? 'bg-green-500 dark:bg-green-700 text-white' : ''}
                    />
                ))}
            </div>

            <div className="w-full overflow-x-auto transition-opacity duration-500">
                <div className="flex space-x-4 justify-center p-5" style={{ width: 'fit-content' }}>
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="transition-transform transform hover:scale-105 duration-300">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
