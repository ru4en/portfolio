import React from 'react';
import { SocialLink } from '../Types';

const SocialLinkEditor: React.FC<{
    link: SocialLink;
    index: number;
    socials: SocialLink[];
    setSocials: React.Dispatch<React.SetStateAction<SocialLink[]>>;
}> = ({ link, index, socials, setSocials }) => {

    const handleInputChange = (field: keyof SocialLink, value: string) => {
        setSocials(socials.map((social, i) => 
            i === index ? { ...social, [field]: value } : social
        ));
    };

    const removeSocial = (index: number) => {
        // Remove social link at the given index
        const updatedSocials = socials.filter((_, i) => i !== index);
        setSocials(updatedSocials); // Update the state with the new array
    };

    return (
        <div className="p-6 mb-6 rounded-lg shadow-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
            <div className="flex flex-col space-y-4 w-full">
                <div className="w-full">
                    <label htmlFor={`name-${index}`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Name</label>
                    <input
                        id={`name-${index}`}
                        type="text"
                        value={link.name}
                        placeholder="e.g., GitHub"
                        className="mt-2 block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        aria-label="Social media platform name"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor={`url-${index}`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300">URL</label>
                    <input
                        id={`url-${index}`}
                        type="text"
                        value={link.url}
                        placeholder="https://example.com"
                        className="mt-2 block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        onChange={(e) => handleInputChange('url', e.target.value)}
                        aria-label="Social media platform URL"
                    />
                </div>
                <div>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-red-300 w-full"
                        onClick={() => removeSocial(index)}
                        aria-label="Remove social link"
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLinkEditor;
