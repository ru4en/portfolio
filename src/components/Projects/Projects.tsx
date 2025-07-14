import { useRef, useState, useEffect } from 'react';
import data from "../../../public/data.json";
import { Project } from '../Types';
import ProjectCard from './ProjectCard';


export const isInCenter = (el: HTMLElement, container: HTMLElement) => {
    const elRect = el.getBoundingClientRect();
    const cRect = container.getBoundingClientRect();
    const cCenter = cRect.left + cRect.width / 2;
    const elCenter = elRect.left + elRect.width / 2;
    return Math.abs(cCenter - elCenter) < 50;
};

const Projects = () => {
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const [centeredIndex, setCenteredIndex] = useState<number | null>(null);
    const [isSelected, setIsSelected] = useState(false);
    const [pendingFocusIndex, setPendingFocusIndex] = useState<number | null>(null);



    const handleScroll = () => {
        const container = document.getElementById('projects');
        if (!container) return;
        projectRefs.current.forEach((card, idx) => {
            if (card && isInCenter(card, container)) {
                setCenteredIndex(idx);
                if (pendingFocusIndex === idx) {
                    setFocusedIndex(idx);
                    setPendingFocusIndex(null);
                    setIsSelected(true);
                }
            } else if (centeredIndex === idx) {
                setCenteredIndex(null);
            }
        });
    };

    useEffect(() => {
        const container = document.getElementById('projects');
        if (container) {
            container.addEventListener('scroll', handleScroll);
            handleScroll();
        }
        return () => {
            const container = document.getElementById('projects');
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [focusedIndex, isSelected, centeredIndex, pendingFocusIndex]);

    return (
        <div className="flex flex-col items-center justify-center bg-gray-300 dark:bg-gray-950 shadow-lg overflow-hidden text-black dark:text-white pt-20
            relative w-full min-h-screen max-h-container mx-auto">
            <div className="absolute inset-0 opacity-100 h-full [background-image:linear-gradient(to_right,_rgba(0,0,0,0.1)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(0,0,0,0.1)_1px,_transparent_1px)] [background-size:20px_20px] dark:[background-image:linear-gradient(to_right,_rgba(255,255,255,0.1)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.1)_1px,_transparent_1px)] dark:[background-size:25px_25px]" />
            <div className="absolute z-20 top-20 controller left-0 right-0 flex justify-center">
                <h1 className="text-4xl font-bold text-center">Projects</h1>
                <p className="text-lg text-center m-9 color-green-500 dark:text-green-500 hidden md:block">
                    {data.projects.length} projects <br />
                    check out my github for more projects.
                </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <button
                    className="absolute controller left-0 top-1/2 transform -translate-y-1/2 to-transparent bg-gradient-to-r dark:to-transparent dark:text-white shadow-lg opacity-50 hover:opacity-100 transition duration-300 z-20 h-screen from-zinc-900/[.60] hover:from-zinc-900/[.80] dark:from-zinc-600/[.30] dark:hover:from-zinc-600/[.80] hover:from-zinc-900/[.80] transition-all duration-800 ease-in-out p-10 md:p-20"
                    onClick={() => {
                        const scrollContainer = document.getElementById('projects');
                        if (scrollContainer) scrollContainer.scrollBy({ left: -500, behavior: 'smooth' });
                    }}
                >
                    <span className="text-4xl">&#60;</span>
                </button>
                <div
                    id="projects"
                    className="flex gap-20 overflow-x-auto snap snap-x snap-mandatory scroll-snap-type-x py-20 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
                    style={{ padding: '90px 50vw' }}
                >
                    {data.projects.map((project: Project, idx: number) => (
                        <div
                            key={idx}
                            ref={el => projectRefs.current[idx] = el}
                            tabIndex={0}
                            className={`
                                rounded-lg transition-all duration-500 transform 
                                snap-center focus:outline-none
                                ${centeredIndex === idx ? 'scale-125 z-10 cursor-pointer' : ''}
                                ${isSelected && centeredIndex === idx ? 'scale-105' : ''}
                                transition-all duration-300
                                cursor-default
                                hover:ring-green-900
                            `}
                            role="button"
                            aria-selected={isSelected && centeredIndex === idx}

                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
                <button
                    className="absolute controller right-0 top-1/2 transform -translate-y-1/2 to-transparent bg-gradient-to-l dark:to-transparent dark:text-white shadow-lg opacity-50 hover:opacity-100 transition duration-300 z-20 h-screen from-zinc-900/[.60] hover:from-zinc-900/[.80] dark:from-zinc-600/[.30] dark:hover:from-zinc-600/[.80] hover:from-zinc-900/[.80] transition-all duration-800 ease-in-out p-10 md:p-20"
                    onClick={() => {
                        const scrollContainer = document.getElementById('projects');
                        if (scrollContainer) scrollContainer.scrollBy({ left: 500, behavior: 'smooth' });
                    }}
                >
                    <span className="text-4xl">&#62;</span>
                </button>
            </div>
        </div>
    );
};

export default Projects;