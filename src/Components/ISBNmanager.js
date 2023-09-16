import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ISBNmanager() {
  const [isbn, setIsbn] = useState('');
  const [message, setMessage] = useState('');
  const [isbnList, setIsbnList] = useState([]);

  useEffect(() => {
    // Fetch all ISBN numbers when the component mounts
    fetchISBNs();
  }, []);

  const fetchISBNs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/isbn'); // Replace with your backend server URL
      setIsbnList(response.data);
    } catch (error) {
      console.error('Error fetching ISBNs:', error);
    }
  };

  const handleAddISBN = async () => {
    try {
      const response = await axios.post('http://localhost:5000/isbn', { isbn });
      setMessage(response.data.message);
      setIsbn('');
      fetchISBNs(); // Fetch updated ISBN list after adding a new one
    } catch (error) {
      console.error('Error adding ISBN:', error);
      setMessage('Failed to add ISBN.');
    }
  };

  const handleDeleteISBN = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/isbn/${id}`);
      setMessage('ISBN deleted successfully.');
      fetchISBNs(); // Fetch updated ISBN list after deletion
    } catch (error) {
      console.error('Error deleting ISBN:', error);
      setMessage('Failed to delete ISBN.');
    }
  };

  return (
    <div className="App">
      <h1>ISBN Database</h1>
      <div>
        <input
          type="text"
          placeholder="Enter ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
        <button onClick={handleAddISBN}>Add ISBN</button>
      </div>
      {message && <p>{message}</p>}
      <h2>ISBN List</h2>
      <ul>
        {isbnList.map((item) => (
          <li key={item._id}>
            {item.isbn}
            <button onClick={() => handleDeleteISBN(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ISBNmanager;
