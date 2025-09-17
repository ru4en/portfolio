import { useState } from 'react';

const CVViewer = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-emerald-800 dark:to-gray-900">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-grid-gray-800/[0.05] dark:bg-grid-gray-100/[0.05]" />

      <div className="relative z-10 container mx-auto flex flex-col items-center py-6 sm:py-12 px-4">
        <div className="w-full max-w-4xl">
          {/* Glass container with enhanced border */}
          <div className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-xl sm:rounded-2xl p-4 sm:p-8 
                         shadow-lg hover:shadow-xl transition-all duration-300 ring-4 ring-gray-200/50 dark:ring-cyan-700/50
                         border border-gray-200/50 dark:border-gray-700/50
                         hover:border-emerald-500/30 dark:hover:border-emerald-400/30">
            
            {/* PDF container with better aspect ratio */}
            <div className="relative w-full rounded-lg overflow-hidden "
                 style={{ height: 'calc(100vh - 12rem)' }}>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center 
                               bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-full border-3 border-gray-300 border-t-emerald-500 animate-spin" />
                </div>
              )}
              <embed
                src={import.meta.env.VITE_CV_URL || '/cv.pdf'}
                type="application/pdf"
                width="100%"
                height="100%"
                className="rounded-lg shadow-sm"
                onLoad={() => setIsLoading(false)}
              />
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href={import.meta.env.VITE_CV_URL || '/cv.pdf'}
                download
                className="group relative inline-flex items-center gap-2 px-6 py-3
                  bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-500 
                  dark:from-blue-500 dark:via-cyan-600 dark:to-teal-600
                  text-white font-medium rounded-xl  hover:ring-4
                  transition-all duration-500 ease-out
                  hover:scale-[1.02] hover:-translate-y-1
                  before:absolute before:inset-0 before:rounded-xl
                  before:bg-gradient-to-br before:from-emerald-300 before:via-emerald-400 before:to-teal-400
                  before:opacity-0 before:transition-opacity before:duration-500
                  active:scale-95"
              >
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-y-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span className="relative">Download CV</span>
                <div className="absolute inset-0 rounded-lg bg-emerald-400/20 opacity-0 
                               group-hover:opacity-100 transition-opacity duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVViewer;