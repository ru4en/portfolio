
const CVViewer = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-4 from-gray-100 to-gray-400 bg-gradient-to-br dark:from-gray-800 dark:to-gray-950">
      {/* Content Area */}
      <div className="w-full max-w-4xl rounded-lg p-6">
        <div className="flex justify-center items-center h-screen relative">
          {/* Embed the PDF */}
          <embed
            src="/Ruben Lopes - CV-TX1124.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
            className="rounded-lg shadow-lg"
          />
          {/* Download Button */}
          <a
            href="/Ruben Lopes - CV-TX1124.pdf"
            download
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-200"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default CVViewer;
