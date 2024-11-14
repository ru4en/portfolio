import data from '../../../public/data.json'; // Assuming data contains your skills array
import SuperIcon from '../Common/SuperIcons';

const Technologies = () => {
    const skills = data.skills;

    return (
        <div className="relative flex flex-col items-center justify-center p-9 bg-white dark:bg-black shadow-lg overflow-hidden text-black dark:text-white min-h-screen">
            {/* Blueprint-style background */}
            <div className="absolute inset-0 opacity-100 
                [background-image:linear-gradient(to_right,_rgba(0,0,0,0.1)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(0,0,0,0.1)_1px,_transparent_1px)] 
                [background-size:20px_20px] 
                dark:[background-image:linear-gradient(to_right,_rgba(255,255,255,0.1)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.1)_1px,_transparent_1px)] 
                dark:[background-size:25px_25px]"></div>

            <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white m-8">Technologies I Work With</h2>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
                Here are some of the technologies I have experience with.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="group relative flex flex-col items-center space-y-4 rounded-lg shadow-lg p-6 transition-all bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm
                        hover:ring-4 hover:ring-blue-500 hover:ring-opacity-50
                        hover:scale-105 hover:shadow-xl"
                    >
                        {/* Icon */}
                        <SuperIcon name={skill.name} className="text-gray-800 dark:text-white text-center" size="4xl" />
                        <div className="flex flex-col items-center space-y-2 w-full">
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
