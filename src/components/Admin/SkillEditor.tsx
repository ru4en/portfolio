import React from 'react';
import { Skill } from '../Types';
import SuperIcons from '../Common/SuperIcons';

const SkillEditor: React.FC<{
    skill: Skill;
    index: number;
    skills: Skill[];
    setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
}> = ({ skill, index, skills, setSkills }) => {

    const handleInputChange = (field: keyof Skill, value: string | number) => {
        // Update the skill at the specific index
        const updatedSkills = [...skills];
        updatedSkills[index] = { ...updatedSkills[index], [field]: field === 'level' ? Number(value) : value };
        setSkills(updatedSkills);
    };

    const removeSkill = (index: number) => {
        // Remove skill at the given index
        const updatedSkills = skills.filter((_, i) => i !== index);
        setSkills(updatedSkills); // Update the state with the new array
    };

    return (
        <div className="p-6 mb-6 rounded-lg shadow-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
            <div className="flex flex-col space-y-4 w-full">
                <SuperIcons name={skill.name} className="text-gray-800 dark:text-white" size="xl" />
                <div className="w-full">
                    <label htmlFor={`name-${index}`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Skill Name</label>
                    <input
                        id={`name-${index}`}
                        type="text"
                        value={skill.name}
                        placeholder="e.g., JavaScript"
                        className="mt-2 block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        aria-label="Skill name"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor={`level-${index}`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Proficiency</label>
                    <div className="flex justify-between items-center">
                    <input
                        id={`level-${index}`}
                        type="range"
                        value={skill.level}
                        min="1"
                        max="10"
                        step="1"
                        onChange={(e) => handleInputChange('level', Number(e.target.value))}
                        className="w-full mt-2"
                        aria-label="Skill proficiency level"
                    />

                    <span className="ml-4 mt-2 font-medium text-gray-800 dark:text-gray-200">
                    {skill.level}
                    </span>
                    </div>
                </div>
                <div>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-red-300"
                        onClick={() => removeSkill(index)}
                        aria-label="Remove skill"
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SkillEditor;
