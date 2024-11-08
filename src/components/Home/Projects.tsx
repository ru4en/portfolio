import projectsData from '../../../public/data.json';

const Projects = () => {
    console.log("Projects Data:", projectsData);

    const projects = projectsData.projects;

    return (
        <div className="flex flex-col items-center space-y-4 py-4">
            <h1 className="text-2xl font-semibold">Projects</h1>
            <p>Here are some of the projects I have worked on.</p>
            <div className="w-full overflow-x-auto px-4">  {/* Horizontal scroll for smaller screens */}
                <div className="flex space-x-4 justify-center"> {/* Centered scrollable layout */}
                    {projects.map((project, index) => (
                        <div key={index} className="min-w-[280px] flex flex-col p-4 bg-white rounded-lg shadow-md">
                            <img 
                                src={project.image || 'path/to/default-icon.png'}  // Default icon if image is missing
                                alt={project.title} 
                                className="w-full h-48 object-cover object-center rounded-md" 
                            />
                            <h2 className="text-lg font-semibold mt-4">{project.title}</h2>
                            <p className="text-gray-600">{project.description}</p>
                            <a href={project.url} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline mt-2">View project</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
