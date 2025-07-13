import Background from '../Background';
const NotFound: React.FC = () => {
    return (
        <Background
        iconNames={['', 'bug:fontawesome', '']}
        className="absolute inset-0 opacity-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-green-900"
        rotate="RANDOM" >
        <div className="relative items-center min-h-screen min-w-screen
        text-gray-800 dark:text-white
        flex flex-col justify-center">

            <div className="text-center p-8">
                <h1 className="text-6xl font-bold mb-4">4
                    <span className="text-blue-500 fa-solid fa-bug p-2"></span>
                    4</h1>
                <h2 className="text-2xl mb-4">Page Not Found</h2>
                <p className="text-lg mb-6">The page you are looking for does not exist.</p>
                <a href="/" className="text-blue-500 hover:underline">Go back to Home</a>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
        </div>
        </Background>
    );
}
export default NotFound;