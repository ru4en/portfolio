import { useState } from 'react';
import data from '../../../public/data.json';
import { Experience } from '../Types';
import Tag from '../Common/Tag';

const ExperienceCard = ({ experience }: { experience: Experience }) => {
    return (
        <div className="w-[350px] flex flex-col p-4 rounded-lg shadow-md bg-gray-200 dark:bg-gray-800 dark:text-white min-h-[400px] hover:shadow-lg transition duration-300 transform hover:bg-gray-300 dark:hover:bg-gray-900">
            <img 
                src={experience.image || 'https://rubenlopes.uk/placeholder_image.png'} 
                alt={experience.company} 
                className="rounded-lg w-full h-48 object-cover object-center shadow-md hover:shadow-lg transition duration-300 hover:scale-105"
            />
            <h2 className="text-lg font-semibold mt-4 line-clamp-2">{experience.role} at {experience.company}</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">{experience.description}</p>
            <div className="flex flex-wrap mt-2" style={{ maxHeight: '4rem', overflow: 'hidden' }}>
                {experience.technologies && experience.technologies.map((tech, index) => (
                    <Tag key={index} tag={tech} />
                ))}
            </div>
            <div className="mt-2 text-gray-600 dark:text-gray-400">
                <p>{experience.start} - {experience.end}</p>
            </div>
        </div>
    );
};

const ExperienceSection = () => {
    const experience = data?.experience || [];
    const [selectedTech, setSelectedTech] = useState<string | null>(null);

    // Generate a list of unique technologies
    const technologies = experience.reduce((acc: string[], exp: Experience) => {
        exp.technologies.forEach(tech => {
            if (!acc.includes(tech)) {
                acc.push(tech);
            }
        });
        return acc;
    }, []);

    // Optionally, remove duplicates
    const uniqueTechnologies = Array.from(new Set(technologies));

    // Filter experience based on the selected technology
    const filteredExperience = selectedTech
        ? experience.filter((exp) => exp.technologies.includes(selectedTech))
        : experience;

    return (
        <div className="flex flex-col items-center space-y-4 shadow-md py-4 bg-gray-100 dark:bg-gray-950 dark:text-white">
            <h2 className="text-2xl font-semibold">{'</ Experience >'}</h2>
            <p>Here is an overview of my professional experience.</p>

            {/* Technologies Filter */}
            <div className="flex flex-wrap justify-center space-x-2">
                {uniqueTechnologies.map((tech, techIndex) => (
                    <Tag 
                        key={techIndex} 
                        tag={tech} 
                        onClick={() => setSelectedTech(selectedTech === tech ? null : tech)} 
                        className={selectedTech === tech ? 'bg-blue-500 text-white dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800' : ''}
                    />
                ))}
            </div>

            <div className="w-full overflow-x-auto px-4">  
                <div className="flex space-x-4 justify-center p-5" style={{ width: 'fit-content' }}>
                    {filteredExperience.map((exp, index) => (
                        <ExperienceCard key={index} experience={exp} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;
