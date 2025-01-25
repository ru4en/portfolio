import { useState } from 'react';
import data from '../../../public/data.json';
import { Module } from '../Types';

const Education = () => {
    const education = data.education;
    return (
        <div className="relative flex flex-col items-center justify-center p-9 min-h-screen
            bg-gradient-to-br from-white via-gray-50 to-white
            dark:from-black dark:via-gray-900 dark:to-black">


            <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent 
                bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500
                animate-text-shine m-8">
                Education
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full  mx-auto px-4">
                {education.map((edu, index) => (
                    <div key={index} 
                        className="group relative flex flex-col space-y-4 p-8
                            rounded-xl backdrop-blur-xl
                            bg-white/80 dark:bg-gray-800/80
                            shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                            dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]
                            hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]
                            dark:hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)]
                            transform perspective-1000
                            hover:scale-105 hover:-translate-y-2
                            transition-all duration-500 ease-out
                            animate-float hover:ring-4
                            border border-gray-200/50 dark:border-gray-700/50
                            hover:border-blue-500/50 dark:hover:border-blue-400/50">
                        
                        <img
                            src={edu.image}
                            alt={edu.school}
                                            className="object-cover object-center w-52 md:w-48 rounded-lg
                                transform transition-all duration-500
                                grayscale brightness-[0.15] contrast-125
                                dark:grayscale dark:brightness-[0] dark:invert
                                transition-[filter,transform] duration-500 ease-out"
                        />

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold bg-clip-text text-transparent 
                                bg-gradient-to-r from-blue-600 to-cyan-500
                                group-hover:animate-text-shine">{edu.school}</h3>
                            
                            <h2 className="text-lg sm:text-xl font-semibold 
                                text-gray-800 dark:text-white
                                transform transition-all duration-300
                                group-hover:text-blue-500 dark:group-hover:text-blue-400">{edu.degree}</h2>
                            
                            <p className="text-sm text-blue-500 dark:text-blue-400 font-medium">
                                {new Date(edu.start).toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}
                                {' - '}
                                {new Date(edu.end).toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}
                            </p>

                            {edu.grade && (
                                <span className="inline-block px-3 py-1 text-sm font-medium
                                    bg-blue-500/10 dark:bg-blue-400/10
                                    text-blue-500 dark:text-blue-400
                                    rounded-full border border-blue-500/20 dark:border-blue-400/20
                                    group-hover:bg-blue-500 group-hover:text-white
                                    dark:group-hover:bg-blue-400 dark:group-hover:text-white
                                    transition-all duration-300">
                                    Grade: {edu.grade}
                                </span>
                            )}

                            <p className="text-gray-600 dark:text-gray-400 
                                transition-all duration-300
                                group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                {edu.description}
                            </p>

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
        <div className="w-full transition-all duration-500 ease-in-out">
            <button
                onClick={() => setIsVisible(!isVisible)}
                className="w-full p-3 rounded-lg
                    bg-blue-500/10 dark:bg-blue-400/10
                    text-blue-500 dark:text-blue-400
                    hover:bg-blue-500 hover:text-white
                    dark:hover:bg-blue-400 dark:hover:text-white
                    transition-all duration-300
                    font-semibold text-lg
                    flex items-center justify-between">
                {isVisible ? 'Hide Modules' : 'Show Modules'}
                <span className={`transform transition-transform duration-300 ${isVisible ? 'rotate-180' : ''}`}>
                    ↓
                </span>
            </button>

            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4
                transition-all duration-500 ease-in-out
                ${isVisible ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                {modules.map((module, index) => (
                    <div key={index}
                        className="p-2 rounded-lg
                            bg-blue-500/5 dark:bg-blue-400/5
                            hover:bg-blue-500/10 dark:hover:bg-blue-400/10
                            transition-all duration-300 hover:ring-4 cursor-pointer
                            border border-blue-500/20 dark:border-blue-400/20">
                        <h4 className="text-sm font-medium text-blue-500 dark:text-blue-400">
                            {module.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Grade: {module.grade}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;