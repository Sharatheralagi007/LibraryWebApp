const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors =require('cors')
const connectDB = require('../public/DB/Dbconnect');
const Notification = require('../public/DB/Schema');
const ISBN = require('../public/DB/isbnschema');
// const Notification = require('../pu');

connectDB()
const app = express();
const port = 5000;

// mongoose.connect('mongodb://localhost:27017/your-database-name', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
const allowedOrigin = 'http://localhost:5001';

const corsOptions = {
  origin: allowedOrigin,
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add the HTTP methods you intend to support
  credentials: true, // If you need to support cookies or authentication headers
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

// Create a new notification
// app.post('/notifications', async (req, res) => {
//   console.log(req.body.title)
  
//   try {
    
//     const newNotification = new Notification({
//       title: req.body.title,
//       content: req.body.content,
//     });

//     // Save the notification to the database
//     await newNotification.save();
//     console.log('ji')
//     res.status(201).json(newNotification);
//   } catch (error) {
//     console.error('Error creating notification:', error);
//     res.status(500).json({ message: 'Failed to create notification' });
//   }
// });
app.post('/notifications', async (req, res) => {
  try {
    const { title, content } = req.body;

    // Create a new notification document and save it to the database
    const newNotification = await Notification.create({
      title,
      content,
    });

    if (newNotification) {
      res.status(201).json({
        _id: newNotification._id,
        title: newNotification.title,
        content: newNotification.content,
        createdAt: newNotification.createdAt, // Assuming you have a createdAt field
      });
    } else {
      res.status(400);
      throw new Error("Failed to create a new notification");
    }
  } catch (error) {
    console.error('Error creating notification:', error);
    res.status(500).json({ message: 'Failed to create notification' });
  }
});

// Get all notifications
app.get('/notifications', async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
    
  } catch (error) {
    console.log("kokoko")
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
app.post('/isbn', async (req, res) => {
  try {
    const { isbn } = req.body;

    // Check if ISBN already exists
    const existingISBN = await ISBN.findOne({ isbn });
    if (existingISBN) {
      return res.status(400).json({ message: 'ISBN already exists.' });
    }

    // Create and save the ISBN to the database
    const newISBN = new ISBN({ isbn });
    await newISBN.save();

    res.status(201).json({ message: 'ISBN added successfully.' });
  } catch (error) {
    console.error('Error adding ISBN:', error);
    res.status(500).json({ message: 'Failed to add ISBN.' });
  }
});
// Fetch all ISBN numbers
app.get('/isbn', async (req, res) => {
  try {
    const isbnList = await ISBN.find();
    res.status(200).json(isbnList);
  } catch (error) {
    console.error('Error fetching ISBNs:', error);
    res.status(500).json({ message: 'Failed to fetch ISBNs.' });
  }
});
app.delete('/isbn/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedISBN = await ISBN.findByIdAndRemove(id);
    if (!deletedISBN) {
      return res.status(404).json({ message: 'ISBN not found' });
    }
    res.json({ message: 'ISBN deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete ISBN' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
