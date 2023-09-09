import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NotificationManager() {
  const [notifications, setNotifications] = useState([]);
  const [newNotification, setNewNotification] = useState({ title: '', content: '' });

  useEffect(() => {
    // Fetch all notifications when the component mounts
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:3000/notifications'); // Replace with your backend server URL
      setNotifications(response.data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  const createNotification = async () => {
    try {
      await axios.post('http://localhost:3000/notifications', newNotification); // Replace with your backend server URL
      fetchNotifications();
      setNewNotification({ title: '', content: '' });
    } catch (error) {
      console.error('Error creating notification:', error);
    }
  };

  const deleteNotification = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/notifications/${id}`); // Replace with your backend server URL
      fetchNotifications();
    } catch (error) {
      console.error('Error deleting notification:', error);
    }
  };

  return (
    <div>
      <h1>Notification Manager</h1>

      {/* Create a new notification */}
      <div>
        <h2>Create New Notification</h2>
        <input
          type="text"
          placeholder="Title"
          value={newNotification.title}
          onChange={(e) => setNewNotification({ ...newNotification, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Content"
          value={newNotification.content}
          onChange={(e) => setNewNotification({ ...newNotification, content: e.target.value })}
        />
        <button onClick={createNotification}>Create</button>
      </div>

      {/* List of notifications */}
      <div>
        <h2>Notifications</h2>
        <ul>
          {notifications.map((notification) => (
            <li key={notification._id}>
              <strong>{notification.title}</strong>
              <p>{notification.content}</p>
              <button onClick={() => deleteNotification(notification._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NotificationManager;
