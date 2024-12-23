import { useState } from 'react';
import data from '../../../public/data.json';
import { Module } from '../Types';

const Education = () => {
    const education = data.education;
    return (
        <div className="py-16 px-4 md:px-8 bg-gradient-to-t from-cyan-200 to-white dark:from-cyan-900 dark:to-gray-800">
            <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8">Education</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-4">
                {education.map((edu, index) => (
                    <div key={index} className="flex p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg pt-6 transition-all hover:bg-gray-50 dark:hover:bg-gray-700 flex-col overflow-hidden">
                        <img
                            src={edu.image}
                            alt={edu.school}
                            className="object-cover object-center w-52 md:w-48"
                        />
                        <div className="space-y-2">
                            <h3 className="text-sm text-gray-500 dark:text-gray-400 pt-2">{edu.school}</h3>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">{edu.degree}</h2>
                            <p className="text-sm text-blue-500 dark:text-blue-400">
                                {new Date(edu.start).toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}
                                {' - '}
                                {new Date(edu.end).toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}
                            </p>
                            {edu.grade && (
                                <p className="text-sm rounded-lg px-2 py-1 inline-block w-max ring-2 ring-blue-500 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white cursor-pointer">
                                    {'Grade: '}
                                    {edu.grade}
                                </p>
                            )}
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 m-4">{edu.description}</p>

                            {/* Modules Section */}
                            <ModuleSection modules={edu.modules} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ModuleSection = ({ modules }: { modules: Module[] }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="w-full bg-gray-100 dark:bg-gray-900 mt-4 transition-all duration-300 ease-in-out p-2 rounded-lg cursor-pointer opacity-80 hover:opacity-100"
            onClick={() => setIsVisible(!isVisible)} // Toggle visibility when the div is clicked
        >
            <button
                className="text-blue-500 dark:text-blue-400 font-semibold m-1 text-lg"
                onClick={(e) => {
                    e.stopPropagation(); // Prevent the button click from triggering the div's onClick
                    setIsVisible(!isVisible);
                }}
            >
                {isVisible ? 'Hide Modules' : 'Show Modules'}
            </button>
            {/* Conditionally render modules */}
            {isVisible && (
                <ul className="flex flex-wrap mt-2 gap-2 sm:flex-row flex-col w-full justify-center">
                    {modules.map((module, index) => (
                        <li
                            key={index}
                            className="text-xs text-gray-600 dark:text-gray-400 md:text-sm w-full break-words sm:w-auto"
                        >
                            <span className="font-semibold sm:ring-2 ring-blue-500 rounded-lg px-2 py-1 sm:inline-block w-auto text-blue-500 dark:text-blue-400
                                hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white cursor-pointer">
                                {module.name}:
                                <span className="m-2 text-gray-600 dark:text-gray-400">{module.grade}</span>
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Education;
