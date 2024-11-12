import React from 'react';
import { Education } from '../Types';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EducationEditor: React.FC<{
    education: Education;
    index: number;
    educations: Education[];
    setEducations: React.Dispatch<React.SetStateAction<Education[]>>;
}> = ({ education, index, educations, setEducations }) => {

    const handleInputChange = (field: keyof Education, value: string) => {
        const updatedEducations = [...educations];
        updatedEducations[index] = { ...updatedEducations[index], [field]: value };
        setEducations(updatedEducations);
    };

    const removeEducation = (index: number) => {
        const updatedEducations = educations.filter((_, i) => i !== index);
        setEducations(updatedEducations);
    };

    const addModule = () => {
        const updatedEducations = [...educations];
        const newModule = { name: '', grade: '' };
        updatedEducations[index] = {
            ...updatedEducations[index],
            modules: [...updatedEducations[index].modules, newModule],
        };
        setEducations(updatedEducations);
    };

    const removeModule = (moduleIndex: number) => {
        const updatedEducations = [...educations];
        updatedEducations[index] = {
            ...updatedEducations[index],
            modules: updatedEducations[index].modules.filter((_, i) => i !== moduleIndex),
        };
        setEducations(updatedEducations);
    };

    const handleModuleChange = (moduleIndex: number, field: 'name' | 'grade', value: string) => {
        const updatedEducations = [...educations];
        const updatedModules = [...updatedEducations[index].modules];
        updatedModules[moduleIndex] = { ...updatedModules[moduleIndex], [field]: value };
        updatedEducations[index].modules = updatedModules;
        setEducations(updatedEducations);
    };

    return (
        <div className="p-6 mb-6 rounded-lg shadow-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
            <div className="flex flex-col space-y-4 w-full">
                <div className="w-full">
                    <label htmlFor={`school-${index}`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        School
                    </label>
                    <input
                        id={`school-${index}`}
                        type="text"
                        value={education.school}
                        placeholder="e.g., University of Reading"
                        className="mt-2 block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        onChange={(e) => handleInputChange('school', e.target.value)}
                        aria-label="School name"
                    />
                </div>
    
                <div className="w-full">
                    <label htmlFor={`degree-${index}`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Degree
                    </label>
                    <input
                        id={`degree-${index}`}
                        type="text"
                        value={education.degree}
                        placeholder="e.g., BSc Computer Science"
                        className="mt-2 block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        onChange={(e) => handleInputChange('degree', e.target.value)}
                        aria-label="Degree"
                    />
                </div>
    
                <div className="w-full">
                    <label htmlFor={`graduation-${index}`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Graduation Year
                    </label>
                    <div className="flex flex-col sm:flex-row sm:space-x-4">
                        <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 pt-2">Start Date</label>
                        <input
                            id={`start-${index}`}
                            type="date"
                            value={
                                typeof education.start === "string" 
                                    ? education.start.split('T')[0]
                                    : education.start?.toISOString().split('T')[0] || ''
                                }
                            className="block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                            onChange={(e) => handleInputChange('start', e.target.value)}
                            aria-label="Start Date"
                        />
                        <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">End Date</label>
                        <input
                            id={`end-${index}`}
                            type="date"
                            // @ts-ignore
                            value={
                                typeof education.end === "string" 
                                    ? education.end.split('T')[0]
                                    : education.end?.toISOString().split('T')[0] || ''
                                }
                            className="block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                            onChange={(e) => handleInputChange('end', e.target.value)}
                            aria-label="End Date"
                        />
                    </div>
                </div>
    
                <div className="w-full">
                    <label htmlFor={`description-${index}`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Description
                    </label>
                    <textarea
                        id={`description-${index}`}
                        value={education.description}
                        placeholder="e.g., Summa Cum Laude"
                        className="mt-2 block w-full px-4 py-2 h-28 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        aria-label="Description"
                    />
                </div>
    
                <div className="w-full">
                    <label htmlFor={`grade-${index}`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Grade
                    </label>
                    <input
                        id={`grade-${index}`}
                        type="text"
                        value={education.grade}
                        placeholder="e.g., First"
                        className="mt-2 block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        onChange={(e) => handleInputChange('grade', e.target.value)}
                        aria-label="Grade"
                    />
                </div>
    
                <div className="w-full">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Modules</label>
                    {education.modules.map((module, i) => (
                        <div className="flex row mt-2" key={`${index}-module-${i}`}>
                            <input
                                type="text"
                                value={module.name}
                                placeholder="Module Name"
                                className="w-full px-4 py-2 rounded-l-xl shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                                onChange={(e) => handleModuleChange(i, 'name', e.target.value)}
                                aria-label="Module name"
                            />
                            <input
                                type="text"
                                value={module.grade}
                                placeholder="Grade"
                                className="w-full px-4 py-2 shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                                onChange={(e) => handleModuleChange(i, 'grade', e.target.value)}
                                aria-label="Module grade"
                            />
                            <button
                                className="border shadow-sm border-gray-300 dark:border-gray-700 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-r-xl font-semibold focus:outline-none focus:ring-2 focus:ring-red-300"
                                onClick={() => removeModule(i)}
                                aria-label="Remove module"
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    ))}
                    <button
                        className="mt-2 text-blue-500 hover:text-blue-600"
                        onClick={addModule}
                        aria-label="Add module"
                    >
                        + Add Module
                    </button>
                </div>
    
                <div>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-red-300"
                        onClick={() => removeEducation(index)}
                        aria-label="Remove education"
                    >
                        Remove Education
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EducationEditor;
