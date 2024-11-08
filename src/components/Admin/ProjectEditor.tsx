import React from 'react';
import { Project } from '../Types';

const ProjectEditor: React.FC<{
    project: Project;
    index: number;
    projects: Project[];
    setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}> = ({ project, index, projects, setProjects }) => {

    // Handle changes for the general project fields (title, description, etc.)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const updatedProjects = [...projects];
        updatedProjects[index] = { ...updatedProjects[index], [e.target.name]: e.target.value };
        setProjects(updatedProjects);
    };

    // Handle changes for tags
    const handleTagChange = (tagIndex: number, value: string) => {
        const updatedProjects = [...projects];
        updatedProjects[index].tags[tagIndex] = value;
        setProjects(updatedProjects);
    };

    // Add a new tag
    const addTag = () => {
        const updatedProjects = [...projects];
        updatedProjects[index].tags.push('');
        setProjects(updatedProjects);
    };

    // Remove a tag
    const removeTag = (tagIndex: number) => {
        const updatedProjects = [...projects];
        updatedProjects[index].tags = updatedProjects[index].tags.filter((_, i) => i !== tagIndex);
        setProjects(updatedProjects);
    };

    // Remove the project
    const removeProject = () => {
        const updatedProjects = projects.filter((_, i) => i !== index);
        setProjects(updatedProjects);
    };

    return (
        <div className="flex flex-col p-4 bg-white rounded-lg shadow-md mb-4 w-full">
            <div className="flex flex-col space-y-4 w-full">
                {/* Title */}
                <div className="w-full">
                    <label htmlFor={`title`} className="text-sm font-medium text-gray-700">Title</label>
                    <input
                        id={`title`}
                        type="text"
                        name="title"
                        value={project.title}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        onChange={handleChange}
                        aria-label="Project title"
                    />
                </div>

                {/* Description */}
                <div className="w-full">
                    <label htmlFor={`description`} className="text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        id={`description`}
                        name="description"
                        value={project.description}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        onChange={handleChange}
                        aria-label="Project description"
                    />
                </div>

                {/* Image */}
                <div className="w-full">
                    <label htmlFor={`image`} className="text-sm font-medium text-gray-700">Image</label>
                    <input
                        id={`image`}
                        type="text"
                        name="image"
                        value={project.image}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        onChange={handleChange}
                        aria-label="Project image URL"
                    />
                </div>

                {/* URL */}
                <div className="w-full">
                    <label htmlFor={`url`} className="text-sm font-medium text-gray-700">URL</label>
                    <input
                        id={`url`}
                        type="text"
                        name="url"
                        value={project.url}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        onChange={handleChange}
                        aria-label="Project URL"
                    />
                </div>

                {/* Repository URL */}
                <div className="w-full">
                    <label htmlFor={`repo`} className="text-sm font-medium text-gray-700">Repository URL</label>
                    <input
                        id={`repo`}
                        type="text"
                        name="repo"
                        value={project.repo}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        onChange={handleChange}
                        aria-label="Project repository URL"
                    />
                </div>

                {/* Tags Section */}
                <div className="w-full">
                    <label htmlFor={`tags`} className="text-sm font-medium text-gray-700">Tags</label>
                    <div className="flex flex-wrap space-x-2 mt-2">
                        {project.tags.map((tag, tagIndex) => (
                            <div key={tagIndex} className="flex items-center space-x-2">
                                <input
                                    id={`tag-${tagIndex}`}
                                    type="text"
                                    value={tag}
                                    className="p-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-100"
                                    onChange={(e) => handleTagChange(tagIndex, e.target.value)} // Update specific tag
                                    aria-label="Project tag"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeTag(tagIndex)} // Remove specific tag
                                    className="text-red-500 hover:text-red-700"
                                >
                                    &times;
                                </button>
                            </div>
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={addTag} // Add a new empty tag
                        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
                    >
                        Add Tag
                    </button>
                </div>

                {/* Remove Project Button */}
                <button
                    type="button"
                    onClick={removeProject}
                    className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl"
                >
                    Remove Project
                </button>
            </div>
        </div>
    );
};

export default ProjectEditor;
