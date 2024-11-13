// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const Bugger: React.FC = () => {
//   const location = useLocation();  // Hook to access the current route location

//   useEffect(() => {
//     const expirationTime = 30 * 60 * 1000; // Set timeout to 30 minutes (in milliseconds)
//     const hasVisitedBefore = localStorage.getItem('hasVisited');
//     const lastVisitTimestamp = localStorage.getItem('lastVisitTimestamp');
//     const currentPage = location.pathname; // Use location.pathname for current route
//     const currentTime = new Date().getTime(); // Current time in milliseconds

//     // Check if the localStorage has the 'hasVisited' flag and whether it has expired
//     if (hasVisitedBefore && lastVisitTimestamp && (currentTime - parseInt(lastVisitTimestamp)) < expirationTime) {
//       // User has visited before and the session is still valid
//       if (localStorage.getItem('lastVisitedPage') !== currentPage) {
//         // If the user visits a new page, log the new visit
//         logVisit(currentPage, currentTime);
//       }
//     } else {
//       // If the session has expired or user hasn't visited, log the visit
//       logVisit(currentPage, currentTime);
//     }
//   }, [location]);

//   const logVisit = (currentPage: string, currentTime: number) => {
//     fetch('https://api.ipify.org?format=json')
//       .then(response => response.json())
//       .then(data => {
//         const userIp = data.ip;

//         const formData = new FormData();
//         formData.append('message', `User IP: ${userIp}, Page: ${currentPage}`);
//         formData.append('_gotcha', '');  // Honeypot field to prevent spam

//         fetch('https://formbold.com/s/9x24r', {
//           method: 'POST',
//           body: formData,
//           headers: {
//             'Accept': 'application/json',
//           },
//         })
//         .then(response => {
//           if (response.ok) {
//             console.log('IP and page logged successfully');
//             localStorage.setItem('hasVisited', 'true');
//             localStorage.setItem('lastVisitedPage', currentPage);
//             localStorage.setItem('lastVisitTimestamp', currentTime.toString());
//           } else {
//             console.log('Error logging IP and page, response:', response);
//           }
//         })
//         .catch(error => {
//           console.log('Error submitting form:', error);
//         });

//       })
//       .catch(error => {
//         console.log('Error fetching IP:', error);
//       });
//   };

//   return null;
// };

// export default Bugger;
