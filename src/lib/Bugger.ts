

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Bugger: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        const hasVisitedBefore = localStorage.getItem('hasVisited');
        const currentPage = location.pathname;

        if (!hasVisitedBefore || localStorage.getItem('lastVisitedPage') !== currentPage) {
            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    const userIp = data.ip;

                    const formData = new FormData();
                    formData.append('ip', userIp);
                    formData.append('page', currentPage);
                    formData.append('_gotcha', '');

                    fetch('https://getform.io/f/bejjlvya', {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json',
                        },
                    })
                    .then(response => {
                        if (response.ok) {
                            console.log('IP and page logged successfully');
                            localStorage.setItem('hasVisited', 'true');
                            localStorage.setItem('lastVisitedPage', currentPage);
                        } else {
                            console.log('Error logging IP and page');
                        }
                    })
                    .catch(error => {
                        console.log('Error:', error);
                    });
                })
                .catch(error => {
                    console.log('Error fetching IP:', error);
                });
        }
    }, [location]);

    return null;
};

export default Bugger;
