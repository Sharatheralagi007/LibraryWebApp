import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBellSlash } from '@fortawesome/free-solid-svg-icons';

function NotificationBox() {
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
        {isCollapsed ? (
          <FontAwesomeIcon icon={faBell} />
        ) : (
          <FontAwesomeIcon icon={faBellSlash} />
        )}
      </button>

      {!isCollapsed && (
        <div className="notification-content">
          <h2>Notifications</h2>
          {Array.isArray(notifications) && notifications.length === 0 ? (
            <p>No new notifications</p>
          ) : (
            <ul>
              {Array.isArray(notifications) &&
                notifications.map(notification => (
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
  );
}

export default NotificationBox;
