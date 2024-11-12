import React from 'react';
import { SiteInfo } from '../Types';
import TagComponent from '../Common/Tag';

const SiteInfoEditor: React.FC<{ siteInfo: SiteInfo; setSiteInfo: (info: SiteInfo) => void }> = ({ siteInfo, setSiteInfo }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setSiteInfo({ ...siteInfo, [name]: value });
    };

    const handleTagChange = (tagIndex: number, value: string) => {
        const updatedKeywords = [...siteInfo.keywords];
        updatedKeywords[tagIndex] = value;
        setSiteInfo({ ...siteInfo, keywords: updatedKeywords });
    };

    const addKeyword = () => {
        setSiteInfo({ ...siteInfo, keywords: [...siteInfo.keywords, ''] });
    };

    const removeKeyword = (tagIndex: number) => {
        setSiteInfo({ ...siteInfo, keywords: siteInfo.keywords.filter((_, i) => i !== tagIndex) });
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
        {/* "keywords */}
                <div>
                    <label htmlFor="image" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Image URL
                    </label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={siteInfo.image}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        placeholder="https://example.com/image.jpg"
                    />
                </div>
                
                {/* Keywords Section */}
                <div className="w-full">
                    <label htmlFor={`keywords`} className="block text-sm font-semibold text-gray-700 dark:text-gray-300 pb-2">Keywords</label>
                    <div className="flex p-2 space-x-2 flex-wrap gap-x-1 gap-y-2 bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700">
                        {siteInfo.keywords.map((tag: string, tagIndex: number) => (
                            <TagComponent 
                                key={tagIndex} 
                                tag={tag}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTagChange(tagIndex, e.target.value)} 
                                onRemove={() => removeKeyword(tagIndex)}
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={addKeyword}
                        className="mt-2 text-blue-500 hover:text-blue-600"
                    >
                        + Add Keyword
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SiteInfoEditor;