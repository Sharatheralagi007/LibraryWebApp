// src/components/NotificationComponent.js
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import notifications from '../notifications';

function NotificationComponent() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    // Fetch all notifications when the component mounts
    fetchNotifications();
  }, []);
  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:5000/notifications'); // Replace with your backend server URL
      setNotifications(response.data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`notification-box ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="collapse-button" onClick={toggleCollapse}>
        {isCollapsed ? 'Show Notifications' : 'Hide Notifications'}
      </button>
      {!isCollapsed && (
        <div className="notification-content">
        <div className={`notification-box ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="collapse-button" onClick={toggleCollapse}>
        {isCollapsed ? (<FontAwesomeIcon icon={faEye} />) : (<FontAwesomeIcon icon={faEyeSlash} />)}
      </button>
      {!isCollapsed && (
        <div>
          <h2>Notifications</h2>
          {notifications.length === 0 ? (
            <p>No new notifications</p>
          ) : (
            <ul>
              {notifications.map(notification => (
                <li key={notification.id}>
                  <strong>{notification.title}</strong>
                  <p>{notification.content}</p>
                  <small>{notification.createdAt}</small>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
        </div>
      )}
    </div>
  );
}

export default NotificationComponent;
