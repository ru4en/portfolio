export interface SiteInfo {
    welcome: string;
    title: string;
    job: string;
    description: string;
    author: string;
    alerts: Array<{
        title: string;
        message: string;
        link: string;
        type: string;
        position: string;
        required_consent?: boolean;
    }>;
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
    level: number;
    icon?: string;
}

export interface Project {
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
    degree: string;
    school: string;
    start: Date | string;
    end: Date | string;
    image: string;
    description: string;
    grade: string;
    modules: Module[];
}

export interface Experience {
    role: string;
    company: string;
    start: Date | string;
    end: Date | string;
    image: string;
    description: string;
    technologies: string[];
}

export interface ProjectData {
    site: SiteInfo;
    socials: SocialLink[];
    about: AboutInfo;
    skills: Skill[];
    projects: Project[];
    education: Education[];
    experience: Experience[];
}


export interface Post {
  date: Date;
  title: string;
  image?: string;
  authors?: string[];
  icons?: string[];
  description?: string;
  slug?: string;
  content: string;
  tags?: string[];
  hidden?: boolean;
  readingTime: number;
  }

export interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export interface NavbarProps {
  className?: string;
}
