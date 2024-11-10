import React, { useCallback } from 'react';
import { Project } from '../Types';
import TagComponent from '../Common/Tag';

const ProjectEditor: React.FC<{
    project: Project;
    index: number;
    projects: Project[];
    setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}> = ({ project, index, projects, setProjects }) => {

    // Handle changes for the general project fields (title, description, etc.)
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const updatedProjects = [...projects];
        updatedProjects[index] = { ...updatedProjects[index], [e.target.name]: e.target.value };
        setProjects(updatedProjects);
    }, [projects, index, setProjects]);

    // Handle changes for tags
    const handleTagChange = useCallback((tagIndex: number, value: string) => {
        const updatedProjects = [...projects];
        updatedProjects[index].tags[tagIndex] = value;
        setProjects(updatedProjects);
    }, [projects, index, setProjects]);

    // Add a new tag
    const addTag = useCallback(() => {
        const updatedProjects = [...projects];
        updatedProjects[index].tags.push('');
        setProjects(updatedProjects);
    }, [projects, index, setProjects]);

    // Remove a tag
    const removeTag = useCallback((tagIndex: number) => {
        const updatedProjects = [...projects];
        updatedProjects[index].tags = updatedProjects[index].tags.filter((_, i) => i !== tagIndex);
        setProjects(updatedProjects);
    }, [projects, index, setProjects]);

    // Remove the project
    const removeProject = useCallback(() => {
        const updatedProjects = projects.filter((_, i) => i !== index);
        setProjects(updatedProjects);
    }, [projects, index, setProjects]);

    return (
        <div className="p-6 mb-6 rounded-lg shadow-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
            <div className="space-y-4">
                {/* Title */}
                <div className="w-full">
                    <label htmlFor={`title`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Title</label>
                    <input
                        id={`title`}
                        type="text"
                        name="title"
                        value={project.title}
                        className="mt-2 block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        onChange={handleChange}
                        aria-label="Project title"
                    />
                </div>

                {/* Description */}
                <div className="w-full">
                    <label htmlFor={`description`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Description</label>
                    <textarea
                        id={`description`}
                        name="description"
                        value={project.description}
                        className="mt-2 block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        onChange={handleChange}
                        aria-label="Project description"
                    />
                </div>

                {/* Image */}
                <div className="w-full">
                    <label htmlFor={`image`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Image URL</label>
                    <input
                        id={`image`}
                        type="text"
                        name="image"
                        value={project.image}
                        className="mt-2 block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        onChange={handleChange}
                        aria-label="Project image URL"
                    />
                </div>

                {/* URL */}
                <div className="w-full">
                    <label htmlFor={`url`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Project URL</label>
                    <input
                        id={`url`}
                        type="text"
                        name="url"
                        value={project.url}
                        className="mt-2 block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        onChange={handleChange}
                        aria-label="Project URL"
                    />
                </div>

                {/* Repository URL */}
                <div className="w-full">
                    <label htmlFor={`repo`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Repository URL</label>
                    <input
                        id={`repo`}
                        type="text"
                        name="repo"
                        value={project.repo}
                        className="mt-2 block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        onChange={handleChange}
                        aria-label="Project repository URL"
                    />
                </div>

                {/* Tags Section */}
                <div className="w-full">
                    <label htmlFor={`tags`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Tags</label>
                    <div className="flex flex-wrap space-x-2 mt-2">
                        {project.tags.map((tag: string, tagIndex: number) => (
                            <TagComponent 
                                key={tagIndex} 
                                tag={tag} 
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTagChange(tagIndex, e.target.value)} 
                                onRemove={() => removeTag(tagIndex)} 
                            />
                        ))}
                    </div>
                    <button type="button" onClick={addTag} className="mt-2 text-blue-500">+ Add Tag</button>
                </div>

                {/* Remove Project Button */}
                <button
                    onClick={removeProject}
                    className="mt-4 px-4 py-2 text-sm font-semibold text-red-600 border border-red-600 rounded-lg"
                >
                    Remove Project
                </button>
            </div>
        </div>
    );
};

export default ProjectEditor;
