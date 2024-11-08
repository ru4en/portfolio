import React, { useState } from "react";

const CVViewer = () => {
  const [activeTab, setActiveTab] = useState("cv");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-20 px-4">
      {/* Tabs */}
      <div className="w-full max-w-4xl">
        <div className="flex justify-around mb-8">
          <button
            className={`py-2 px-4 rounded-t-lg text-lg font-medium ${
              activeTab === "cv"
                ? "bg-gray-800 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => setActiveTab("cv")}
          >
            CV
          </button>
          <button
            className={`py-2 px-4 rounded-t-lg text-lg font-medium ${
              activeTab === "details"
                ? "bg-gray-800 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => setActiveTab("details")}
          >
            Details
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        {activeTab === "cv" ? (
          <div className="flex justify-center items-center h-96">
            {/* Embed the PDF */}
            <embed
              src="/path-to-your-cv.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
              className="rounded-lg"
            />
          </div>
        ) : (
          <div className="text-gray-700 space-y-4">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p>
              Hi, I’m Ruben, a Computer Science student with expertise in DevOps, 
              software engineering, and embedded systems.
            </p>
            <h3 className="text-xl font-semibold mt-4">Education</h3>
            <p>
              University of Reading - Bachelor’s in Computer Science
              (Expected Graduation: July 2025)
            </p>
            <h3 className="text-xl font-semibold mt-4">Experience</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Website Developer Assistant - Reading Students' Union</li>
              <li>DevOps Engineer - HP Inc. (Industrial Placement)</li>
              <li>Computational Scientist - STFC (Summer Placement)</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVViewer;
