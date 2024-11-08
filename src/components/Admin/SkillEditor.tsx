import React from 'react';
import { Skill } from '../Types';

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
        <div className="flex flex-col p-4 bg-white rounded-lg shadow-md mb-4 w-full">
            <div className="flex flex-col space-y-4 w-full">
                <div className="w-full">
                    <label htmlFor={`name-${index}`} className="text-sm font-medium text-gray-700">Skill Name</label>
                    <input
                        id={`name-${index}`}
                        type="text"
                        value={skill.name}
                        placeholder="e.g., JavaScript"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        aria-label="Skill name"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor={`level-${index}`} className="text-sm font-medium text-gray-700">Proficiency</label>
                    <input
                        id={`level-${index}`}
                        type="number"
                        value={skill.level}
                        placeholder="0-100"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        onChange={(e) => handleInputChange('level', e.target.value)}
                        aria-label="Skill proficiency"
                        min="0"
                        max="100"
                    />
                </div>
                <div>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-red-300 w-full"
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
