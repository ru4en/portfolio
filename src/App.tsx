import { useState, useEffect } from 'react';
import './App.css';
import AppRouter from './routes/AppRouter';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="preloader">
          {/* Adding a slow fade-in for the logo */}
          <img 
            src="/logo-small.png" 
            alt="logo" 
            width={120} 
            className="transition-all "
          />
          {/* Optional: You can add a spinner here */}
          <div className="spinner"></div>
        </div>
      )}
      <div className={`App ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000 ease-in-out`}>
        <AppRouter />
      </div>
    </>
  );
}

export default App;