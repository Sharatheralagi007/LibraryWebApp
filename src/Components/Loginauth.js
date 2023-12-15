import React, { useState } from 'react';
import axios from 'axios';
import NotificationManager from './NotificationManager';

const Loginauth = () => {
  const [isLogged, setisLogged] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);

      if (response.data.success) {
        setisLogged(true);
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      {isLogged ? (
        <div>
          <p>Welcome</p>
          <NotificationManager />
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px', flexDirection: 'column' }}>
          <div style={{ paddingBottom: '20px' }}>Only For Staff</div>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Loginauth;
