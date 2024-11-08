// Define types based on JSON structure

export interface SiteInfo {
    title: string;
    description: string;
    author: string;
}

export interface SocialLink {
    name: string;
    url: string;
}

export interface AboutInfo {
    role: string;
    description: string;
    image: string;
}

export interface Skill {
    name: string;
    icon: string;
    level: number;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    url: string;
    tags: string[];
    repo: string;
}

export interface Module {
    name: string;
    grade: string;
}

export interface Education {
    id: number;
    degree: string;
    school: string;
    start: string;
    end: string;
    image: string;
    description: string;
    grade: string;
    modules: Module[];
}

export interface Technology {
    name: string;
    level: number;
}

export interface Experience {
    id: number;
    role: string;
    company: string;
    start: string;
    end: string;
    image: string;
    description: string;
    technologies: Technology[];
}

export interface ProjectData {
    site: SiteInfo;
    socials: SocialLink[];
    about: AboutInfo;
    skills: Skill[];
    projects: Project[];
    education: Education[];
    experiences: Experience[];
}
