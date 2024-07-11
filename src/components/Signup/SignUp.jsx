import React, {useState} from 'react'
import axios from 'axios';
import imgLogin from "../../assets/images/login.png"
function SignUp (){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users', { username, password });
      setMessage('User registered successfully!');
    } catch (error) {
      setMessage('Error registering user.');
    }
  };


  return (
    <>
        <div className='flex-prnt-login'>
            <div className='flex-left'>
            <form onSubmit={handleSignUp} className='form-login'>
            <h3>Sign Up</h3>
            <div className='frm-grp'>
            <input
                type="text"
                placeholder="Username"
                value={username} className='frm-field'
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='frm-grp'>
            <input
                type="password"
                placeholder="Password" className='frm-field'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='frm-grp'>
            <button type="submit" className='frm-btn'>Sign Up</button>
            </div>
              {message && <p className='invalid'>{message}</p>}
            </form>
            </div>
            <div className='flex-right'>
                <img src={imgLogin} alt='' />
            </div>
        </div>
    </>
  )
}

export default SignUp
