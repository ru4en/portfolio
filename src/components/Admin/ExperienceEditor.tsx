import React from 'react';
import { Experience } from '../Types';
import TagComponent from '../Common/Tag';


const ExperienceEditor: React.FC<{
    experience: Experience;
    index: number;
    experiences: Experience[];
    setExperiences: React.Dispatch<React.SetStateAction<Experience[]>>;
}> = ({ experience, index, experiences, setExperiences }) => {

    const handleChange = (field: keyof Experience, value: string) => {
        const updatedExperiences = [...experiences];
        updatedExperiences[index] = { ...updatedExperiences[index], [field]: value };
        setExperiences(updatedExperiences);
    };

    const handleTagChange = (tagIndex: number, value: string) => {
        const updatedExperiences = [...experiences];
        updatedExperiences[index].technologies[tagIndex] = value;
        setExperiences(updatedExperiences);
    };

    const addTag = () => {
        const updatedExperiences = [...experiences];
        updatedExperiences[index].technologies.push('');
        setExperiences(updatedExperiences);
    };

    const removeTag = (tagIndex: number) => {
        const updatedExperiences = [...experiences];
        updatedExperiences[index].technologies = updatedExperiences[index].technologies.filter((_, i) => i !== tagIndex);
        setExperiences(updatedExperiences);
    };

    const removeExperience = () => {
        const updatedExperiences = experiences.filter((_, i) => i !== index);
        setExperiences(updatedExperiences);
    };

    return (
        <div className="p-6 mb-6 rounded-lg shadow-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
            <div className="space-y-4">
                <div className="w-full">
                    <label htmlFor={`role-${index}`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Role</label>
                    <input
                        id={`role-${index}`}
                        type="text"
                        value={experience.role}
                        placeholder="e.g., Software Engineer"
                        className="mt-2 block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        onChange={(e) => handleChange('role', e.target.value)}
                        aria-label="Role"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor={`company-${index}`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Company</label>
                    <input
                        id={`company-${index}`}
                        type="text"
                        value={experience.company}
                        placeholder="e.g., Google"
                        className="mt-2 block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        onChange={(e) => handleChange('company', e.target.value)}
                        aria-label="Company"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor={`start-${index}`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Start Date</label>
                    <input
                        id={`start-${index}`}
                        type="text"
                        value={experience.start}
                        placeholder="e.g., January 2020"
                        className="mt-2 block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        onChange={(e) => handleChange('start', e.target.value)}
                        aria-label="Start Date"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor={`end-${index}`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">End Date</label>
                    <input
                        id={`end-${index}`}
                        type="text"
                        value={experience.end}
                        placeholder="e.g., January 2021"
                        className="mt-2 block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        onChange={(e) => handleChange('end', e.target.value)}
                        aria-label="End Date"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor={`image-${index}`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Image URL</label>
                    <input
                        id={`image-${index}`}
                        type="text"
                        value={experience.image}
                        placeholder="https://example.com/image.jpg"
                        className="mt-2 block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        onChange={(e) => handleChange('image', e.target.value)}
                        aria-label="Image URL"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor={`description-${index}`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Description</label>
                    <textarea
                        id={`description-${index}`}
                        value={experience.description}
                        placeholder="Describe your experience"
                        className="mt-2 block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        onChange={(e) => handleChange('description', e.target.value)}
                        aria-label="Description"
                    />
                </div>


                                {/* Tags Section */}
                                <div className="w-full">
                    <label htmlFor={`tags`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Tags</label>
                    <div className="flex flex-wrap space-x-2 mt-2">
                        {experience.technologies.map((tag, tagIndex) => (
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
                <button
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-red-300"
                    onClick={removeExperience}
                    aria-label="Remove experience"
                >
                    Remove Experience
                </button>
            </div>
        </div>
    );
}

export default ExperienceEditor;
