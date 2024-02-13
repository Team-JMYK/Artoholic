import { useState } from 'react';
import '../styles/forms.css';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const URL = import.meta.env.VITE_URL;

const Signup = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        login(data);
        navigate('/dashboard');
        console.log('User created successfully');
      } else {
        console.error('Error creating user:', data);
      }
    } catch (error) {
      console.error('Error creating user', error.message);
    }

    console.log(email, password);
  };

  return (
    <>
      <div className="main sign">
        <h3 className="title">Signup</h3>

        <form className="signup" onSubmit={handleSubmit}>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="E-mail"
          />

          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="username"
          />

          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="password"
          />
          <button className="submit" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
