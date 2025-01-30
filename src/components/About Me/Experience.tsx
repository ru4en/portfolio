import { useState } from 'react';
import data from '../../../public/data.json';
import { Experience } from '../Types';
import TagComponent from '../Common/Tag';

const ExperienceCard = ({ experience }: { experience: Experience }) => {
    return (
        <div className="group relative flex w-full items-center space-x-4 sm:space-x-6 lg:space-x-8 
            backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 
            rounded-xl p-6 
            shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]
            hover:shadow-[0_20px_50px_rgba(0,153,102,0.15)] dark:hover:shadow-[0_20px_50px_rgba(0,153,102,0.2)]
            transform perspective-1000 hover:scale-102 hover:-translate-y-2
            transition-all duration-500 ease-out animate-float
            border border-gray-200/50 dark:border-gray-700/50 hover:ring-4 ring-emerald-500/50 dark:ring-emerald-400/50
            hover:border-emerald-500/50 dark:hover:border-emerald-400/50
            flex-col md:flex-row">
            <img
                src={experience.image || 'https://rubenlopes.uk/placeholder_image.png'}
                alt={experience.company}
                className="object-cover object-center w-52 md:w-48 rounded-lg
                    grayscale brightness-[1.15] contrast-125 transform
                    dark:grayscale dark:brightness-[.75] dark:invert
                    transition-[filter,transform] duration-500 ease-out"
                />
            <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-bold bg-clip-text text-transparent 
                    bg-gradient-to-r from-emerald-600 to-cyan-500
                    group-hover:animate-text-shine">{experience.company}</h3>
                <h2 className="text-lg sm:text-xl font-semibold 
                    text-gray-800 dark:text-white
                    transform transition-all duration-300
                    group-hover:text-emerald-500 dark:group-hover:text-emerald-400">{experience.role}</h2>
                <p className="text-sm text-emerald-500 dark:text-emerald-400 font-medium">
                    {new Date(experience.start).toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}
                    {' - '}
                    {new Date(experience.end).toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}
                </p>
                <div className="flex flex-wrap gap-2">
                    {experience.technologies && experience.technologies.map((tech, index) => (
                        <TagComponent key={index} tag={tech} />
                    ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 
                    transition-all duration-300
                    group-hover:text-gray-800 dark:group-hover:text-gray-200">
                    {experience.description}
                </p>
            </div>
        </div>
    );
};

const ExperienceSection = () => {
    const experience = (data?.experience || []).map((exp: any) => ({
        ...exp,
        start: new Date(exp.start),
        end: new Date(exp.end),
    }));
    const [selectedTech, setSelectedTech] = useState<string | null>(null);

    const technologies = experience.reduce((acc: string[], exp: Experience) => {
        exp.technologies.forEach(tech => {
            if (!acc.includes(tech)) {
                acc.push(tech);
            }
        });
        return acc;
    }, []);

    const uniqueTechnologies: string[] = Array.from(new Set(technologies));

    const filteredExperience = selectedTech
        ? experience.filter((exp) => exp.technologies.includes(selectedTech))
        : experience;

    return (
        <div className="
            relative flex flex-col items-center justify-center w-full min-h-screen p-4 bg-emerald-50
            dark:bg-gray-950 text-gray-800 dark:text-gray-200
            transition-colors duration-300">

            <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent 
                bg-gradient-to-r from-emerald-600 via-emerald-500 to-cyan-500
                animate-text-shine m-8">
                Work Experience
            </h2>

            <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12
                max-w-2xl mx-auto animate-fade-in">
                Here is an overview of my professional experience.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {uniqueTechnologies.map((tech: string, techIndex: number) => (
                    <TagComponent 
                        key={techIndex} 
                        tag={tech} 
                        onClick={() => setSelectedTech(tech === selectedTech ? null : tech)}
                        isSelected={tech === selectedTech}
                        className={`transform transition-all duration-300 hover:scale-105
                            ${selectedTech === tech 
                                ? 'bg-emerald-500 text-white shadow-lg' 
                                : 'hover:bg-emerald-100 dark:hover:bg-emerald-900'}`}
                    />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mx-auto px-4">
                {filteredExperience.map((exp, index) => (
                    <ExperienceCard key={index} experience={exp} />
                ))}
            </div>
        </div>
    );
};

export default ExperienceSection;
