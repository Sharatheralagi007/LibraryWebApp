const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Notification = require('./notificationModel');

app.use(bodyParser.json());

// Create a new notification
app.post('/notifications', async (req, res) => {
  const { title, content } = req.body;

  try {
    const newNotification = new Notification({ title, content });
    const savedNotification = await newNotification.save();
    res.status(201).json(savedNotification);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create notification' });
  }
});

// Get all notifications
app.get('/notifications', async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve notifications' });
  }
});

// Get a specific notification by ID
app.get('/notifications/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const notification = await Notification.findById(id);
    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    res.json(notification);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve notification' });
  }
});

// Update a notification by ID
app.put('/notifications/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const updatedNotification = await Notification.findByIdAndUpdate(
      id,
      { title, content },
      { new: true } // Return the updated notification
    );
    if (!updatedNotification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    res.json(updatedNotification);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update notification' });
  }
});

// Delete a notification by ID
app.delete('/notifications/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedNotification = await Notification.findByIdAndRemove(id);
    if (!deletedNotification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    res.json({ message: 'Notification deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete notification' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
