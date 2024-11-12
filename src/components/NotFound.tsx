const NotFound: React.FC = () => {
    return (
        <div className="relative h-full w-full bg-gray-100 dark:bg-gray-900">
            {/* Subtle radial gradient background */}
            <div className="top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_10%,_rgba(0,0,0,0.2)_70%)] dark:bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_10%,_rgba(0,0,0,0.5)_70%)] bg-size-[200%] dark:bg-size-[200%]">

                {/* Main content */}
                <div className="flex flex-col items-center justify-center h-screen z-10 relative">
                    <h1 className="text-9xl font-extrabold text-blue-500 dark:text-blue-600 leading-tight mb-4 animate__animated animate__fadeIn">4
                        <h1 className="text-green-700">0</h1>
                        4</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate__animated animate__fadeIn animate__delay-1s">
                        Oops! The page you are looking for could not be found.
                    </p>
                    <button
                        onClick={() => window.history.back()}
                        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all transform hover:scale-105 duration-300"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
