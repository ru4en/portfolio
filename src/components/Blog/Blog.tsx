const Blog = () => {
    return (
      <div className="blog flex flex-col items-center space-y-10 py-20 min-h-screen bg-gradient-to-r from-cyan-400 to-light-blue-500 dark:from-cyan-800 dark:to-teal-800">
        <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8">
          {/* Heading */}
          <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white">Blog</h1>
          <p className="text-center text-lg text-gray-700 dark:text-gray-300 mt-2">
            Watch out for blog posts here soon!
          </p>
  
          {/* Blog Posts
          <div className="w-full overflow-x-auto px-4 mt-8">
            <div className="flex flex-wrap gap-8 justify-center">
              <div className="min-w-[280px] flex flex-col p-6 bg-white rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl duration-300">
                <img 
                  src="path/to/default-icon.png"  // Default icon if image is missing
                  alt="Blog Title" 
                  className="w-full h-48 object-cover object-center rounded-md"
                />
                <h2 className="text-xl font-semibold mt-4 dark:text-black">Blog Title</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Blog Description</p>
                <a href="path/to/blog" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline mt-4">Read more</a>
              </div>
              {/* Add more blog posts here, if needed
            </div>
          </div>
        </div>
        */}
        </div>

        {/* Temporary */}
        <div className="w-full bg-white dark:bg-gray-800 p-4 shadow-lg text-center absolute bottom-0 left-0 right-0">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Stay Tuned!</h2>
            <p className="text-gray-600 dark:text-gray-400">Blog posts coming soon!</p>
        </div>
      </div>
    );
  };
  
  export default Blog;
  