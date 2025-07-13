import { useState, useEffect } from 'react';
import './App.css';
import AppRouter from './routes/AppRouter';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import StyledToast from './components/Common/CustomToast';
import data from '../public/data.json';

function App() {
  const [isLoading, setIsLoading] = useState(true);

    const showAlerts = () => {
      data.site.alerts.forEach((alert) => {
        toast(alert.message, {
          type: (alert.type as any) || 'info',
          position: (alert.position as any) || 'top-right',
          onClick: () => {
            window.location.href = alert.link || window.location.href;
          },
          autoClose: ((alert as any).autoClose !== undefined ? (alert as any).autoClose : 5000),
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
    };


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      showAlerts();

    }, 200);

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