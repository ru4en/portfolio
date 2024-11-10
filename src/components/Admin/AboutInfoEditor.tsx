import React from 'react';
import { AboutInfo } from '../Types';

const AboutInfoEditor: React.FC<{
    aboutInfo: AboutInfo;
    setAboutInfo: (info: AboutInfo) => void;
}> = ({ aboutInfo, setAboutInfo }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setAboutInfo({ ...aboutInfo, [name]: value });
    };

    return (
        <section className="p-8 mb-8 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200">
            <div className="space-y-6">
                <div className="flex flex-col">
                    <label htmlFor="role" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Role
                    </label>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        value={aboutInfo.role}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-3 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        placeholder="Enter your role"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="description" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={aboutInfo.description}
                        onChange={handleChange}
                        rows={4}
                        className="mt-2 block w-full px-4 py-3 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        placeholder="Describe your role"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="image" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Image URL
                    </label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={aboutInfo.image}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-3 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        placeholder="https://example.com/image.jpg"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutInfoEditor;
