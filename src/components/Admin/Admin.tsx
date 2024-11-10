import { useState, useEffect, SetStateAction } from 'react';
import {
    SiteInfo,
    SocialLink,
    AboutInfo,
    Skill,
    Project,
    Education,
    Experience,
    ProjectData,
} from '../Types';

import SiteInfoEditor  from './SiteInfoEditor';
import SocialLinkEditor from './SocialLinkEditor';
import AboutInfoEditor from './AboutInfoEditor';
import SkillEditor from './SkillEditor';
import ProjectEditor from './ProjectEditor';
import EducationEditor from './EducationEditor';
import ExperienceEditor from './ExperienceEditor';


const Admin = () => {
    const [jsonData, setJsonData] = useState<ProjectData | null>(null);

    useEffect(() => {
        // Fetch JSON data from the server
        fetch('/data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data: ProjectData) => {
                setJsonData(data);
            })
            .catch(error => console.error('Error fetching JSON data:', error));
    }, []);
    
    // Add new social link
    const addSocial = () => {
      if (jsonData) {
          setJsonData({
              ...jsonData,
              socials: [...jsonData.socials, { name: '', url: '' }],
          });
      }
  };

    // Add a new skill
    const addSkill = () => {
        if (jsonData) {
            setJsonData({
                ...jsonData,
                skills: [...jsonData.skills, { name: '', level: 0 as number }],
            });
        }
    }

    const addProject = () => {
        if (jsonData) {
            setJsonData({
                ...jsonData,
                projects: [...jsonData.projects, { title: '', description: '', image: '', url: '', tags: [], repo: '' }],
            });
        }
    }

    const addEducation = () => {
        if (jsonData) {
            setJsonData({
                ...jsonData,
                education: [...jsonData.education, { degree: '', school: '', start: '', end: '', image: '', description: '', grade: '', modules: [] }],
            });
        }
    }

    const addExperience = () => {
        if (jsonData) {
            setJsonData({
                ...jsonData,
                experience: [...jsonData.experience, { role: '', company: '', start: '', end: '', image: '', description: '', technologies: [] }],
            });
        }
    }


    return (
        <div className="min-h-screen bg-white flex flex-col items-center py-20 px-4 dark:bg-gray-900 font-sans">
            <h1 className="text-3xl font-semibold mb-8">Admin Panel</h1>
            <div className="w-full max-w-4xl rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">JSON Data</h2>

                {jsonData ? (
                    <>
                        <section>
                            <h3 className="font-semibold text-lg mb-2">Site Info</h3>
                            <SiteInfoEditor
                                siteInfo={jsonData.site}
                                setSiteInfo={(info: SiteInfo) =>
                                    setJsonData({ ...jsonData, site: info })
                                }
                            />
                        </section>

                        <section>
                            <h3 className="font-semibold text-lg mb-2">Social Links</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  {jsonData.socials.map((link, index) => (
                                      <div key={index} className="space-x-2">
                                          <SocialLinkEditor
                                              key={index}
                                              link={link}
                                              index={index}
                                              socials={jsonData.socials}
                                              setSocials={(newSocials: SetStateAction<SocialLink[]>) =>
                                                setJsonData(prevState => {
                                                  if (!prevState) return null;
                                                  const updatedSocials = typeof newSocials === 'function' ? newSocials(prevState.socials) : newSocials;
                                                  return {
                                                    ...prevState,
                                                    socials: updatedSocials,
                                                    site: prevState.site,
                                                    about: prevState.about,
                                                    skills: prevState.skills,
                                                    projects: prevState.projects,
                                                    education: prevState.education,
                                                    experience: prevState.experience,
                                                  };
                                                }
                                              )}
                                          />
                                      </div>
                                  ))}
                              </div>
                                  <button
                                onClick={addSocial}
                                className="m-4 bg-blue-500 w-50 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"                                
                            >
                                Add Social Link
                            </button>
                        </section>

                        <section>
                            <h3 className="font-semibold text-lg mb-2">About Info</h3>
                            <AboutInfoEditor
                                aboutInfo={jsonData.about}
                                setAboutInfo={(info: AboutInfo) =>
                                    setJsonData({ ...jsonData, about: info })
                                }
                            />
                        </section>

                        <section>
                            <h3 className="font-semibold text-lg mb-2">Skills</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {jsonData.skills.map((skill, index) => (
                                    <SkillEditor
                                    key={index}
                                    skill={skill}
                                    index={index}
                                    skills={jsonData.skills}
                                    setSkills={(newSkills: Skill[] | ((prevSkills: Skill[]) => Skill[])) =>
                                      setJsonData(prevState => {
                                        if (!prevState) return null;
                                        const updatedSkills = typeof newSkills === 'function' ? newSkills(prevState.skills) : newSkills;
                                        return {
                                          ...prevState,
                                          skills: updatedSkills,
                                          site: prevState.site,
                                          socials: prevState.socials,
                                          about: prevState.about,
                                          projects: prevState.projects,
                                          education: prevState.education,
                                          experience: prevState.experience,
                                        };
                                      })
                                    }
                                />
                                ))}
                            </div>
                            <button
                                onClick={addSkill}
                                className="m-4 bg-blue-500 w-50 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
                            >
                                Add Skill
                            </button>
                        </section>

                        <section>
                            <h3 className="font-semibold text-lg mb-2">Projects</h3>
                            <div className="space-y-2">
                            {jsonData.projects.map((project, index) => (
                            <ProjectEditor
                                key={index}
                                project={project}
                                index={index}
                                projects={jsonData.projects}
                                setProjects={(newProjects: Project[] | ((prevProjects: Project[]) => Project[])) =>
                                  setJsonData(prevState => {
                                    if (!prevState) return null;
                                    const updatedProjects = typeof newProjects === 'function' ? newProjects(prevState.projects) : newProjects;
                                    return {
                                      ...prevState,
                                      projects: updatedProjects,
                                      site: prevState.site,
                                      socials: prevState.socials,
                                      about: prevState.about,
                                      skills: prevState.skills,
                                      education: prevState.education,
                                      experience: prevState.experience,
                                    };
                                  })
                                }
                            />
                        ))}
                            <button
                                onClick={addProject}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
                            >
                                Add Project
                            </button>
                            </div>
                        </section>

                        <section>
                            <h3 className="font-semibold text-lg mb-2">Education</h3>
                            <div className="space-y-2">
                                { jsonData.education.map((education, index) => (
                                    <EducationEditor 
                                        key={index}
                                        education={education}
                                        index={index}
                                        educations={jsonData.education}
                                        setEducations={(newEducation: Education[] | ((prevEducation: Education[]) => Education[])) =>
                                            setJsonData(prevState => {
                                                if (!prevState) return null;
                                                const updatedEducations = typeof newEducation === 'function' ? newEducation(prevState.education) : newEducation;
                                                return {
                                                    ...prevState,
                                                    education: updatedEducations,
                                                    site: prevState.site,
                                                    socials: prevState.socials,
                                                    about: prevState.about,
                                                    skills: prevState.skills,
                                                    projects: prevState.projects,
                                                    experience: prevState.experience,
                                                };
                                            })
                                        }
                                    />
                                ))}
                                <button
                                    onClick={() => addEducation()}
                                    className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
                                >
                                    Add Education
                                </button>
                            </div>
                        </section>

                        <section>
                            <h3 className="font-semibold text-lg mb-2">Experience</h3>
                            <div className="space-y-2">
                                { jsonData.experience.map((experience, index) => (
                                    <ExperienceEditor 
                                        key={index}
                                        experience={experience}
                                        index={index}
                                        experiences={jsonData.experience}
                                        setExperiences={(newExperience: Experience[] | ((prevExperience: Experience[]) => Experience[])) =>
                                            setJsonData(prevState => {
                                                if (!prevState) return null;
                                                const updatedexperience = typeof newExperience === 'function' ? newExperience(prevState.experience) : newExperience;
                                                return {
                                                    ...prevState,
                                                    experience: updatedexperience,
                                                    site: prevState.site,
                                                    socials: prevState.socials,
                                                    about: prevState.about,
                                                    skills: prevState.skills,
                                                    projects: prevState.projects,
                                                    education: prevState.education,
                                                };
                                            })
                                        }
                                    />
                                ))}
                                <button
                                    onClick={() => addExperience()}
                                    className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
                                >
                                    Add Experience
                                </button>
                            </div>
                        </section>

                        <div>
                            <button
                                onClick={() => {
                                    const data = new Blob([JSON.stringify(jsonData)], {
                                        type: 'application/json',
                                    });
                                    const url = URL.createObjectURL(data);
                                    const a = document.createElement('a');
                                    a.href = url;
                                    a.download = 'data.json';
                                    a.click();
                                    URL.revokeObjectURL(url);
                                }}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
                            >
                                Save
                            </button>
                        </div>
                    </>
                ) : (
                    'Loading...'
                )}
            </div>
        </div>
    );
};

export default Admin;
