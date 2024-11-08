
import React from 'react';
import { SiteInfo } from '../Types';


const SiteInfoEditor: React.FC<{ siteInfo: SiteInfo, setSiteInfo: (info: SiteInfo) => void }> = ({ siteInfo, setSiteInfo }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSiteInfo({ ...siteInfo, [name]: value });
    }
    

    return (
        <section className="">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={siteInfo.title}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea 
                        type="text"
                        id="description"
                        name="description"
                        value={siteInfo.description}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={siteInfo.author}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
        </section>
    );
};


export default SiteInfoEditor;