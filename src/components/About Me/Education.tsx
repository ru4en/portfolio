import data from '../../../public/data.json';

const Education = () => {
    const education = data.education;
    return (
        <div className="bg-gray-50 dark:bg-gray-900 py-16 px-4 md:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {education.map((edu, index) => (
                    <div key={index} className="flex items-center space-x-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all hover:bg-gray-50 dark:hover:bg-gray-700">
                        <img
                            src={edu.image}
                            alt={edu.school}
                            className="object-cover object-center w-52 filter grayscale contrast-0" // Image styling remains unchanged
                        />
                        <div className="flex flex-col space-y-2">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{edu.degree}</h3>
                            <h4 className="text-lg text-gray-600 dark:text-gray-300">{edu.school}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{edu.start} - {edu.end}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{edu.grade}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{edu.description}</p>
                            <ul className="space-y-2">
                                {edu.modules.map((module, index) => (
                                    <li key={index} className="text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">{module.name}:</span> {module.grade}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
