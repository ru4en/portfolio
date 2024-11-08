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
        <div className="flex flex-col p-4 bg-white rounded-lg shadow-md mb-4 w-full">
            <div className="flex flex-col space-y-4 w-full">
                <div className="w-full">
                    <label htmlFor={`name-${index}`} className="text-sm font-medium text-gray-700">Platform Name</label>
                    <input
                        id={`name-${index}`}
                        type="text"
                        value={link.name}
                        placeholder="e.g., GitHub"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        aria-label="Social media platform name"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor={`url-${index}`} className="text-sm font-medium text-gray-700">URL</label>
                    <input
                        id={`url-${index}`}
                        type="text"
                        value={link.url}
                        placeholder="https://example.com"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
