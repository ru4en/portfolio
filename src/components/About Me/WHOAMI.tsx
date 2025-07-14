import { TypeAnimation } from 'react-type-animation';
import data from "../../../public/data.json";
import Socials from "../Common/Socials";
import Background from "../Common/Background";
import Tag from '../Common/Tag';

const WHOAMI = () => {
    const { skills } = data.skills.reduce<{ skills: string[] }>((acc, skill) => {
        acc.skills.push(skill.name);
        return acc;
    }, { skills: [] });
    return (
        <Background iconNames={skills} layout="CLUTTERED" rotate="RANDOM" className="bg-gradient-to-t from-gray-700 to-gray-500 dark:from-gray-900 dark:to-black fixed min-h-[100vh] items-center justify-center p-1 pb-5 max-w-full text-gray-100 dark:text-white">
            <div className="flex flex-col w-full h-full min-h-[100vh] relative">
                <div className="flex flex-col items-center text-center justify-center p-20 px-5 sm:px-10 md:px-20 lg:px-40 xl:px-60">
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
                <div className="text-3xl md:text-6xl font-bold space-x-2 text-gray-100 drop-shadow-lg dark:text-green-400">
                <div className="text-center mb-8 animate-fade-in">
                    <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-400 text-transparent bg-clip-text">
                        WHOAMI
                    </h1>
                    <Tag
                    key={data.about.role}
                    tag={data.about.role}
                    isSelected={true}
                    hideIcon={true}
                    className="text-2xl font-semibold m-4 bg-emerald-500/20 dark:bg-emerald-400/20 px-4 py-2 rounded-full"
                />
                <h1 className="transition-transform duration-500 ease-in-out transform sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                h-[100px] flex items-center justify-center text-center bg-gradient-to-r from-green-600 via-teal-500 to-emerald-600 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-400 text-transparent
                bg-clip-text animate-text-shine 
                ">
                            <TypeAnimation
                                sequence={[
                                    'Hello, I am Ruben Lopes',
                                    2000,
                                    'Welcome to my portfolio',
                                    2000,
                                    'I am a Full Stack Developer',
                                    2000,
                                    'I love building web applications',
                                    2000,
                                    'I am a passionate learner',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                    </h1>
                </div>
            </div>

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

                <div className="flex p-2 justify-center items-center gap-4 mb-8">
                    {data.socials.map((social, index) => (
                        <Socials key={index} name={String(social.name)} url={social.url ?? '#'} />
                    ))}
                </div>
                </div>
        </Background>
    );
};

export default WHOAMI;