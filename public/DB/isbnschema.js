const mongoose = require('mongoose');

const isbnSchema = new mongoose.Schema({
    isbn: { type: String, required: true, unique: true },
  });
  
  const ISBN = mongoose.model('ISBN', isbnSchema);
  module.exports = ISBN