import React, { useState, useEffect } from 'react';
import {
    SiteInfo,
    SocialLink,
    AboutInfo,
    Skill,
    Project,
    Module,
    Education,
    Technology,
    Experience,
    ProjectData,
} from '../Types';

import {
    SiteInfoEditor,
    SocialLinkEditor,
    AboutInfoEditor,
    SkillEditor,
    ProjectEditor,
    ModuleEditor,
    EducationEditor,
    TechnologyEditor,
    ExperienceEditor,
} from './Editor';




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

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-20 px-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Admin Panel</h1>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">JSON Data</h2>
        
        {jsonData ? (
          <>
            <section>
              <h3 className="font-semibold text-lg mb-2">Site Info</h3>
              <SiteInfoEditor siteInfo={jsonData.site} setSiteInfo={(info: SiteInfo) => setJsonData({ ...jsonData, site: info })} />
            </section>
            <section>
              <h3 className="font-semibold text-lg mb-2">Social Links</h3>
              <div className="space-y-2">
                {/* {jsonData.socialLinks.map((link, index) => (
                  <SocialLinkEditor key={index} socialLink={link} />
                ))} */}
                </div>
            </section>
            <section>
                <h3 className="font-semibold text-lg mb-2">About Info</h3>
            </section>
            <section>
                <h3 className="font-semibold text-lg mb-2">Skills</h3>
                <div className="space-y-2">
                    {jsonData.skills.map((skill, index) => (
                        <SkillEditor key={index} skill={jsonData.skills} />
                    ))}
                </div>
            </section>
            <section>
              <h3 className="font-semibold text-lg mb-2">Projects</h3>
                <div className="space-y-2">
                    {jsonData.projects.map((project, index) => (
                    <ProjectEditor key={index} project={jsonData.projects} />
                    ))}
                </div>
            </section>
            <section>
              <h3 className="font-semibold text-lg mb-2">Education</h3>
                <div className="space-y-2">
                    {/* {jsonData.education.map((edu, index) => (
                    <EducationEditor key={index} education={jsonData.education} />
                    ))} */}
                </div>
            </section>
            <section>
              <h3 className="font-semibold text-lg mb-2">Experience</h3>
                <div className="space-y-2">
                    {/* {jsonData.experience.map((exp, index) => (
                    <ExperienceEditor key={index} experience={jsonData.experience} />
                    ))} */}
                </div>
            </section>
            <div>
            <button
            // Download the JSON blob of updated data
            onClick={() => {
                const data = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
                const url = URL.createObjectURL(data);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'data.json';
                a.click();
                URL.revokeObjectURL(url);
            }
            }
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