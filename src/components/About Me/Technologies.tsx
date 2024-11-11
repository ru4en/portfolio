import data from '../../../public/data.json'; // Assuming data contains your skills array
import SuperIcon from '../Common/SuperIcons';

const Technologies = () => {
    const skills = data.skills;
    return (
        <div className="bg-gray-50 dark:bg-gray-900 py-16 px-4 md:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8">Technologies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center space-y-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all hover:bg-gray-50 dark:hover:bg-gray-700">
                        <SuperIcon name={skill.name} className="w-12 h-12 text-gray-800 dark:text-white" />
                        <div className="flex flex-col items-center space-y-2">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
                            
                            {/* Progress Bar for Proficiency */}
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div 
                                    className={`h-2.5 rounded-full ${skill.level >= 8 ? 'bg-green-500' : skill.level >= 5 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                    style={{ width: `${(skill.level / 10) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
