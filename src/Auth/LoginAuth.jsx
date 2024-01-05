import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://103.146.174.105:8080/TECH/techniques'; // Replace with your actual API endpoint

const LoginAuth = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/logins`, {
        userName,
        password,
      });

      // Assuming your API returns a token upon successful login
      const token = response.data.token;

      // You can store the token in localStorage or a global state management solution like Redux
      // For simplicity, we'll just log it for now
      console.log('Login successful. Token:', token);
      localStorage.setItem("token", response.data["token"]);
      localStorage.setItem("cmpid", JSON.stringify(response.data[0].companyId));
      localStorage.setItem("data", JSON.stringify(response["data"]));
      // Clear the form and error state
      setUsername('');
      setPassword('');
      setError('');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      <div>
        <label>Username:</label>
        <input type="text" value={userName} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginAuth;
