import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ISBNmanager from './ISBNmanager';

function NotificationManager() {
  const [notifications, setNotifications] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

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

  // const createNotification = async () => {
  //   try {
  //     const data ={ title:newTitle,content: newContent }
  //     console.log('sda')
  //     const {data1}=await axios.post('http://localhost:5000/notifications', { body:JSON.stringify(data)},{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:5000"}}) // Replace with your backend server URL
  //     fetchNotifications();
  //     setNewContent("");
  //     setNewTitle("");
  //   } catch (error) {
  //     console.error('Error creating notification:', error);
  //   }
  // };
  const createNotification = async () => {
    try {
      const data = { title: newTitle, content: newContent };
      console.log('sda');
     await axios.post('http://localhost:5000/notifications', data, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:5000',
        },
      });
      fetchNotifications();
      setNewContent('');
      setNewTitle('');
    } catch (error) {
      console.error('Error creating notification:', error);
    }
  };
  

  const deleteNotification = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/notifications/${id}`); // Replace with your backend server URL
      fetchNotifications();
    } catch (error) {
      console.error('Error deleting notification:', error);
    }
  };

  return (
    <>
    <div>
      <h1>Notification Manager</h1>

      {/* Create a new notification */}
      <div>
        <h2>Create New Notification</h2>
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value )}
        />
        <input
          type="text"
          placeholder="Content"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
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
    <ISBNmanager/>
      </>
  );
}

export default NotificationManager;
