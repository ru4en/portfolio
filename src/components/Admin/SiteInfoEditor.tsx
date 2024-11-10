import React from 'react';
import { SiteInfo } from '../Types';

const SiteInfoEditor: React.FC<{ siteInfo: SiteInfo; setSiteInfo: (info: SiteInfo) => void }> = ({ siteInfo, setSiteInfo }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setSiteInfo({ ...siteInfo, [name]: value });
    };

    return (
        <div className="p-6 mb-6 rounded-lg shadow-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
            <div className="space-y-5">
                {/* Title Input */}
                <div>
                    <label htmlFor="title" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={siteInfo.title}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        placeholder="Enter site title"
                    />
                </div>

                {/* Description Textarea */}
                <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={siteInfo.description}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 h-28 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        placeholder="Enter site description"
                    />
                </div>

                {/* Author Input */}
                <div>
                    <label htmlFor="author" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Author
                    </label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={siteInfo.author}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        placeholder="Enter author name"
                    />
                </div>
            </div>
        </div>
    );
};

export default SiteInfoEditor;
