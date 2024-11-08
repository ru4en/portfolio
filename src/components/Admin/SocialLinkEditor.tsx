

import React from 'react';
import { SocialLink } from '../Types';



const SocialLinkEditor: React.FC<{ socials: SocialLink[], setSocials: React.Dispatch<React.SetStateAction<SocialLink[]>> }> = ({ socials, setSocials }) => {
    const handleSocialChange = (index: number, field: string, value: string) => {
        const updatedSocials = socials.map((social, i) => i === index ? { ...social, [field]: value } : social);
        setSocials(updatedSocials);
    };

    const addSocialLink = () => setSocials([...socials, { name: '', url: '' }]);
    const removeSocialLink = (index: number) => setSocials(socials.filter((_, i) => i !== index));

    return (
        <section>
            {socials.map((social, index) => (
                <div key={index}>
                    <label htmlFor={`social-name-${index}`}>Name</label>
                    <input
                        type="text"
                        id={`social-name-${index}`}
                        value={social.name}
                        onChange={(e) => handleSocialChange(index, 'name', e.target.value)}
                    />
                    <label htmlFor={`social-url-${index}`}>URL</label>
                    <input
                        type="text"
                        id={`social-url-${index}`}
                        value={social.url}
                        onChange={(e) => handleSocialChange(index, 'url', e.target.value)}
                    />
                    <button onClick={() => removeSocialLink(index)}>Remove</button>
                </div>
            ))}
            <button onClick={addSocialLink}>Add Social Link</button>
        </section>
    );
};


export default SocialLinkEditor;