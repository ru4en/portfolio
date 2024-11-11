import { useState } from 'react';
import projectsData from '../../../public/data.json';
import { Project } from '../Types';
import Tag from '../Common/Tag';

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="w-[350px] flex flex-col p-4 rounded-lg shadow-md bg-gray-200 dark:bg-gray-800 dark:text-white min-h-[450px] hover:shadow-lg transition duration-300 transform hover:bg-gray-300 dark:hover:bg-gray-900">
            <a href={project.url || project.repo} target="_blank" rel="noopener noreferrer">
                <img 
                    src={project.image || 'https://rubenlopes.uk/placeholder_image.png'} 
                    alt={project.title} 
                    className="rounded-lg w-full h-48 object-cover object-center shadow-md hover:shadow-lg transition duration-300 hover:scale-105"
                />
            </a>
            <h2 className="text-lg font-semibold mt-4 line-clamp-2">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 m-2 line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-1 mb-2" style={{ maxHeight: '4rem', overflow: 'hidden' }}>
                {project.tags && project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex} tag={tag} />
                ))}
            </div>

            <div className="flex justify-between mt-4 space-x-2 mt-auto">
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

    // Merge tags and skills into one array
    const combinedTagsAndSkills = [...tags, ...skills];

    // Optionally, remove duplicates
    const uniqueTagsAndSkills = Array.from(new Set(combinedTagsAndSkills));

    // Filter projects based on the selected tag
    const filteredProjects = selectedTag
        ? projects.filter((project) => project.tags.includes(selectedTag))
        : projects;

    return (
        <div className="flex flex-col items-center space-y-4 shadow-md py-4 bg-gray-100 dark:bg-gray-950 dark:text-white h-[calc(100vh-4rem)]">
            <h2 className="text-2xl font-semibold">{'</ Projects >'}</h2>
            <p>Here are some of the projects I have worked on.</p>

            {/* Projects Filter by Tags */}
            <div className="flex flex-wrap overflow-x-auto justify-center gap-2 p-5 md:px-20">
                {uniqueTagsAndSkills.map((tag, tagIndex) => (
                    <Tag 
                        key={tagIndex} 
                        tag={tag} 
                        onClick={() => setSelectedTag(selectedTag === tag ? null : tag)} 
                        className={selectedTag === tag ? 'bg-blue-500 text-white dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800' : ''}
                    />
                ))}
            </div>

            <div className="w-full overflow-x-auto px-4">
                <div className="flex space-x-4 justify-center p-5" style={{ width: 'fit-content' }}>
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
