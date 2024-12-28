import { useRef, useState, useEffect } from 'react';
import data from "../../../public/data.json";
import { Project } from '../Types';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const [centeredIndex, setCenteredIndex] = useState<number | null>(null);
    const [isSelected, setIsSelected] = useState<boolean>(false);

    const isInCenter = (element: HTMLElement, container: HTMLElement) => {
        const elementRect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + (containerRect.width / 2);
        const elementCenter = elementRect.left + (elementRect.width / 2);
        return Math.abs(containerCenter - elementCenter) < 50;
    };

    const handleScroll = () => {
        const container = document.getElementById('projects');
        if (!container) return;

        projectRefs.current.forEach((cardRef, index) => {
            if (cardRef && isInCenter(cardRef, container)) {
                setCenteredIndex(index);
            } else if (centeredIndex === index) {
                setCenteredIndex(null);
            }
        });
    };

    const handleCardSelection = (index: number) => {
        if (centeredIndex === index) {
            setIsSelected(true);
            setFocusedIndex(index);
        }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        const container = document.getElementById('projects');
        if (!container) return;

        switch (e.key) {
            case 'Enter':
            case ' ':
                e.preventDefault();
                if (centeredIndex !== null) {
                }
                break;
            case 'Escape':
                e.preventDefault();
                if (isSelected) {
                    setIsSelected(false);
                } else if (focusedIndex !== null) {
                    setFocusedIndex(null);
                }
                break;
        }
    };

    useEffect(() => {
        const container = document.getElementById('projects');
        if (container) {
            container.addEventListener('scroll', handleScroll);
            document.addEventListener('keydown', handleKeyDown);
            handleScroll();
        }

        return () => {
            const container = document.getElementById('projects');
            if (container) {
                container.removeEventListener('scroll', handleScroll);
                document.removeEventListener('keydown', handleKeyDown);
            }
        };
    }, [focusedIndex, isSelected, centeredIndex]);

    return (
        <div className="flex flex-col items-center justify-center bg-gray-300 dark:bg-gray-950 shadow-lg overflow-hidden text-black dark:text-white pt-20 min-h-screen">
            <div className="absolute inset-0 opacity-100 [background-image:linear-gradient(to_right,_rgba(0,0,0,0.1)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(0,0,0,0.1)_1px,_transparent_1px)] [background-size:20px_20px] dark:[background-image:linear-gradient(to_right,_rgba(255,255,255,0.1)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.1)_1px,_transparent_1px)] dark:[background-size:25px_25px]" />
            
            <div className="absolute z-20 top-20 controller">
                <h1 className="text-4xl  font-bold text-center ">Projects</h1>
                <p className="text-lg text-center m-9 color-green-500 dark:text-green-500 hidden md:block">
                    {data.projects.length} projects <br />
                    check out my github for more projects.
                </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <button
                    className="absolute controller left-0 top-1/2 
                        transform -translate-y-1/2 p-20 to-transparent bg-gradient-to-r dark:to-transparent dark:text-white shadow-lg opacity-50 hover:opacity-100 transition duration-300 z-20 h-screen 
                        from-zinc-900/[.60] hover:from-zinc-900/[.80] dark:from-zinc-600/[.30]
                        dark:hover:from-zinc-600/[.80] hover:from-zinc-900/[.80]
                        transition-all duration-800 ease-in-out transform "
                    onClick={() => {
                        const scrollContainer = document.getElementById('projects');
                        if (scrollContainer) {
                            scrollContainer.scrollBy({ left: -500, behavior: 'smooth' });
                        }
                    }}
                >
                <span className="text-4xl">
                    &#60;
                </span>
                </button>

                <div
                    id="projects"
                    className="flex gap-20 overflow-x-auto snap snap-x snap-mandatory scroll-snap-type-x py-20"
                    style={{ padding: '90px 50vw' }}
                >
                    {data.projects.map((project: Project, projectIndex: number) => (
                        <div
                            key={projectIndex}
                            ref={el => projectRefs.current[projectIndex] = el}
                            tabIndex={0}
                            className={`
                                rounded-lg transition-all duration-500 transform 
                                snap-center focus:outline-none
                                ${centeredIndex === projectIndex ? 'scale-125 z-10' : ''}
                                ${isSelected && centeredIndex === projectIndex ? 'scale-105' : ''}
                                transition-all duration-300
                                cursor-default
                                ${centeredIndex === projectIndex ? 'cursor-pointer' : ''}
                                hover:ring-green-900
                            `}
                            onClick={() => {
                            console.log(centeredIndex);
                                if (centeredIndex === projectIndex) {
                                    handleCardSelection(projectIndex);
                                }
                            }}
                            role="button"
                            aria-selected={isSelected && centeredIndex === projectIndex}
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

                <button
                    className="absolute controller right-0 top-1/2
                        transform -translate-y-1/2 p-20 to-transparent bg-gradient-to-l  dark:to-transparent dark:text-white shadow-lg opacity-50 hover:opacity-100 transition duration-300 z-20 h-screen
                        from-zinc-900/[.60] hover:from-zinc-900/[.80] dark:from-zinc-600/[.30]
                        dark:hover:from-zinc-600/[.80] hover:from-zinc-900/[.80]
                        transition-all duration-800 ease-in-out transform 
                    "
                    onClick={() => {
                        const scrollContainer = document.getElementById('projects');
                        if (scrollContainer) {
                            scrollContainer.scrollBy({ left: 500, behavior: 'smooth' });
                        }
                    }}
                >
                    <span className="text-4xl">
                        &#62;
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Projects;