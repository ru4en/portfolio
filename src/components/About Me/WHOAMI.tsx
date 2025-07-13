import { TypeAnimation } from 'react-type-animation';
import data from "../../../public/data.json";
import Socials from "../Common/Socials";
import Background from "../Common/Background";

const WHOAMI = () => {
    const { skills } = data.skills.reduce<{ skills: string[] }>((acc, skill) => {
        acc.skills.push(skill.name);
        return acc;
    }, { skills: [] });
    return (
        <Background iconNames={skills} layout="CLUTTERED" rotate="RANDOM" className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white via-emerald-50 to-gray-100 dark:from-black dark:via-emerald-950/10 dark:to-gray-900 overflow-hidden">

            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-16">
                {/* Profile image */}
                <div className="relative mb-12">
                    <img
                        src={data.about.image}
                        alt="Profile"
                        className="w-48 h-48 rounded-full mx-auto
                            border-4 border-emerald-500/50
                            backdrop-blur-sm bg-white/30 dark:bg-black/30
                            p-1 animate-float hover:scale-105
                            hover:ring-4 transition-all duration-300 ring-emerald-500/50"
                    />
                </div>

                {/* Title and role */}
                <div className="text-center mb-8 animate-fade-in">
                    <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-400 text-transparent bg-clip-text">
                        WHOAMI
                    </h1>
                    <TypeAnimation
                        sequence={[data.about.role]}
                        wrapper="h2"
                        speed={50}
                        className="text-2xl font-medium text-emerald-700 dark:text-emerald-400"
                    />
                </div>
                
                <div className="flex justify-center space-x-4 mb-8">
                    {data.socials.map((social, index) => (
                        <Socials key={index} name={String(social.name)} url={social.url ?? '#'} />
                    ))}
                </div>

                {/* Description */}
                <p className="text-xl text-center leading-relaxed
                    text-gray-700 dark:text-gray-300
                    p-8 rounded-2xl animate-fade-in-delayed
                    backdrop-blur-sm bg-white/30 dark:bg-black/30
                     dark:border-emerald-400/10 ring-emerald-500/50 ring-2
                    hover:ring-4 transition-all duration-300 ring-emerald-500/50"
                >
                    {data.about.description}
                </p>
            </div>
        </Background>
    );
};

export default WHOAMI;