import React, {useState} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login (){

    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3000/users', {
        params: { username, password }
      });
      const user = response.data.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        setMessage('Login successful!');
        navigate("/dashboard")
      } else {
        setMessage('Invalid credentials.');
      }
    } catch (error) {
      setMessage('Error logging in.');
    }
  };


  return (
    <>
        <form onSubmit={handleLogin} className='form-login'>
            <h3>Login</h3>
            <h5>Enter your account details</h5>
            <div className='frm-grp'>
                <input
                type="text" className='frm-field'
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className='frm-grp'>
                <input
                type="password" className='frm-field'
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className='frm-grp'>
                <button type="submit" className='frm-btn'>Login</button>
                <p><Link to="/forgot-password">Forgot Password?</Link></p>
                <p className='sm-para'><Link to="/sign-up">Sign Up</Link></p>
            </div>
            {message && <p className='invalid'>{message}</p>}
      </form>
    </>
  )
}

export default Login
