
const Blog = () => {
  return (
    <div className="blog flex flex-col items-center space-y-4 py-40 min-h-screen
    bg-gray-100 dark:bg-gray-600 dark:text-white
    ">
        <div className="w-full max-w-4xl">
            <h1 className="text-2xl font-semibold">Blog</h1>
            <p>Whach out for blog posts here soon!</p>
            <div className="w-full overflow-x-auto px-4">  
                <div className="flex space-x-4 justify-center p-5" style={{minWidth: 'min-content'}}>
                    <div className="min-w-[280px] flex flex-col p-4 bg-white rounded-lg shadow-md">
                        <img 
                            src="path/to/default-icon.png"  // Default icon if image is missing
                            alt="Blog Title" 
                            className="w-full h-48 object-cover object-center rounded-md" 
                        />
                        <h2 className="text-lg font-semibold mt-4 dark:text-black">Blog Title</h2>
                        <p className="text-gray-600">Blog Description</p>
                        <a href="path/to/blog" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline mt-2">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}


export default Blog;