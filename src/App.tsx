import { useState, useEffect } from 'react';
import './App.css';
import AppRouter from './routes/AppRouter';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StyledToast from './components/Common/CustomToast';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <StyledToast
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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