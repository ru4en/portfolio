import React from 'react';
import { SiteInfo } from '../Types';

const SiteInfoEditor: React.FC<{ siteInfo: SiteInfo; setSiteInfo: (info: SiteInfo) => void }> = ({ siteInfo, setSiteInfo }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setSiteInfo({ ...siteInfo, [name]: value });
    };

    const handleAlertChange = (index: number, field: string, value: string) => {
        const updatedAlerts = [...siteInfo.alerts];
        updatedAlerts[index] = { ...updatedAlerts[index], [field]: value };
        setSiteInfo({ ...siteInfo, alerts: updatedAlerts });
    };

    const addAlert = () => {
        const newAlert = {
            title: "",
            message: "",
            link: "",
            type: "default",
            position: "bottom-center"
        };
        setSiteInfo({ ...siteInfo, alerts: [...siteInfo.alerts, newAlert] });
    };

    const removeAlert = (index: number) => {
        const updatedAlerts = siteInfo.alerts.filter((_, i) => i !== index);
        setSiteInfo({ ...siteInfo, alerts: updatedAlerts });
    };

    const getAlertColorClasses = (type: string) => {
        switch (type) {
            case 'info':
                return 'border-blue-300 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20';
            case 'warning':
                return 'border-yellow-300 dark:border-yellow-600 bg-yellow-50 dark:bg-yellow-900/20';
            case 'error':
                return 'border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20';
            case 'success':
                return 'border-green-300 dark:border-green-600 bg-green-50 dark:bg-green-900/20';
            default:
                return 'border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700';
        }
    };

    return (
        <div className="p-6 mb-6 rounded-lg shadow-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
            <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200">Site Information Editor</h2>
            
            <div className="space-y-5">
                {/* Welcome Message */}
                <div>
                    <label htmlFor="welcome" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Welcome Message
                    </label>
                    <textarea
                        id="welcome"
                        name="welcome"
                        value={siteInfo.welcome}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 h-24 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        placeholder="Enter welcome message"
                    />
                </div>

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

                {/* Job Title */}
                <div>
                    <label htmlFor="job" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Job Title
                    </label>
                    <input
                        type="text"
                        id="job"
                        name="job"
                        value={siteInfo.job}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 dark:text-gray-100"
                        placeholder="Enter job title"
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

                {/* Alerts Section */}
                <div>
                    <div className="flex justify-between items-center mb-3">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Alerts
                        </label>
                        <button
                            type="button"
                            onClick={addAlert}
                            className="px-3 py-1 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Add Alert
                        </button>
                    </div>
                    
                    {siteInfo.alerts.map((alert, index) => (
                        <div key={index} className={`p-4 mb-4 border rounded-lg ${getAlertColorClasses(alert.type)}`}>
                            <div className="flex justify-between items-center mb-3">
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Alert {index + 1}</h4>
                                <button
                                    type="button"
                                    onClick={() => removeAlert(index)}
                                    className="px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                                >
                                    Remove
                                </button>
                            </div>
                            
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        value={alert.title}
                                        onChange={(e) => handleAlertChange(index, 'title', e.target.value)}
                                        className="w-full px-3 py-2 text-sm rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-100"
                                        placeholder="Alert title"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        value={alert.message}
                                        onChange={(e) => handleAlertChange(index, 'message', e.target.value)}
                                        className="w-full px-3 py-2 text-sm h-20 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-100"
                                        placeholder="Alert message"
                                    />
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                                            Link
                                        </label>
                                        <input
                                            type="text"
                                            value={alert.link}
                                            onChange={(e) => handleAlertChange(index, 'link', e.target.value)}
                                            className="w-full px-3 py-2 text-sm rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-100"
                                            placeholder="Alert link"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                                            Type
                                        </label>
                                        <select
                                            value={alert.type}
                                            onChange={(e) => handleAlertChange(index, 'type', e.target.value)}
                                            className="w-full px-3 py-2 text-sm rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-100"
                                        >
                                            <option value="default">Default</option>
                                            <option value="info">Info</option>
                                            <option value="warning">Warning</option>
                                            <option value="error">Error</option>
                                            <option value="success">Success</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                                            Position
                                        </label>
                                        <select
                                            value={alert.position}
                                            onChange={(e) => handleAlertChange(index, 'position', e.target.value)}
                                            className="w-full px-3 py-2 text-sm rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-100"
                                        >
                                            <option value="top-left">Top Left</option>
                                            <option value="top-center">Top Center</option>
                                            <option value="top-right">Top Right</option>
                                            <option value="bottom-left">Bottom Left</option>
                                            <option value="bottom-center">Bottom Center</option>
                                            <option value="bottom-right">Bottom Right</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SiteInfoEditor;