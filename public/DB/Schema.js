const mongoose = require('mongoose');

// Define the notification schema
const notificationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a Notification model using the schema
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
