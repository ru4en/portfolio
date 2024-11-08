import React, { useState } from 'react';

import { SiteInfo
    , SocialLink
    , AboutInfo
    , Skill
    , Project
    , Module
    , Education
    , Technology
    , Experience
} from '../Types';


import SiteInfoEditor from './SiteInfoEditor';
import SocialLinkEditor from './SocialLinkEditor';


const AboutInfoEditor: React.FC<{ aboutInfo: AboutInfo }> = ({ aboutInfo }) => {
    return (
        <section>
        <label htmlFor="role">Role</label>
        <input type="text" id="role" name="role" value={aboutInfo.role} />
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description" value={aboutInfo.description} />
        <label htmlFor="image">Image</label>
        <input type="text" id="image" name="image" value={aboutInfo.image} />
        </section>
    );
}

const SkillEditor: React.FC<{ skill: Skill[] }> = ({ skill }) => {
    return (
        <section>
        {skill.map((s, index) => (
            <div key={index}>
            <label htmlFor={`skill-name-${index}`}>Name</label>
            <input
                type="text"
                id={`skill-name-${index}`}
                name={`skill-name-${index}`}
                value={s.name}
            />
            <label htmlFor={`skill-icon-${index}`}>Icon</label>
            <input
                type="text"
                id={`skill-icon-${index}`}
                name={`skill-icon-${index}`}
                value={s.icon}
            />
            <label htmlFor={`skill-level-${index}`}>Level</label>
            <input
                type="number"
                id={`skill-level-${index}`}
                name={`skill-level-${index}`}
                value={s.level}
            />
            </div>
        ))}
        </section>
    );
}
            


const ProjectEditor: React.FC<{ project: Project[] }> = ({ project }) => {
    return (
        <section>
        {project.map((p, index) => (
            <div key={index}>
            <label htmlFor={`project-title-${index}`}>Title</label>
            <input
                type="text"
                id={`project-title-${index}`}
                name={`project-title-${index}`}
                value={p.title}
            />
            <label htmlFor={`project-description-${index}`}>Description</label>
            <input
                type="text"
                id={`project-description-${index}`}
                name={`project-description-${index}`}
                value={p.description}
            />
            <label htmlFor={`project-image-${index}`}>Image</label>
            <input
                type="text"
                id={`project-image-${index}`}
                name={`project-image-${index}`}
                value={p.image}
            />
            <label htmlFor={`project-url-${index}`}>URL</label>
            <input
                type="text"
                id={`project-url-${index}`}
                name={`project-url-${index}`}
                value={p.url}
            />
            <label htmlFor={`project-tags-${index}`}>Tags</label>
            <input
                type="text"
                id={`project-tags-${index}`}
                name={`project-tags-${index}`}
                value={p.tags.join(', ')}
            />
            <label htmlFor={`project-repo-${index}`}>Repo</label>
            <input
                type="text"
                id={`project-repo-${index}`}
                name={`project-repo-${index}`}
                value={p.repo}
            />
            </div>
        ))}
        </section>
    );
}

const ModuleEditor: React.FC<{ module: Module[] }> = ({ module }) => {
    return (
        <section>
        {module.map((m, index) => (
            <div key={index}>
            <label htmlFor={`module-name-${index}`}>Name</label>
            <input
                type="text"
                id={`module-name-${index}`}
                name={`module-name-${index}`}
                value={m.name}
            />
            <label htmlFor={`module-grade-${index}`}>Grade</label>
            <input
                type="text"
                id={`module-grade-${index}`}
                name={`module-grade-${index}`}
                value={m.grade}
            />
            </div>
        ))}
        </section>
    );
}

const EducationEditor: React.FC<{ education: Education[] }> = ({ education }) => {
    return (
        <section>
        {education.map((e, index) => (
            <div key={index}>
            <label htmlFor={`education-degree-${index}`}>Degree</label>
            <input
                type="text"
                id={`education-degree-${index}`}
                name={`education-degree-${index}`}
                value={e.degree}
            />
            <label htmlFor={`education-school-${index}`}>School</label>
            <input
                type="text"
                id={`education-school-${index}`}
                name={`education-school-${index}`}
                value={e.school}
            />
            <label htmlFor={`education-start-${index}`}>Start</label>
            <input
                type="text"
                id={`education-start-${index}`}
                name={`education-start-${index}`}
                value={e.start}
            />
            <label htmlFor={`education-end-${index}`}>End</label>
            <input
                type="text"
                id={`education-end-${index}`}
                name={`education-end-${index}`}
                value={e.end}
            />
            <label htmlFor={`education-image-${index}`}>Image</label>
            <input
                type="text"
                id={`education-image-${index}`}
                name={`education-image-${index}`}
                value={e.image}
            />
            <label htmlFor={`education-description-${index}`}>Description</label>
            <input
                type="text"
                id={`education-description-${index}`}
                name={`education-description-${index}`}
                value={e.description}
            />
            <label htmlFor={`education-grade-${index}`}>Grade</label>
            <input
                type="text"
                id={`education-grade-${index}`}
                name={`education-grade-${index}`}
                value={e.grade}
            />
            <label htmlFor={`education-modules-${index}`}>Modules</label>
            <ModuleEditor module={e.modules} />
            </div>
        ))}
        </section>
    );
}


const TechnologyEditor: React.FC<{ technology: Technology[] }> = ({ technology }) => {
    return (
        <section>
        {technology.map((t, index) => (
            <div key={index}>
            <label htmlFor={`technology-name-${index}`}>Name</label>
            <input
                type="text"
                id={`technology-name-${index}`}
                name={`technology-name-${index}`}
                value={t.name}
            />
            <label htmlFor={`technology-level-${index}`}>Level</label>
            <input
                type="number"
                id={`technology-level-${index}`}
                name={`technology-level-${index}`}
                value={t.level}
            />
            </div>
        ))}
        </section>
    );
}


const ExperienceEditor: React.FC<{ experience: Experience[] }> = ({ experience }) => {
    return (
        <section>
        {experience.map((e, index) => (
            <div key={index}>
            <label htmlFor={`experience-role-${index}`}>Role</label>
            <input
                type="text"
                id={`experience-role-${index}`}
                name={`experience-role-${index}`}
                value={e.role}
            />
            <label htmlFor={`experience-company-${index}`}>Company</label>
            <input
                type="text"
                id={`experience-company-${index}`}
                name={`experience-company-${index}`}
                value={e.company}
            />
            <label htmlFor={`experience-start-${index}`}>Start</label>
            <input
                type="text"
                id={`experience-start-${index}`}
                name={`experience-start-${index}`}
                value={e.start}
            />
            <label htmlFor={`experience-end-${index}`}>End</label>
            <input
                type="text"
                id={`experience-end-${index}`}
                name={`experience-end-${index}`}
                value={e.end}
            />
            </div>
        ))}
        </section>
    );
}

const downloadJson = (data: object, fileName: string) => {
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${fileName}.json`;
    link.click();
};

// Main Component
const PortfolioEditor = () => {
    const [siteInfo, setSiteInfo] = useState<SiteInfo>({ title: "", description: "", author: "" });
    const [socials, setSocials] = useState<SocialLink[]>([]);
    const [aboutInfo, setAboutInfo] = useState<AboutInfo>({ role: "", description: "", image: "" });
    const [skills, setSkills] = useState<Skill[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);
    const [education, setEducation] = useState<Education[]>([]);
    const [experience, setExperience] = useState<Experience[]>([]);

    const exportData = () => {
        const data = {
            siteInfo,
            socials,
            aboutInfo,
            skills,
            projects,
            education,
            experience
        };
        downloadJson(data, 'portfolio');
    };

    return (
        <div>
            <h1>Portfolio Editor</h1>
            <SiteInfoEditor siteInfo={siteInfo} setSiteInfo={setSiteInfo} />
            <SocialLinkEditor socials={socials} setSocials={setSocials} />
            {/* Add other editors here similarly */}
            <button onClick={exportData}>Download JSON</button>
        </div>
    );
};

export default PortfolioEditor;
export { SiteInfoEditor, SocialLinkEditor, AboutInfoEditor, SkillEditor, ProjectEditor, ModuleEditor, EducationEditor, TechnologyEditor, ExperienceEditor };
