import { useState } from 'react';
import data from '../../../public/data.json';
import { Experience } from '../Types';
import TagComponent from '../Common/Tag';

const ExperienceCard = ({ experience }: { experience: Experience }) => {
    return (
        <div className="flex w-full items-center space-x-4 sm:space-x-6 lg:space-x-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all hover:bg-gray-100 dark:hover:bg-gray-700 flex-col md:flex-row">
            <img
                src={experience.image || 'https://rubenlopes.uk/placeholder_image.png'}
                alt={experience.company}
                className="object-cover object-center w-52 md:w-48"
            />
            <div className="flex flex-col space-y-2">
            <h3> {experience.company}</h3>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">{experience.role}</h2>
                <p className="text-sm text-blue-500 dark:text-blue-400">
                                {new Date(experience.start).toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}
                                {' - '}
                                {new Date(experience.end).toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}
                            </p>
                <div className="flex flex-wrap mt-2 gap-2">
                    {experience.technologies && experience.technologies.map((tech, index) => (
                        <TagComponent key={index} tag={tech} />
                    ))}
                </div>
                <div className="mt-2 text-gray-600 dark:text-gray-400">
                <p className="text-gray-600 dark:text-gray-400 mt-2">{experience.description}</p>
                </div>
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
        <div className="flex flex-col items-center space-y-4 py-4 bg-gradient-to-b from-cyan-200 to-teal-300 dark:from-cyan-900 dark:to-teal-800 dark:text-white p-4">
            <h2 className="text-2xl font-semibold">{'Work Experience'}</h2>
            <p>Here is an overview of my professional experience.</p>

            <div className="flex flex-wrap justify-center gap-2">
                {uniqueTechnologies.map((tech: string, techIndex: number) => (
                    <TagComponent 
                        key={techIndex} 
                        tag={tech} 
                        onClick={() => setSelectedTech(tech === selectedTech ? null : tech)}
                        isSelected={tech === selectedTech}
                        className={selectedTech === tech ? 'text-white bg-blue-500' : ''}
                    />
                ))}
            </div>

            <div className="flex flex-col items-center space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredExperience.map((exp, index) => (
                        <ExperienceCard key={index} experience={exp} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;
