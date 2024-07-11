import React, { useState } from 'react';
import axios from 'axios';
import imgLogin from "../../assets/images/login.png"
import { useNavigate, useLocation, Link } from 'react-router-dom';

const FormCommon = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [role, setRole] = useState('user');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  
  const isSignUp = location.pathname === '/sign-up';
  const isLogin = location.pathname === '/';
  const isForgotPassword = location.pathname === '/forgot-password';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp) {
      try {
        await axios.post('http://localhost:3000/users', { username, password, role });
        setMessage('User registered successfully!');
      } catch (error) {
        setMessage('Error registering user.');
      }
    } else if (isLogin) {
      try {
        const response = await axios.get('http://localhost:3000/users', {
          params: { username, password }
        });
        const user = response.data.find(
          (user) => user.username === username && user.password === password
        );
        if (user) {
          setMessage('Login successful!');
          if (user.role === 'admin') {
            navigate('/dashboard');
          } else {
            navigate('/user-dashboard');
          }
        } else {
          setMessage('Invalid credentials.');
        }
      } catch (error) {
        setMessage('Error logging in.');
      }
    } else if (isForgotPassword) {
      try {
        const response = await axios.get('http://localhost:3000/users', {
          params: { username }
        });
        const user = response.data.find((user) => user.username === username);
        if (user) {
          await axios.patch(`http://localhost:3000/users/${user.id}`, {
            password: newPassword
          });
          setMessage('Password reset successfully!');
        } else {
          setMessage('User not found.');
        }
      } catch (error) {
        setMessage('Error resetting password.');
      }
    }
  };
  return (
    <div>


      <div className='flex-prnt-login'>
            <div className='flex-left'>
                <form onSubmit={handleSubmit} className='form-login'>
                  <h3>{isSignUp ? 'Sign Up' : isLogin ? 'Login' : 'Forgot Password'}</h3>
                  {isLogin ? <h5>Please Enter Your Credentials</h5> : ""}
                  <div className='frm-grp'>
                    <input
                      type="text"
                      placeholder="Username" className='frm-field'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  {(isSignUp || isLogin) && (
                    <div className='frm-grp'>
                      <input
                        type="password"
                        placeholder="Password" className='frm-field'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {isLogin ? <p className='sm-para'><Link to="/forgot-password">Forget Password</Link></p> : "" }
                    </div>
                  )}
                  {isSignUp && (
                    <div className='frm-grp'>
                      <select value={role} onChange={(e) => setRole(e.target.value)} className='frm-field'>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                  )}
                  {isForgotPassword && (
                    <div className='frm-grp'>
                      <input
                        type="password"
                        placeholder="New Password" className='frm-field'
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                  )}
                  <div className='frm-grp'>
                  <button type="submit" className='frm-btn'>
                    {isSignUp ? 'Sign Up' : isLogin ? 'Login' : 'Reset Password'}
                  </button>
                  
                  <p className='sm-para'>{isLogin ? <Link to="/sign-up">Sign up</Link> : isSignUp ? <Link to="/">Login</Link> : ""} </p>
                  </div>
                  {message && <p className='invalid'>{message}</p>}
                </form>
            </div>
            <div className='flex-right'>
                <img src={imgLogin} alt='' />
            </div>
        </div>

      
    </div>
  );
};

export default FormCommon;