import data from '../../../public/data.json';

const Education = () => {
    const education = data.education;
    return (
        <div className="py-16 px-4 md:px-8 bg-gradient-to-t from-cyan-200 to-white dark:from-cyan-900 dark:to-gray-800">
            <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8">Education</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-4">
                {education.map((edu, index) => (
                    <div key={index} className="flex items-center space-x-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all hover:bg-gray-50 dark:hover:bg-gray-700 flex-col overflow-hidden">
                        <img
                            src={edu.image}
                            alt={edu.school}
                            className="object-cover object-center w-52 md:w-48"
                        />
                        <div className="flex flex-col space-y-2">
                            <h3 className="text-sm text-gray-500 dark:text-gray-400 pt-2">{edu.school}</h3>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">{edu.degree}</h2>
                            <p className="text-sm text-blue-500 dark:text-blue-400">
                                {new Date(edu.start).toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}
                                {' - '}
                                {new Date(edu.end).toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}
                            </p>
                            {edu.grade && (
                                <p className="text-sm rounded-lg px-2 py-1 inline-block w-max ring-2 ring-blue-500">
                                    {'Grade: '}
                                    {edu.grade}
                                </p>
                            )}
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 m-4">{edu.description}</p>
                            <ul className="flex flex-wrap mt-2 gap-2">
                                {edu.modules.map((module, index) => (
                                    <li key={index} className="break-words text-sm text-gray-600 dark:text-gray-400">
                                        <span className="font-semibold ring-2 ring-blue-500 rounded-lg px-2 py-1 inline-block w-max text-blue-500 dark:text-blue-400">
                                            {module.name}:
                                            <span className="ml-2 text-gray-600 dark:text-gray-400">{module.grade}</span>
                                        </span>
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
