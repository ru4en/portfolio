import React from 'react';
import { AboutInfo } from '../Types';

const AboutInfoEditor: React.FC<{
    aboutInfo: AboutInfo
    setAboutInfo: (info: AboutInfo) => void
}> = ({ aboutInfo, setAboutInfo }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setAboutInfo({ ...aboutInfo, [name]: value });
    };
    return (
        <section className="space-y-4">
            <div>
                <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-1">
                    Role
                </label>
                <input
                    type="text"
                    id="role"
                    name="role"
                    value={aboutInfo.role}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-1">
                    Description
                </label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={aboutInfo.description}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            <div>
                <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-1">
                    Image
                </label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    value={aboutInfo.image}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>
        </section>
    );
};

export default AboutInfoEditor;
