
import data from '../../../public/data.json';
import SuperIcon from '../Common/SuperIcons';
import { Skill } from '../Types';

const Technologies = () => {
    var skills = data.skills;
    skills.forEach((skill: Skill) => {
    skill.icon = skill.icon || skill.name;
    });
    skills.sort((a, b) => b.level - a.level);   

    return (
        <div className="relative flex flex-col items-center justify-center p-9 min-h-screen
            bg-gradient-to-br from-white via-gray-50 to-white
            dark:from-black dark:via-gray-900 dark:to-black">
            
            {/* Animated emeraldprint Background */}
            <div className="absolute inset-0 opacity-70 animate-pulse-slow
                [background-image:linear-gradient(to_right,_rgba(0,153,102,0.1)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(0,153,102,0.1)_1px,_transparent_1px)]
                [background-size:30px_30px] 
                dark:[background-image:linear-gradient(to_right,_rgba(147,197,253,0.05)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(147,197,253,0.05)_1px,_transparent_1px)]">
            </div>
    
            <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent 
                bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-500
                animate-text-shine m-8">
                Technologies I Work With
            </h2>
    
            <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12
                max-w-2xl mx-auto animate-fade-in">
                Here are some of the technologies I have experience with.
            </p>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4  cursor-pointer 
                w-full max-w-7xl mx-auto">
                {skills.map((skill: Skill, index) => (
                    <div key={index}
                        className="group relative flex flex-col items-center space-y-4 p-8
                            rounded-xl backdrop-blur-xl hover:ring-4 ring-emerald-500/50 dark:ring-emerald-400/50
                            bg-white/80 dark:bg-gray-800/80
                            shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                            dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]
                            hover:shadow-[0_20px_50px_rgba(0,153,102,0.15)]
                            dark:hover:shadow-[0_20px_50px_rgba(0,153,102,0.2)]
                            transform perspective-1000
                            hover:scale-105 hover:-translate-y-2
                            transition-all duration-500 ease-out
                            animate-float
                            border border-gray-200/50 dark:border-gray-700/50
                            hover:border-emerald-500/50 dark:hover:border-emerald-400/50">
    
                        <div className="relative">
                            <SuperIcon 
                                name={skill.icon ?? ''}
                                className="
                                    transform transition-all duration-500
                                    group-hover:scale-110 group-hover:-translate-y-2 group-hover:saturate-200
                                    drop-shadow-lg"
                                size="4xl"
                            />
                            <div className="absolute -inset-1 bg-emerald-500/20 rounded-full blur-xl
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>
                        </div>
    
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white
                            group-hover:text-emerald-500 dark:group-hover:text-emerald-400
                            transition-colors duration-300">
                            {skill.name.split(':')[0]}
                        </h3>
    
                        <div className="w-full">
                            <div className="relative w-full h-3 bg-gray-200 dark:bg-gray-700
                                rounded-full overflow-hidden
                                transition-all duration-300
                                group-hover:shadow-[0_0_20px_rgba(0,153,102,0.3)]">
                                <div 
                                    className={`absolute h-full rounded-full
                                        transition-all duration-1000 ease-out
                                        ${skill.level >= 8 
                                            ? 'bg-gradient-to-r from-green-400 to-emerald-500' 
                                            : skill.level >= 5 
                                                ? 'bg-gradient-to-r from-yellow-400 to-amber-500'
                                                : 'bg-gradient-to-r from-red-400 to-rose-500'}
                                        animate-shimmer`}
                                    style={{ width: `${(skill.level / 10) * 100}%` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent
                                        via-white/30 to-transparent animate-shine"></div>
                                </div>
                            </div>
                            <span className="block text-xs text-center mt-2 text-gray-500 dark:text-gray-400
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {skill.level * 10}% Proficiency
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Technologies;