import { useState, useEffect } from 'react';
import './App.css';
import AppRouter from './routes/AppRouter';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import StyledToast from './components/Common/CustomToast';
import data from '../public/data.json';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const hasConsentedToCookies = () => {
    return document.cookie.includes('COOKIE_CONSENT=true');
  };

  const writeCookie = (name: string, value: string, days: number) => {
    if (hasConsentedToCookies()) {
      // Set cookie with expiration date
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = `expires=${date.toUTCString()}`;
      document.cookie = `${name}=${value}; ${expires}; path=/`;
    }
  };

  const readCookie = (name: string) => {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  const CustomToastContent = ({ alert }: { alert: any }) => {
    if (!alert.required_consent) {
      writeCookie('alert_' + alert.title, 'true', 365);
    }
      return (
      <div className="flex flex-col space-y-3">
        <div>{alert.message}</div>
        <div className="flex space-x-2">
          {alert.required_consent && (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => {
                // Set cookie consent first
                const date = new Date();
                date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
                const expires = `expires=${date.toUTCString()}`;
                document.cookie = `COOKIE_CONSENT=true; ${expires}; path=/`;
                
                // Now we can set the alert cookie
                writeCookie('alert_' + alert.title, 'true', 365);
                toast.dismiss();
              }}
            >
              Accept
            </button>
          )}
          {alert.link && (
            <a
              href={alert.link}
              className="bg-green-500 text-white px-4 py-2 rounded"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                // Only set cookie if consent is given
                if (hasConsentedToCookies()) {
                  writeCookie('alert_' + alert.title, 'true', 365);
                }
                toast.dismiss();
              }}
            >
              Learn More
            </a>
          )}
        </div>
      </div>
    );
  };

  const showAlerts = () => {
    data.site.alerts.forEach((alert) => {
      // Check if alert has a message
      if (!alert.message) return;
      
      // If cookies are consented to, check if this alert was already shown
      if (hasConsentedToCookies() && readCookie('alert_' + alert.title)) {
        return; // Don't show this alert again
      }
      
      // If this alert requires consent but no consent is given, always show it
      // If consent is given but no alert cookie exists, show it
      // If no consent required and no alert cookie exists, show it
      const shouldShow = alert.required_consent ? 
        !hasConsentedToCookies() : 
        !readCookie('alert_' + alert.title);
      
      if (shouldShow) {
        toast(<CustomToastContent alert={alert} />, {
          type: (alert.type as any) || 'info',
          position: (alert.position as any) || 'top-right',
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          closeOnClick: false,
          autoClose: alert.required_consent ? false : 5000,
        });
      }
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
        position="top-right"
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
          <img 
            src="/logo-small.png" 
            alt="logo" 
            width={120} 
            className="transition-all "
          />
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