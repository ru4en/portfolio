
const Spinner = () => (
  <div className="flex items-center justify-center min-h-screen min-w-screen">
    <div className="text-center space-y-4">
      {/* Animated logo */}
      <div className="relative">
        <img 
          src="/r-logo-small.png" 
          alt="Logo"
          className="w-16 mx-auto animate-pulse"
        />
      </div>
      
      {/* Spinning circle */}
      <div className="flex justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 dark:border-green-400
            transition-all"
            style={{ borderColor: 'rgba(34, 197, 94, 0.5)' }}></div>
      </div>
      
      {/* Loading text with animation */}
      <p className="mt-4 text-gray-600 dark:text-gray-400 animate-pulse font-medium">
        Loading...
      </p>
    </div>
  </div>
);

export default Spinner;